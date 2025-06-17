import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import React from "react";
import { anton } from "../fonts";
import Link from "next/link";

export default function page() {
  return (
    <main className="flex flex-col">
      <section className="flex flex-col hero-section-bg">
        <div className="min-h-screen w-full relative overflow-hidden">
          <Navbar />

          <div className="relative flex flex-col md:flex-row items-center  justify-between mx-auto w-909-lg w-1132-xl xxl:w-[1272px] 2xl:w-[1356px] my-16 gap-[5%] px-2">
            <div className="md:w-[50%] flex flex-col gap-[40px]">
              <h3
                className={`justify-center items-center font-normal leading-[150%] tracking-[2%] text-2xl xs:text-[27px] sm:text-3xl md:text-5xl lg:text-[52px] max-w-[940px] text-gradient-copy-top-traders ${anton.className}`}
              >
                5 Essential Rules Every New Trader Must Know
              </h3>

              <p className="font-normal leading-8 text-sm sm:text-base lg:text-[21px] -mt-6 text-white/70">
                Master the fundamentals before you start copying. This 8-minute
                guide covers the trading basics that separate successful
                beginners from costly mistakes
              </p>

              <Link
                href="#"
                className="w-[172px] flex flex-row justify-center items-center rounded-[20px] px-4 py-3 gap-3 bg-[#B39FF0] font-bold tracking-[2px] leading-[150%] text-base text-[#2C2D28]"
              >
                Watch now
              </Link>
            </div>
            <div className="">
              <Image
                src={"/about-us-hero-img.png"}
                alt="hero img"
                width={564}
                height={413}
                className="hidden md:block"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
