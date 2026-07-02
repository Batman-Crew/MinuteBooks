"use client";

import Image from "next/image";
import {
  ScanBarcode,
  Boxes,
  BookOpenCheck,
  Landmark,
  Users,
  ArrowRight,
  Percent,
  ShoppingCart,
  ClipboardList,
  BarChart3,
  Building2,
  Wallet,
  Repeat,
  UserCog,
  TrendingUp,
  Banknote,
  ReceiptText,
  Archive,
} from "lucide-react";
import { motion } from "motion/react";
import { BlurReveal } from "@/components/ui/blur-reveal";

const flagship = [
  {
    id: "pos",
    icon: ScanBarcode,
    title: "Smart POS. Happy Customers. More Sales.",
    description:
      "Ring up sales in seconds with a POS built for speed — barcode scanning, split payments, and instant receipts across every register.",
    tags: ["Fast Billing", "Multi-payment", "Offline mode"],
    mock: "pos",
  },
  {
    id: "inventory",
    icon: Boxes,
    title: "Inventory that updates itself.",
    description:
      "Real-time stock sync across every branch. Low-stock alerts, batch tracking, and reorder points that keep you from ever running dry.",
    tags: ["Real-time sync", "Multi-branch", "Batch tracking"],
    mock: "inventory",
  },
  {
    id: "accounting",
    icon: BookOpenCheck,
    title: "Books that balance themselves.",
    description:
      "Double-entry accounting made invisible. Auto-categorized transactions, ledgers, and statements that stay audit-ready every single day.",
    tags: ["Auto ledgers", "P&L", "Balance sheet"],
    mock: "accounting",
  },
  {
    id: "gst",
    icon: Percent,
    title: "GST filing without the headache.",
    description:
      "Auto-computed GST, one-click GSTR filing, and e-invoicing built in. Never miss a deadline or a rate change again.",
    tags: ["GSTR-1 / 3B", "e-Invoicing", "e-Way bills"],
    mock: "gst",
  },
  {
    id: "payroll",
    icon: Users,
    title: "Payroll, paid on time, every time.",
    description:
      "Automated salary runs, PF/ESI compliance, and payslips your team will actually enjoy opening.",
    tags: ["Auto salary run", "PF / ESI", "Payslips"],
    mock: "payroll",
  },
];

const moreModules = [
  { icon: Users, title: "CRM", description: "Track leads and relationships in one place." },
  { icon: ShoppingCart, title: "Sales", description: "Quotes, orders, and sales pipelines." },
  { icon: ClipboardList, title: "Purchase", description: "Purchase orders and vendor bills." },
  { icon: BarChart3, title: "Reports", description: "50+ real-time business reports." },
  { icon: Building2, title: "Multi-Branch", description: "Manage every outlet from one login." },
  { icon: ScanBarcode, title: "Barcode", description: "Print and scan barcodes natively." },
  { icon: UserCog, title: "Customer Mgmt", description: "Loyalty, credit limits, and history." },
  { icon: Repeat, title: "Vendor Mgmt", description: "Supplier ledgers and payment terms." },
  { icon: TrendingUp, title: "Analytics", description: "Trends, forecasts, and dashboards." },
  { icon: Landmark, title: "Bank Reconciliation", description: "Auto-match bank statements." },
  { icon: Banknote, title: "Expenses", description: "Capture and categorize every expense." },
  { icon: Archive, title: "Asset Management", description: "Track assets and depreciation." },
];

