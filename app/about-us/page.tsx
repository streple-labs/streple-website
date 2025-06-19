"use client";

import Navbar from "@/components/navbar/Navbar";
import { anton } from "../fonts";
import SwigglyLine from "@/public/swiggly-line";
import PurpleShimmer from "@/public/purple-shimmer-aboutus";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { useEffect, useRef } from "react";

export default function Page() {
  const logosRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (logosRef.current) {
      const ul = logosRef.current;
      const clonedUl = ul.cloneNode(true) as HTMLElement;
      ul.parentNode?.insertBefore(clonedUl, ul.nextSibling);
      clonedUl.setAttribute("aria-hidden", "true");
    }
  }, []);

  return (
    <main className="lex flex-col">
      <section className="flex justify-center hero-section-bg px-4 sm:px-[6.4%]">
        <div className="mw max-xxl:min-h-screen relative overflow-hidden">
          <span className="hidden md:block absolute top-[39%] left-1/2 -translate-1/2">
            <PurpleShimmer />
          </span>
          <Navbar />
          {/* HERO Section */}
          <div className="flex flex-col min-h-[678px] mt-24 gap-[60px] items-center text-center">
            <h2
              className={`leading-[150%] tracking-[2px] justify-center items-center font-normal text-[27px] sm:text-3xl md:text-5xl lg:text-6xl max-w-[855px] text-gradient-copy-top-traders ${anton.className} relative`}
            >
              We make digital ownership Simple
              <span className="hidden md:block absolute -bottom-12 left-1/2 -translate-1/2">
                <SwigglyLine />
              </span>
            </h2>

            <p className="leading-[35px] md:leading-[44px] tracking-[1px] font-semibold text-base md:text-2xl lg:text-[28px] text-[#FFFFFFB2] max-w-[1256px]">
              Streple is the world&apos;s first social investing platform
              focused on helping people grow wealth together, across crypto,
              stocks, and ETFs
            </p>
          </div>
        </div>
      </section>

      <section className="flex justify-center px-4 sm:px-[6.4%] relative bg-[#1D1B1E]">
        <div className="flex items-center justify-between flex-col gap-8 md:gap-16 lg:gap-[92px] w-full mw py-12 md:py-[92px]">
          <div className="flex items-center justify-center flex-col gap-[49px]">
            <Image
              src="/streple-logo.png"
              alt="streple logo"
              width={112}
              height={34}
            />

            <p className="leading-[35px] md:leading-[44px] tracking-[1px] font-semibold text-base md:text-2xl lg:text-[28px] text-[#FFFFFFB2] text-center max-w-[1256px]">
              We see a future where digital ownership isn&apos;t just for the
              wealthy, but for everyday people who want to learn, trade, and
              grow together with Streple helping them take their first steps
              toward ownership and independence.
            </p>
          </div>

          <div className="flex justify-between gap-6 my-[96px]">
            <div className="flex flex-col gap-[60px] w-full md:w-1/2">
              <h3
                className={`text-gradient-earn-profits tracking-[2px] leading-[150%] font-normal text-[27px] sm:text-2xl md:text-3xl lg:text-4xl ${anton.className}`}
              >
                Founder story
              </h3>

              <div className="flex flex-col gap-[60px]">
                <p className="font-normal text-sm tracking-[1px] leading-8 xl:text-[21px] text-white">
                  &quot;Growing up, I watched a lot of people in my community
                  avoid crypto not because they didn&apos;t care, but because it
                  felt too confusing. I was also there. <br />
                  <br /> There were charts, jargon, and a lot of pressure to
                  &quot;just figure it out.&quot; I didn&apos;t start with a lot
                  of understanding, I started by chasing profits and slowly,
                  learning and understanding followed.
                  <br />
                  <br /> That&apos;s when I realized: people don&apos;t need
                  hype or complex tools. They just need a simple way to start,
                  and people they can grow with. <br />
                  <br /> That&apos;s why I created Streple: a place to learn
                  from real traders, copy their moves, make profit and grow your
                  skills, one step at a time. <br />
                  <br /> This isn&apos;t just about trading. It&apos;s about
                  building confidence, opportunity, and a team.
                  <br />
                  <br /> And if you&apos;re ready, you&apos;re part of it.&quot;
                  <br />
                  <br /> Arinze, Founder of Streple
                </p>
              </div>
            </div>

            <div className="bg-[#3B343F66] h-[541px] rounded-[23px] w-full md:w-1/2 max-w-[564px]" />
          </div>
        </div>
      </section>

      {/* <section className="w-full flex items-center justify-center h-[413px] relative overflow-hidden"></section> */}

      <section className="flex justify-center px-4 sm:px-[6.4%] relative bg-[#1D1B1E]">
        <div className="flex items-center flex-col mw my-[54px] md:my-[92px] gap-16 md:gap-[84px]">
          <div className="flex flex-col items-center justify-center gap-8 md:gap-6">
            <h3
              className={`text-gradient-earn-profits tracking-[2px] leading-[150%] font-normal text-[27px] sm:text-2xl md:text-3xl lg:text-4xl ${anton.className} text-center`}
            >
              We are backed by the best
            </h3>
            <p className="text-sm sm:text-base md:text-[21px] leading-8 tracking-[1px] text-[#FFFFFFB2]">
              We&apos;re supported by investors and builders who&apos;ve shaped
              the tools you already know and trust, now helping us shape the
              future of crypto trading.
            </p>
          </div>

          <div className="w-full mx-auto inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_32px,_black_calc(100%-32px),transparent_100%)] md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="flex infinite-scroll-right">
              <ul
                ref={logosRef}
                className="flex items-center md:justify-start justify-center shrink-0"
              >
                <li className="bg-[#5A555C1A] mx-3 w-[296px] h-[239px] flex items-center justify-center">
                  <Image
                    src={"/elysium.png"}
                    alt="logo"
                    width={188}
                    height={48}
                  />
                </li>
                <li className="bg-[#5A555C1A] mx-3 w-[296px] h-[239px] flex items-center justify-center">
                  <Image src={"/enet.png"} alt="logo" width={131} height={35} />
                </li>
                <li className="bg-[#5A555C1A] mx-3 w-[296px] h-[239px] flex items-center justify-center">
                  <Image
                    src={"/elysium.png"}
                    alt="logo"
                    width={188}
                    height={48}
                  />
                </li>
                <li className="bg-[#5A555C1A] mx-3 w-[296px] h-[239px] flex items-center justify-center">
                  <Image src={"/enet.png"} alt="logo" width={131} height={35} />
                </li>
                <li className="bg-[#5A555C1A] mx-3 w-[296px] h-[239px] flex items-center justify-center">
                  <Image
                    src={"/elysium.png"}
                    alt="logo"
                    width={188}
                    height={48}
                  />
                </li>
                <li className="bg-[#5A555C1A] mx-3 w-[296px] h-[239px] flex items-center justify-center">
                  <Image src={"/enet.png"} alt="logo" width={131} height={35} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="flex px-4 sm:px-[6.4%] justify-center relative overflow-x-hidden">
        <div className="flex flex-col items-center md:min-h-[610px] justify-center w-full mw">
          <div className="hidden md:block absolute -right-[70px] top-0 bg-no-repeat size-[242px] bg-[url('../public/bitcoin-traced.png')]" />
          <div className="relative flex flex-col justify-center mx-auto gap-10 start-trading-bg py-[52px] px-3 md:px-8 lg:py-[92px] lg:px-[80px]">
            <h3
              className={`flex mx-auto justify-center text-center leading-[150%] tracking-[2px] font-normal text-[27px] sm:text-3xl md:text-5xl lg:text-[52px] text-white max-w-[700px] ${anton.className}`}
            >
              Join thousands and start trading smarter with Streple
            </h3>

            <div className="flex items-center justify-center w-full">
              <button
                // onClick={() => {}}
                type="button"
                title="contact support"
                className="flex justify-center items-center w-full xs:w-[283px] h-[68px] md:h-[48px] rounded-[20px] px-4 py-3 gap-2.5 bg-[#F4E90E] hover:bg-[#CEC510]"
              >
                <span className="font-bold text-sm md:text-base leading-[150%] tracking-[2px] text-[#2C2C26]">
                  Start copying trades
                </span>
                <GoArrowRight size={16} className="text-[#2C2D28]" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
