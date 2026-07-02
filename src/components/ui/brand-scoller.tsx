"use client";

import {
  BsWhatsapp,
  BsEnvelope,
  BsUpcScan,
  BsPrinter,
  BsCreditCard,
  BsQrCode,
  BsBank,
} from "react-icons/bs";

const integrations = [
  { Icon: BsQrCode, name: "UPI" },
  { Icon: BsWhatsapp, name: "WhatsApp" },
  { Icon: BsEnvelope, name: "Email" },
  { Icon: BsUpcScan, name: "Barcode" },
  { Icon: BsBank, name: "GST Network" },
  { Icon: BsPrinter, name: "Thermal Printer" },
  { Icon: BsCreditCard, name: "Payment Gateway" },
];

export const BrandScroller = () => {
  return (
    <div className="group flex overflow-hidden py-2 [--gap:2rem] [gap:var(--gap)] flex-row max-w-full [--duration:40s] [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]">
      {Array(4)
        .fill(0)
        .map((_, i) => (
          <div
            className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row"
            key={i}
          >
            {integrations.map(({ Icon, name }) => (
              <div key={name} className="flex items-center gap-3 rounded-full border border-[#e4dbf5] bg-white px-5 py-2.5 shadow-sm shadow-[#6C3BFF]/8">
                <Icon size={20} className="text-[#6C3BFF]" />
                <p className="text-sm font-semibold text-[#170b33] whitespace-nowrap">{name}</p>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export const BrandScrollerReverse = () => {
  return (
    <div className="group flex overflow-hidden py-2 [--gap:2rem] [gap:var(--gap)] flex-row max-w-full [--duration:40s] [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]">
      {Array(4)
        .fill(0)
        .map((_, i) => (
          <div
            className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-reverse flex-row"
            key={i}
          >
            {integrations.map(({ Icon, name }) => (
              <div key={name} className="flex items-center gap-3 rounded-full border border-[#e4dbf5] bg-white px-5 py-2.5 shadow-sm shadow-[#6C3BFF]/8">
                <Icon size={20} className="text-[#A343FC]" />
                <p className="text-sm font-semibold text-[#170b33] whitespace-nowrap">{name}</p>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};
