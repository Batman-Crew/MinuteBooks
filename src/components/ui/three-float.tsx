"use client";

import { Component, Suspense, useEffect, useRef, useState, type ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import type { Mesh } from "three";

function FloatingBlob() {
  const mesh = useRef<Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = t * 0.15;
    mesh.current.rotation.y = t * 0.22;
    mesh.current.position.y = Math.sin(t * 0.6) * 0.25;
  });

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1.4, 6]} />
      <MeshDistortMaterial
        color="#7C4DFF"
        speed={1.6}
        distort={0.35}
        radius={1}
        roughness={0.2}
        metalness={0.4}
      />
    </mesh>
  );
}

class CanvasErrorBoundary extends Component<{ children: ReactNode }, { errored: boolean }> {
  state = { errored: false };
  static getDerivedStateFromError() {
    return { errored: true };
  }
  componentDidCatch() {
    // Silently degrade — this is a decorative 3D accent, never load-bearing.
  }
  render() {
    if (this.state.errored) return null;
    return this.props.children;
  }
}

function isWebGLAvailable() {
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

export function ThreeFloat({ className }: { className?: string }) {
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    setSupported(isWebGLAvailable());
  }, []);

  if (!supported) return null;

  return (
    <div className={className} aria-hidden>
      <CanvasErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 4.5], fov: 42 }}
          dpr={[1, 1.5]}
          gl={{ alpha: true, failIfMajorPerformanceCaveat: false }}
          onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
        >
          <ambientLight intensity={0.8} />
          <directionalLight position={[3, 3, 3]} intensity={1.2} color="#A343FC" />
          <directionalLight position={[-3, -2, -2]} intensity={0.7} color="#6C3BFF" />
          <Suspense fallback={null}>
            <FloatingBlob />
          </Suspense>
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
}
