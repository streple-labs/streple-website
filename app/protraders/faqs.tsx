"use client";

import { useState } from "react";
import { GoDash, GoPlus } from "react-icons/go";

const faqs = [
  {
    question: "How does copy trading work?",
    answer:
      "Followers automatically replicate your trades in real time, while you earn rewards.",
  },
  {
    question: "How are rewards distributed?",
    answer:
      "Performance-based points and token incentives are calculated daily and sent securely.",
  },
  {
    question: "Is my trading account safe?",
    answer: "Yes. Your funds remain under your control at all times.",
  },
  {
    question: "Can I control what trades are shared?",
    answer: "Absolutely. You decide which trades are visible for copying.",
  },
];

export default function Faq() {
  const [activeIdx, setActiveIdx] = useState<null | number>(null);

  const toggleFaq = (i: number) => {
    if (activeIdx == i) setActiveIdx(null);
    else setActiveIdx(i);
  };

  return (
    <div className="w-full space-y-6">
      {faqs.map((faq, i) => (
        <div
          className="rounded-[20px] px-3 md:px-8 py-5 md:py-6 bg-[#242324] flex flex-col gap-4 md:min-h-[108px] justify-center cursor-pointer"
          key={i}
          onClick={() => toggleFaq(i)}
        >
          <div className="w-full flex items-center justify-between gap-8">
            <p className="text-sm md:text-[21px] leading-8 tracking-[1px] font-normal ">
              {faq.question}
            </p>
            <span className="text-white/80">
              {activeIdx == i ? <GoDash size={18} /> : <GoPlus size={18} />}
            </span>
          </div>
          {activeIdx === i && (
            <p className="text-white/70 w-full text-start text-xs md:text-base leading-6 tracking-[1px] font-normal">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
