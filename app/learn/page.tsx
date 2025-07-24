import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { anton } from "../fonts";

export default function page() {
  return (
    <main>
      <section className="flex flex-col hero-section-bg px-4 sm:px-[6.4%] items-center">
        <div className="mw md:min-h-screen xl:min-h-auto relative overflow-hidden">
          <Navbar />

          <div className="relative flex flex-col lg:flex-row min-h-[70vh] xxl:min-h-[50vh] items-center justify-between my-16 xl:my-32 gap-16 lg:gap-[5%]">
            <div className="w-full lg:w-[50%] flex flex-col gap-[40px]">
              <h3
                className={`justify-center items-center font-normal leading-[150%] tracking-[2%] text-2xl xs:text-[27px] sm:text-3xl md:text-5xl lg:text-[52px] lg:max-w-[940px] text-gradient-copy-top-traders ${anton.className}`}
              >
                5 Essential Rules Every New Trader Must Know
              </h3>

              <p className="font-normal leading-8 text-sm sm:text-base lg:text-[21px] tracking-[1px] -mt-6 text-white/70">
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
                src={"/about-us-hero-img.webp"}
                alt="hero img"
                width={564}
                height={413}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-[#A082F9] via-[#A082F9] to-[#A082F91A] h-[77px] flex w-full gap-8 md:gap-16 overflow-hidden items-center">
        {Array.from({ length: 100 }).map((_, i) => (
          <h4
            key={i}
            className={` ${anton.className} text-2xl md:text-4xl leading-[150%] tracking-[2px] font-normal`}
          >
            {i % 3 === 0 ? "LEARN" : i % 3 === 1 ? "GROW" : "EARN"}
          </h4>
        ))}
      </div>

      <section className="flex items-center justify-center px-4 sm:px-[6.4%] relative">
        <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <Image
            src={"/purple-shimmer.webp"}
            alt="purple shimmer"
            width={750}
            height={324}
          />
        </span>
        <div className="flex items-center justify-between flex-col md:flex-row gap-8 w-full mw py-12 md:py-[92px]">
          <h4
            className={` ${anton.className} text-2xl lg:text-4xl leading-[150%] tracking-[2px]  font-normal text-center text-gradient-copy-top-traders`}
          >
            150+ <br /> Video lessons
          </h4>
          <h4
            className={` ${anton.className} text-2xl lg:text-4xl leading-[150%] tracking-[2px]  font-normal text-center text-gradient-copy-top-traders`}
          >
            300+ <br /> Article guides
          </h4>
          <h4
            className={` ${anton.className} text-2xl lg:text-4xl leading-[150%] tracking-[2px]  font-normal text-center text-gradient-copy-top-traders`}
          >
            2000+ <br /> Active learners
          </h4>
        </div>
      </section>

      <section className="bg-[#1D1B1E] flex px-4 sm:px-[6.4%] justify-center relative">
        <div className="relative flex flex-col mw my-16 gap-[40px]">
          <h4
            className={`text-gradient-copy-top-traders ${anton.className} text-2xl lg:text-4xl leading-[150%] tracking-[2px]  font-normal`}
          >
            Beginner guides
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[40px] w-full">
            {Array.from({ length: 6 }).map((_, i) => (
              <div className="space-y-5" key={i}>
                <Image
                  alt="image"
                  src={`/guide-${i + 1}.png`}
                  width={401}
                  height={237}
                  className={`w-full h-[237px] object-cover object-center bg-no-repeat rounded-[14px]`}
                />
                <div className="space-y-2">
                  <p className="flex gap-2 items-center text-xs leading-4 tracking-[1px] text-white/50">
                    <span>7 min</span> <span className="size-0.5 bg-white/50" />
                    <span>Apr 12, 2025</span>
                    <span className="size-0.5 bg-white/50" />
                    <span>24k views</span>
                  </p>
                  <p
                    className={`${anton.className} text-xl leading-[150%] tracking-[2%] font-normal text-gradient-copy-top-traders`}
                  >
                    How to choose a trader to copy
                  </p>
                  <p className="text-sm font-normal leading-[25px] tracking-[1px] text-white/70 max-w-[312px]">
                    Spot real performance vs hype. Avoid common beginner traps
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href={"/learn/blog"}
            className="text-[#EBF0D5] w-[200px] mx-auto text-base font-bold leading-[150%] tracking-[2px] flex items-center justify-center gap-3 border border-white/20 py-4 px-3 rounded-[15px]"
          >
            View all
            <GoArrowRight size={16} className="text-[#EBF0D5]" />
          </Link>
        </div>
      </section>

      <section className="bg-[#1D1B1E] flex px-4 sm:px-[6.4%] justify-center">
        <div className="relative flex flex-col mw my-16 md:my-24 gap-[40px]">
          <h4
            className={`${anton.className} text-2xl xs:text-[27px] sm:text-3xl md:text-4xl lg:text-[52px] text-gradient-copy-top-traders leading-[150%] tracking-[2px]`}
          >
            Latest
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-[40px]">
            {Array.from({ length: 3 }).map((_, i) => (
              <div className="space-y-5" key={i}>
                <Image
                  alt="image"
                  src={`/guide-${i + 1}.png`}
                  width={401}
                  height={237}
                  className={`w-full h-[237px] object-cover object-center bg-no-repeat rounded-[14px]`}
                />
                <div className="space-y-2">
                  <p className="flex gap-2 items-center text-xs leading-4 tracking-[1px] text-white/50">
                    <span>7 min</span> <span className="size-0.5 bg-white/50" />
                    <span>Apr 12, 2025</span>
                    <span className="size-0.5 bg-white/50" />
                    <span>24k views</span>
                  </p>
                  <p
                    className={`${anton.className} text-xl leading-[150%] tracking-[2%] font-normal text-gradient-copy-top-traders`}
                  >
                    How to choose a trader to copy
                  </p>
                  <p className="text-sm font-normal leading-[25px] tracking-[1px] text-white/70 max-w-[312px]">
                    Spot real performance vs hype. Avoid common beginner traps
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href={"/learn/blog"}
            className="text-[#EBF0D5] w-[200px] mx-auto text-base font-bold leading-[150%] tracking-[2px] flex items-center justify-center gap-3 border border-white/20 py-4 px-3 rounded-[15px]"
          >
            View all
            <GoArrowRight size={16} className="text-[#EBF0D5]" />
          </Link>
        </div>
      </section>

      <section className="flex px-4 sm:px-[6.4%] justify-center relative overflow-x-hidden bg-cover bg-no-repeat bg-center bg-[url('../public/section-6-bg.webp')]">
        <div className="flex flex-col items-center md:min-h-[610px] justify-center my-16 md:my-24 w-full mw">
          {/* <div className="absolute -right-[70px] top-0 bg-no-repeat size-[242px] bg-[url('../public/bitcoin-traced.webp')]" /> */}
          <div className="flex flex-col justify-center mx-auto gap-10 start-trading-bg py-[52px] px-3 md:px-8 lg:py-[92px] lg:px-[80px]">
            <span
              className={`flex flex-row mx-auto justify-center text-center leading-[150%] tracking-[2px] font-normal text-[27px] sm:text-3xl md:text-5xl lg:text-[52px]  max-w-[700px] ${anton.className}`}
            >
              Sign up to unlock full access to guides and resources
            </span>

            <p className="w-full max-w-[694px] text-center text-white/70 text-base md:text-[21px] leading-8 tracking-[1px] mx-auto">
              Contact our support team to get answers and the help that you need
            </p>

            <div className="flex items-center justify-center w-full">
              <a
                href="https://forms.gle/FZmzQX3SbVjiHPo18"
                target="_blank"
                rel="noopener noreferrer"
                type="button"
                title="contact support"
                className="flex flex-row justify-center items-center w-full xs:w-[283px] h-[68px] md:h-[48px] rounded-[20px] px-4 py-3 gap-2.5 bg-[#F4E90E] hover:bg-[#CEC510]"
              >
                <span className="font-bold text-sm md:text-base leading-[150%] tracking-[2px] text-[#2C2C26]">
                  Get started
                </span>
                <GoArrowRight size={16} className="text-[#2C2D28]" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
