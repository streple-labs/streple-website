"use client";

import { useEffect, useState } from "react";

const texts = [
  "Smarted Trades, Better Gain",
  "Copy Trades. Grow Smarter",
  "You are not alone anymore",
  "Every Trade is a Lesson",
];

export default function TradingInfo() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full flex items-center justify-center relative overflow-hidden bg-[url('../public/images/purple-bg.webp')] bg-cover bg-no-repeat bg-center px-4 md:px-[6.4%] py-16 lg:py-[72px]">
      <p className="text-[#EACAFA] text-3xl md:text-5xl lg:text-7xl leading-[150%] tracking-[1px] font-bold max-w-[753px] text-center">
        {texts[currentTextIndex]}
      </p>
    </section>
  );
}
