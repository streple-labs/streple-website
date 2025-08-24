"use client";

import { anton } from "@/app/fonts";
import Image from "next/image";
import { useMemo, useState } from "react";

export default function JoinProtraderProgramSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = useMemo(
    () => [
      {
        title: "Share your strategy",
        desc: "Publish your trades, explain your moves, and let your skills speak for themselves. Whether it's spot, futures, or bot strategies — your edge becomes your value.",
        img: "/images/share-strategy.webp",
      },
      {
        title: "Grow a Following",
        desc: "Attract a loyal base of copiers who trust your style and performance. As your track record grows, so does your influence right inside the Streple ecosystem.",
        img: "/images/grow-following.webp",
      },
      {
        title: "Earn a Commission",
        desc: "Get rewarded every time someone copies your trades. Your insights generate income — and Streple handles the rest automatically.",
        img: "/images/earn-commission.webp",
      },
    ],
    []
  );

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-[82px] max-lg:mx-[5%] py-8 lg:py-0 pt-[72px] lg:pt-0">
      <div className="flex flex-col gap-6 md:gap-10 w-435-lg w-544-xl xxl:w-[650px]">
        <h3
          className={`text-gradient-earn-profits tracking-[2px] leading-[150%] font-normal text-2xl xs:text-[27px] md:text-3xl lg:text-4xl xl:text-5xl xxl:text-[52px] ${anton.className}`}
        >
          Join the Protrader program and get to earn more
        </h3>

        {steps.map(({ title, desc, img }, i) => (
          <div
            key={i}
            onClick={() => setActiveStep(i)}
            className={`${
              activeStep !== i && "opacity-30"
            } py-3 md:py-4 px-4 md:px-6 rounded-[10px] cursor-pointer gap-[18px] flex flex-col bg-[#5A555C1A] `}
          >
            <h5 className="text-base md:text-xl xl:text-2xl leading-8 tracking-[1px] font-bold">
              {title}
            </h5>
            <p className="text-sm md:text-base xl:text-[21px] leading-6 md:leading-8 tracking-[1px]">
              {desc}
            </p>

            <Image
              src={img}
              alt={title}
              width={564}
              height={504}
              className="lg:hidden w-full max-lg:mx-auto h-[250px] min-[400px]:w-[320px] min-[400px]:h-[300px] sm:w-[564px] sm:h-[504px] lg:h-[380px] xl:h-[504px] lg:w-[401px] xl:w-[501px] xxl:w-[564px]"
            />
          </div>
        ))}

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://forms.gle/77BS1RtnUBjxWANZ8"
          className="w-fit flex flex-row items-center rounded-[20px] px-4 py-3 gap-3 bg-[#B39FF0] font-bold tracking-[2px] leading-[150%] text-base text-[#2C2D26]"
        >
          Apply to be a ProTrader
        </a>
      </div>

      <Image
        src={steps[activeStep].img}
        alt={steps[activeStep].title}
        width={564}
        height={504}
        className="hidden lg:block max-lg:mx-auto w-[260px] h-[250px] min-[400px]:w-[320px] min-[400px]:h-[300px] sm:w-[564px] sm:h-[504px] lg:h-[380px] xl:h-[504px] lg:w-[401px] xl:w-[501px] xxl:w-[564px]"
      />
    </div>
  );
}