export function Features() {
  return (
    <section id="features" className="py-28 lg:py-36 relative bg-white overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-175 h-175 bg-[#6C3BFF]/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <BlurReveal className="text-center mb-24">
          <span className="tag-pill mb-4 inline-block">Everything, in one platform</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-[#170b33] mb-4">
            Built for how Indian businesses actually run.
          </h2>
          <p className="text-[#5d4483] text-lg max-w-2xl mx-auto">
            From the counter to the balance sheet — five flagship modules built
            to work together, not against each other.
          </p>
        </BlurReveal>

        <div className="flex flex-col gap-24 lg:gap-32">
          {flagship.map((f, i) => (
            <div
              key={f.id}
              id={f.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <BlurReveal>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6C3BFF]/10 mb-6">
                  <f.icon size={22} className="text-[#6C3BFF]" />
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#170b33] mb-4 leading-tight">
                  {f.title}
                </h3>
                <p className="text-[#5d4483] leading-relaxed mb-6 max-w-lg">{f.description}</p>
                <div className="flex flex-wrap gap-2">
                  {f.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </BlurReveal>

              <BlurReveal delay={0.1}>
                <FeatureMock kind={f.mock} />
              </BlurReveal>
            </div>
          ))}
        </div>

        {/* More modules grid */}
        <BlurReveal className="mt-32 text-center mb-12">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#170b33]">
            ...and a dozen more modules underneath.
          </h3>
        </BlurReveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {moreModules.map((m, i) => (
            <BlurReveal key={m.title} delay={i * 0.04}>
              <div className="group h-full rounded-2xl border border-[#e4dbf5] bg-[#F8F9FC] p-5 glass-card-hover transition-all duration-300">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-[#e4dbf5] mb-3 group-hover:bg-[#6C3BFF] transition-colors">
                  <m.icon size={16} className="text-[#6C3BFF] group-hover:text-white transition-colors" />
                </span>
                <div className="font-bold text-sm text-[#170b33] mb-1">{m.title}</div>
                <p className="text-xs text-[#7c6699] leading-relaxed">{m.description}</p>
              </div>
            </BlurReveal>
          ))}
        </div>

        <BlurReveal className="text-center mt-16">
          <a href="#pricing" className="btn-outline inline-flex">
            See all modules <ArrowRight size={15} />
          </a>
        </BlurReveal>
      </div>
    </section>
  );
}

function FeatureMock({ kind }: { kind: string }) {
  return (
    <div className="rounded-3xl border border-[#e4dbf5] bg-white shadow-xl shadow-[#6C3BFF]/10 p-5 overflow-hidden">
      {kind === "pos" && <POSMock />}
      {kind === "inventory" && <InventoryMock />}
      {kind === "accounting" && <AccountingMock />}
      {kind === "gst" && <GSTMock />}
      {kind === "payroll" && <PayrollMock />}
    </div>
  );
}

function POSMock() {
  const items = [
    { name: "T-Shirt", price: "₹550", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop&q=60" },
    { name: "Jeans", price: "₹1250", img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=200&fit=crop&q=60" },
    { name: "Shoes", price: "₹1999", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=200&h=200&fit=crop&q=60" },
    { name: "Watch", price: "₹2499", img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=200&h=200&fit=crop&q=60" },
  ];
  return (
    <div className="grid grid-cols-5 gap-3">
      <div className="col-span-3 grid grid-cols-2 gap-2">
        {items.map((it) => (
          <div key={it.name} className="rounded-lg bg-[#F8F9FC] border border-[#e4dbf5] p-2.5">
            <div className="relative h-20 rounded-md mb-2 overflow-hidden">
              <Image src={it.img} alt={it.name} fill sizes="140px" className="object-cover" />
            </div>
            <div className="text-[11px] font-semibold text-[#170b33]">{it.name}</div>
            <div className="text-[10px] text-[#7c6699]">{it.price}</div>
          </div>
        ))}
      </div>
      <div className="col-span-2 rounded-lg border border-[#e4dbf5] p-3 flex flex-col">
        <div className="text-[10px] font-semibold text-[#7c6699] mb-2">Current Sale</div>
        <div className="space-y-1.5 flex-1 text-[10px]">
          <div className="flex justify-between text-[#170b33]"><span>T-Shirt x1</span><span>₹550</span></div>
          <div className="flex justify-between text-[#170b33]"><span>Jeans x1</span><span>₹1250</span></div>
        </div>
        <div className="border-t border-[#e4dbf5] pt-2 mt-2 flex justify-between text-xs font-bold text-[#170b33]">
          <span>Total</span><span>₹1,800</span>
        </div>
      </div>
    </div>
  );
}

function InventoryMock() {
  const stock = [
    { name: "Rice 25kg", pct: 82 },
    { name: "Cooking Oil", pct: 46 },
    { name: "Sugar 5kg", pct: 18 },
    { name: "Wheat Flour", pct: 64 },
  ];
  return (
    <div className="space-y-3">
      {stock.map((s) => (
        <div key={s.name}>
          <div className="flex justify-between text-xs mb-1">
            <span className="font-medium text-[#170b33]">{s.name}</span>
            <span className={s.pct < 25 ? "text-[#E0554F] font-semibold" : "text-[#7c6699]"}>{s.pct}%</span>
          </div>
          <div className="h-2 rounded-full bg-[#F8F9FC] border border-[#e4dbf5] overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${s.pct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className={`h-full rounded-full ${s.pct < 25 ? "bg-[#E0554F]" : "bg-linear-to-r from-[#6C3BFF] to-[#A343FC]"}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function AccountingMock() {
  const rows = [
    { name: "Sales Revenue", debit: "", credit: "₹1,24,000" },
    { name: "Office Rent", debit: "₹18,000", credit: "" },
    { name: "Accounts Receivable", debit: "₹42,500", credit: "" },
    { name: "GST Payable", debit: "", credit: "₹8,900" },
  ];
  return (
    <div className="rounded-xl border border-[#e4dbf5] overflow-hidden">
      <div className="grid grid-cols-3 text-[10px] font-semibold text-[#7c6699] bg-[#F8F9FC] px-3 py-2">
        <span>Ledger</span><span className="text-right">Debit</span><span className="text-right">Credit</span>
      </div>
      {rows.map((r) => (
        <div key={r.name} className="grid grid-cols-3 text-[11px] px-3 py-2 border-t border-[#EDE7FF]">
          <span className="text-[#170b33] font-medium truncate">{r.name}</span>
          <span className="text-right text-[#5d4483]">{r.debit}</span>
          <span className="text-right text-[#5d4483]">{r.credit}</span>
        </div>
      ))}
    </div>
  );
}

function GSTMock() {
  const stages = ["GSTR-1", "GSTR-3B", "e-Invoice", "Filed"];
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        {stages.map((s, i) => (
          <div key={s} className="flex-1 flex items-center">
            <div className="flex flex-col items-center gap-1.5 flex-1">
              <div className={`h-7 w-7 rounded-full flex items-center justify-center text-[10px] font-bold ${i < 3 ? "bg-[#6C3BFF] text-white" : "bg-[#EDE7FF] text-[#6C3BFF]"}`}>
                {i + 1}
              </div>
              <span className="text-[9px] text-[#7c6699] text-center">{s}</span>
            </div>
            {i < stages.length - 1 && <div className="h-0.5 flex-1 bg-[#EDE7FF] -mt-4" />}
          </div>
        ))}
      </div>
      <div className="rounded-xl bg-[#F8F9FC] border border-[#e4dbf5] p-4 flex items-center justify-between">
        <div>
          <div className="text-[10px] text-[#7c6699]">Total GST liability</div>
          <div className="text-lg font-bold text-[#170b33]">₹18,240</div>
        </div>
        <span className="px-3 py-1 rounded-full bg-[#E7F8EE] text-[#1E9E5A] text-[10px] font-semibold">On Track</span>
      </div>
    </div>
  );
}

function PayrollMock() {
  const employees = [
    { name: "Aditi R.", role: "Store Manager", amount: "₹42,000" },
    { name: "Karan S.", role: "Cashier", amount: "₹22,500" },
    { name: "Neha P.", role: "Accountant", amount: "₹35,000" },
  ];
  return (
    <div className="space-y-2.5">
      {employees.map((e) => (
        <div key={e.name} className="flex items-center gap-3 rounded-xl border border-[#e4dbf5] p-2.5">
          <div className="h-9 w-9 rounded-full bg-linear-to-br from-[#6C3BFF] to-[#A343FC] flex items-center justify-center text-white text-xs font-bold">
            {e.name.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold text-[#170b33] truncate">{e.name}</div>
            <div className="text-[10px] text-[#7c6699]">{e.role}</div>
          </div>
          <span className="px-2 py-1 rounded-full bg-[#E7F8EE] text-[#1E9E5A] text-[10px] font-semibold flex items-center gap-1">
            <ReceiptText size={10} /> {e.amount}
          </span>
        </div>
      ))}
      <div className="rounded-xl bg-linear-to-r from-[#6C3BFF] to-[#A343FC] text-white text-xs font-semibold text-center py-2.5 flex items-center justify-center gap-1.5">
        <Wallet size={13} /> Run payroll for 12 employees
      </div>
    </div>
  );
}
