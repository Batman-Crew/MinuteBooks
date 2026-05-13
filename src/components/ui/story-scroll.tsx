'use client';

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function cx(...parts: Array<string | undefined | false | null>): string {
  return parts.filter(Boolean).join(' ');
}

/* ─── FlowSection ───────────────────────────────────────────────── */

export interface FlowSectionProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  'aria-label'?: string;
}

export const FlowSection: React.FC<FlowSectionProps> = ({
  className,
  style = {},
  children,
  'aria-label': ariaLabel,
}) => (
  <section
    data-flow-section
    aria-label={ariaLabel}
    className={cx('relative w-full min-h-screen', className)}
  >
    {/* min-h-screen ensures the background always covers the full viewport so
        the pinned section beneath is never visible through a gap */}
    <div
      data-flow-inner
      className="flow-art-container relative w-full min-h-screen will-change-transform"
      style={{ transformOrigin: 'bottom left', ...style }}
    >
      {children}
    </div>
  </section>
);

/* ─── FlowArt ───────────────────────────────────────────────────── */

export interface FlowArtProps {
  children: React.ReactNode;
  className?: string;
  'aria-label'?: string;
}

const childCount = (children: React.ReactNode) => React.Children.count(children);

const FlowArt: React.FC<FlowArtProps> = ({
  children,
  className,
  'aria-label': ariaLabel = 'Story scroll',
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect reduced-motion preference
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = (e: MediaQueryListEvent | MediaQueryList) => setReducedMotion(e.matches);
    update(mq);
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // Detect desktop (≥1024 px) and re-check on resize
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Kill all ScrollTriggers synchronously before React tears down the DOM.
  // This prevents the "removeChild" NotFoundError caused by GSAP's pin-spacer
  // wrappers still holding elements when React tries to remove them.
  useLayoutEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill(true));
    };
  }, []);

  useGSAP(
    () => {
      // Skip on mobile or reduced-motion
      if (!containerRef.current || reducedMotion || !isDesktop) return;

      const sections = Array.from(
        containerRef.current.querySelectorAll<HTMLElement>('[data-flow-section]'),
      );
      if (sections.length === 0) return;

      sections.forEach((section, i) => {
        // Stack sections so later ones sit on top while pinned ones stay visible
        gsap.set(section, { zIndex: i + 1 });

        const inner = section.querySelector<HTMLElement>('.flow-art-container');
        if (!inner) return;

        // Fan-in: rotate incoming section from slight tilt to flat
        if (i > 0) {
          gsap.set(inner, { rotation: 10, transformOrigin: 'bottom left' });
          gsap.to(inner, {
            rotation: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',   // animation starts when section top enters viewport bottom
              end: 'top 15%',        // finishes when section top reaches 15% from viewport top
              scrub: 1,              // 1-second lag for smooth, buttery feel
            },
          });
        }

        // Pin every section except the last while the next one scrolls in
        if (i < sections.length - 1) {
          ScrollTrigger.create({
            trigger: section,
            start: 'bottom bottom',  // pin starts when section bottom hits viewport bottom
            end: 'bottom top',       // pin ends when section bottom exits viewport top
            pin: true,
            pinSpacing: false,       // next section stacks directly, no gap
          });
        }
      });

      ScrollTrigger.refresh();
    },
    { scope: containerRef, dependencies: [childCount(children), reducedMotion, isDesktop] },
  );

  return (
    <main
      ref={containerRef}
      aria-label={ariaLabel}
      className={cx('w-full', className)}
    >
      {children}
    </main>
  );
};

export default FlowArt;
