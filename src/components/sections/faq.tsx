"use client";

import { Accordion } from "@base-ui/react/accordion";
import { Plus } from "lucide-react";
import { BlurReveal } from "@/components/ui/blur-reveal";

const faqs = [
  {
    q: "Is Minute Books compliant with the latest GST rules?",
    a: "Yes. GST rates, GSTR-1/3B formats, e-invoicing, and e-way bills are updated automatically the moment regulations change — no manual patches or version upgrades needed.",
  },
  {
    q: "Can I use Minute Books across multiple store locations?",
    a: "Absolutely. Every plan above Starter supports multiple branches with real-time inventory and sales sync, all viewable from a single owner dashboard.",
  },
  {
    q: "Do I need an accountant to switch from Excel or Tally?",
    a: "No. Our migration tool imports your existing ledgers, customers, and inventory in one afternoon, and our support team guides you through the first close.",
  },
  {
    q: "Does it work offline at the billing counter?",
    a: "Yes, the POS keeps billing locally during internet outages and syncs automatically the moment connectivity returns — you never lose a sale.",
  },
  {
    q: "Is my financial data secure?",
    a: "All data is encrypted in transit and at rest, backed up continuously, and hosted on infrastructure built for enterprise-grade compliance.",
  },
  {
    q: "Can I cancel or change plans anytime?",
    a: "Yes — upgrade, downgrade, or cancel whenever you like. There are no lock-in contracts on any plan, including Enterprise.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-28 lg:py-36 relative bg-[#F8F9FC] overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative z-10">
        <BlurReveal className="text-center mb-16">
          <span className="tag-pill mb-4 inline-block">FAQ</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#170b33] mb-4">
            Questions, answered.
          </h2>
          <p className="text-[#5d4483] text-lg">Everything you need to know before you switch.</p>
        </BlurReveal>

        <BlurReveal delay={0.1}>
          <Accordion.Root className="flex flex-col gap-3">
            {faqs.map((item) => (
              <Accordion.Item
                key={item.q}
                className="rounded-2xl border border-[#e4dbf5] bg-white overflow-hidden"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-heading font-semibold text-[#170b33] cursor-pointer">
                    {item.q}
                    <Plus
                      size={18}
                      className="shrink-0 text-[#6C3BFF] transition-transform duration-300 group-data-open:rotate-45"
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Panel className="overflow-hidden text-sm text-[#5d4483] leading-relaxed transition-all duration-300 ease-out data-[ending-style]:h-0 data-[starting-style]:h-0 h-(--accordion-panel-height)">
                  <div className="px-6 pb-5 -mt-1">{item.a}</div>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </BlurReveal>
      </div>
    </section>
  );
}
