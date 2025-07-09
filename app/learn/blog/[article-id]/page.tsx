"use client";

import { anton } from "@/app/fonts";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown, FaPlay } from "react-icons/fa";

export default function Page() {
  const [showTranscript, setShowTranscript] = useState(false);
  const toggle = () => setShowTranscript((prev) => !prev);

  return (
    <main>
      <section className="flex flex-col px-4 sm:px-[6.4%] items-center">
        <div className="mw md:min-h-screen xl:min-h-auto relative overflow-hidden">
          <Navbar />
        </div>

        <div className="my-16 sm:my-24 md:my-32 space-y-16">
          <div className="w-full space-y-16">
            <div className="w-full space-y-10">
              <p className="font-semibold text-sm leading-[150%] tracking-[2px]">
                12 JUNE, 2025
              </p>
              <h1
                className={`justify-center items-center font-normal leading-[150%] tracking-[2%] text-2xl xs:text-[27px] sm:text-3xl md:text-5xl lg:text-[52px] lg:max-w-[862px] text-gradient-copy-top-traders ${anton.className}`}
              >
                How to Choose the Right Trader to Copy Without Getting Burned
              </h1>
              <p className="flex gap-1.5 items-center font-semibold text-sm leading-[150%] tracking-[2px]">
                <span>7 min</span>
                <span>|</span>
                <span>35K WATCH</span>
              </p>
            </div>
            <div className="flex items-center justify-center article-bg aspect-video w-full bg-no-repeat max-h-[521px] rounded-[10px]">
              <span className="size-32 bg-[#F4E90E] rounded-full items-center justify-center flex cursor-pointer">
                <FaPlay color="#FDF8FF" size={32} />
              </span>
            </div>
            <div className="w-full space-y-10 opacity-[52%]">
              <div className="flex items-center justify-between w-full py-5 px-6 border border-white/40 rounded-[15px]">
                <h4 className="text-[21px] sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-[1px]">
                  Full video transcript
                </h4>
                <p
                  className="flex items-center gap-6 cursor-pointer text-sm tracking-[2px] leading-[150%]"
                  onClick={toggle}
                >
                  <FaChevronDown
                    color="#FFFFFFB2"
                    width={16}
                    className={showTranscript ? "rotate-180" : ""}
                  />
                  {!showTranscript ? "Show transcript" : "Hide transcript"}
                </p>
              </div>

              {showTranscript && (
                <div className="space-y-8">
                  <div className="flex gap-[90px]">
                    <p className="text-xs leading-[150%] tracking-[2px] font-normal">
                      00:00
                    </p>
                    <p className="text-base md:text-xl leading-[150%] tracking-[2px] font-normal">
                      Hey there, welcome to Streple Learn. If you&apos;ve ever
                      asked, &quot;How do I know which trader to copy?&quot;
                      this video is for you.
                      <br /> Today, we&apos;re breaking down how to choose the
                      right trader without falling for hype, fake stats, or
                      risky shortcuts. It&apos;s tempting to pick the trader
                      with the craziest profit.But high ROI can come with high
                      risk. What you want to look for is consistency — not just
                      one big winning week. Check if their returns have been
                      stable over time — not just spiking. Look for: 3-6 months
                      of steady performance, Reasonable ROI with controlled
                      risk, Fewer dramatic losses. At Streple, every trader has
                      a visible risk score and drawdown data. This shows how
                      much they&apos;re willing to risk to earn returns. If
                      you&apos;re a beginner, avoid traders with maxed-out risk
                      levels. Instead, choose someone who protects their capital
                      and manages risk smartly.
                    </p>
                  </div>

                  <div className="flex gap-[90px]">
                    <p className="text-xs leading-[150%] tracking-[2px] font-normal">
                      01:00
                    </p>
                    <p className="text-base md:text-xl leading-[150%] tracking-[2px] font-normal">
                      Hey there, welcome to Streple Learn. If you&apos;ve ever
                      asked, &quot;How do I know which trader to copy?&quot;
                      this video is for you.
                      <br /> Today, we&apos;re breaking down how to choose the
                      right trader without falling for hype, fake stats, or
                      risky shortcuts. It&apos;s tempting to pick the trader
                      with the craziest profit.But high ROI can come with high
                      risk. What you want to look for is consistency — not just
                      one big winning week. Check if their returns have been
                      stable over time — not just spiking. Look for: 3-6 months
                      of steady performance, Reasonable ROI with controlled
                      risk, Fewer dramatic losses. At Streple, every trader has
                      a visible risk score and drawdown data. This shows how
                      much they&apos;re willing to risk to earn returns. If
                      you&apos;re a beginner, avoid traders with maxed-out risk
                      levels. Instead, choose someone who protects their capital
                      and manages risk smartly.
                    </p>
                  </div>

                  <div className="flex gap-[90px]">
                    <p className="text-xs leading-[150%] tracking-[2px] font-normal">
                      02:00
                    </p>
                    <p className="text-base md:text-xl leading-[150%] tracking-[2px] font-normal">
                      Hey there, welcome to Streple Learn. If you&apos;ve ever
                      asked, &quot;How do I know which trader to copy?&quot;
                      this video is for you.
                      <br /> Today, we&apos;re breaking down how to choose the
                      right trader without falling for hype, fake stats, or
                      risky shortcuts. It&apos;s tempting to pick the trader
                      with the craziest profit.But high ROI can come with high
                      risk. What you want to look for is consistency — not just
                      one big winning week. Check if their returns have been
                      stable over time — not just spiking. Look for: 3-6 months
                      of steady performance, Reasonable ROI with controlled
                      risk, Fewer dramatic losses. At Streple, every trader has
                      a visible risk score and drawdown data. This shows how
                      much they&apos;re willing to risk to earn returns. If
                      you&apos;re a beginner, avoid traders with maxed-out risk
                      levels. Instead, choose someone who protects their capital
                      and manages risk smartly.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6 md:sapce-y-8 w-full">
            <h5 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[1px]">
              More related videos
            </h5>
            <div className="flex flex-col md:flex-row gap-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-20 gap-x-5 w-full md:w-1/2 lg:w-[70%]">
                {Array.from({ length: 2 }).map((_, i) => (
                  <Link
                    href={
                      "/learn/blog/how-to-choose-the-right-trader-without-getting-burned"
                    }
                    className="space-y-5"
                    key={i}
                  >
                    <Image
                      alt="image"
                      src={`/trader-${i == 0 ? 2 : 3}.webp`}
                      width={401}
                      height={327}
                      className="w-full h-[327px] object-cover object-center bg-no-repeat rounded-[14px]"
                    />
                    <div className="space-y-2">
                      <p className="flex gap-2 items-center text-xs leading-4 tracking-[1px] text-white/50">
                        <span>7 min</span>{" "}
                        <span className="size-0.5 bg-white/50" />
                        <span>Apr 12, 2025</span>
                        <span className="size-0.5 bg-white/50" />
                        <span>24k views</span>
                      </p>
                      <p
                        className={`${anton.className} text-xl leading-[150%] tracking-[2%] font-normal text-gradient-copy-top-traders`}
                      >
                        How to choose a trader to copy
                      </p>
                      <p className="text-sm font-normal leading-[25px] tracking-[1px] text-white/70 xl:w-3/5">
                        Spot real performance vs hype. Avoid common beginner
                        traps
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-6 w-full md:w-1/2 lg:w-[30%]">
                <h4
                  className={`text-[21px] md:text-[27px] font-normal leading-[150%] tracking-[2px] ${anton.className}`}
                >
                  Recent Blogs
                </h4>
                <p className="leading-[25px] font-semibold text-sm tracking-[1px]">
                  <Link
                    href={
                      "/learn/blog/how-to-choose-the-right-trader-without-getting-burned"
                    }
                  >
                    Why Copy Trading Is Gaining Massive Popularity in 2025
                  </Link>
                  <br />
                  <br />
                  <Link
                    href={
                      "/learn/blog/how-to-choose-the-right-trader-without-getting-burned"
                    }
                  >
                    How to Spot a Reliable Trader Before You Copy
                  </Link>
                  <br />
                  <br />
                  <Link
                    href={
                      "/learn/blog/how-to-choose-the-right-trader-without-getting-burned"
                    }
                  >
                    Why Copy Trading Is Gaining Massive Popularity in 2025
                  </Link>
                  <br />
                  <br />
                  <Link
                    href={
                      "/learn/blog/how-to-choose-the-right-trader-without-getting-burned"
                    }
                  >
                    Crypto Market Volatility: What It Means for Copy Traders
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
