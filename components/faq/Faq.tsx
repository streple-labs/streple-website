"use client";
import { anton } from "@/app/fonts";
import { useState } from "react";
import { GoDash, GoPlus } from "react-icons/go";

const faqs = [
  {
    question: "Do I need trading experience?",
    answer: "Streple is built for beginners. We guide you step-by-step.",
  },
  {
    question: "Can I make quick money here?",
    answer:
      "That’s not the goal. We focus on skill-building. Learning first, profits come second.",
  },
  {
    question: "Do I need a laptop?",
    answer:
      "You can do everything from your phone. Streple is designed to be simple and mobile-friendly.",
  },
  {
    question: "Can I try it before using real money?",
    answer:
      "Yes! Every user starts with a free demo account loaded with virtual funds. Practice copy trading, test out the platform, and build confidence before switching to real money.",
  },
];

export default function Faq() {
  const [activeIdx, setActiveIdx] = useState<null | number>(null);

  const toggleFaq = (i: number) => {
    if (activeIdx == i) setActiveIdx(null);
    else setActiveIdx(i);
  };

  return (
    <div className="w-full max-w-[932px] space-y-6">
      {faqs.map((faq, i) => (
        <div
          className="rounded-[20px] px-3 md:px-8 py-5 md:py-6 bg-[#242324] flex flex-col gap-4 md:min-h-[108px] justify-center"
          key={i}
        >
          <div className="w-full flex items-center justify-between gap-8">
            <p className="text-sm md:text-[21px] leading-8 tracking-[1px] font-normal text-white">
              {faq.question}
            </p>
            <span
              className="cursor-pointer text-white/80"
              onClick={() => toggleFaq(i)}
            >
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
