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
                src={"/about-us-hero-img.png"}
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
            className={` ${anton.className} text-2xl md:text-4xl leading-[150%] tracking-[2px]  font-normal`}
          >
            {i % 3 === 0 ? "LEARN" : i % 3 === 1 ? "GROW" : "EARN"}
          </h4>
        ))}
      </div>

      <section className="flex items-center justify-center px-4 sm:px-[6.4%] relative">
        <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <Image
            src={"/purple-shimmer.png"}
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

      <section className="bg-[#1D1B1E] flex px-4 sm:px-[6.4%] justify-center">
        <div className="relative flex flex-col items-center mw my-16 gap-[40px]">
          <div className="flex flex-col justify-center items-center gap-[31px]">
            <h4
              className={`text-gradient-copy-top-traders ${anton.className} text-2xl lg:text-4xl text-center leading-[150%] tracking-[2px]  font-normal`}
            >
              Master Copy Trading at Your Own Pace
            </h4>

            <p className="font-normal leading-8 text-sm sm:text-base lg:text-[21px] tracking-[1px] text-white/70 max-w-4xl text-center">
              Explore our complete library of expert videos and articles,
              designed to take you from trading newbie to confident copier
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-[52px] flex-wrap">
            {["All", "Beginner", "Advanced", "Top guides"].map((item, i) => (
              <button
                key={i}
                className={`${
                  i == 0
                    ? "bg-[#A082F9] text-black"
                    : "text-[#E4E4D9] pp-lr-gradient"
                } min-w-[122px] text-xs md:text-base leading-6 tracking-[1px] font-normal p-3 rounded-[25px] flex items-center justify-center gap-2.5 h-[48px]`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px]">
            {Array.from({ length: 6 }).map((_, i) => (
              <div className="space-y-5" key={i}>
                <Image
                  alt="image"
                  src={`/trader-${
                    i == 0
                      ? 1
                      : i == 1
                      ? 2
                      : i == 2
                      ? 3
                      : i == 3
                      ? 3
                      : i == 4
                      ? 2
                      : 1
                  }.jpg`}
                  width={401}
                  height={319}
                  className={`w-full object-cover object-center bg-no-repeat rounded-[14px] ${
                    i == 0
                      ? "h-[372px]"
                      : i == 1
                      ? "h-[319px]"
                      : i == 2
                      ? "h-[319px]"
                      : i == 3
                      ? "h-[319px]"
                      : i == 4
                      ? "h-[319px]"
                      : "h-[372px]"
                  }`}
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
                  <p className="text-sm font-normal leading-[25px] tracking-[1px] text-white/70 w-4/5">
                    Spot real performance vs hype. Avoid common beginner traps
                  </p>

                  <div className="pt-2 flex gap-2 items-center text-white/50">
                    <span className="min-w-[89px] px-1 py-2 gap-2.5 flex items-center justify-center border border-[#FDF9FF99] rounded-[21px] text-xs leading-4 tracking-[1px]">
                      Beginner
                    </span>
                    <span className="min-w-[89px] px-1 py-2 gap-2.5 flex items-center justify-center border border-[#FDF9FF99] rounded-[21px] text-xs leading-4 tracking-[1px]">
                      Video
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h4 className="text-[#EBF0D5] text-base md:text-2xl font-bold leading-[150%] tracking-[2px] flex items-center justify-center gap-3">
            View all
            <span>
              <GoArrowRight size={16} className="text-[#EBF0D5]" />
            </span>
          </h4>
        </div>
      </section>

      <section className="bg-[#1D1B1E] flex px-4 sm:px-[6.4%] justify-center">
        <div className="relative flex flex-col items-center mw my-16 gap-[40px]">
          <h4
            className={`${anton.className} text-2xl xs:text-[27px] sm:text-3xl md:text-4xl lg:text-[52px] text-gradient-copy-top-traders leading-[150%] tracking-[2px]`}
          >
            Latest
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px]">
            {Array.from({ length: 3 }).map((_, i) => (
              <div className="space-y-5" key={i}>
                <Image
                  alt="image"
                  src={`/trader-${
                    i == 0 ? 4 : i == 1 ? 5 : i == 2 ? 6 : 4
                  }.jpg`}
                  width={401}
                  height={319}
                  className={`w-full object-cover object-center bg-no-repeat rounded-[14px] ${
                    i == 0 ? "h-[372px]" : "h-[319px]"
                  }`}
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
                  <p className="text-sm font-normal leading-[25px] tracking-[1px] text-white/70 w-4/5">
                    Spot real performance vs hype. Avoid common beginner traps
                  </p>

                  <div className="pt-2 flex gap-2 items-center text-white/50">
                    <span className="min-w-[89px] px-1 py-2 gap-2.5 flex items-center justify-center border border-[#FDF9FF99] rounded-[21px] text-xs leading-4 tracking-[1px]">
                      Beginner
                    </span>
                    <span className="min-w-[89px] px-1 py-2 gap-2.5 flex items-center justify-center border border-[#FDF9FF99] rounded-[21px] text-xs leading-4 tracking-[1px]">
                      Video
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex px-4 sm:px-[6.4%] justify-center relative overflow-x-hidden bg-cover bg-no-repeat bg-center bg-[url('../public/section-6-bg.png')]">
        <div className="flex flex-col items-center md:min-h-[610px] justify-center my-8 md:my-16 w-full mw">
          {/* <div className="absolute -right-[70px] top-0 bg-no-repeat size-[242px] bg-[url('../public/bitcoin-traced.png')]" /> */}
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
              <button
                // onClick={() => {}}
                type="button"
                title="contact support"
                className="flex flex-row justify-center items-center w-full xs:w-[283px] h-[68px] md:h-[48px] rounded-[20px] px-4 py-3 gap-2.5 bg-[#F4E90E] hover:bg-[#CEC510]"
              >
                <span className="font-bold text-sm md:text-base leading-[150%] tracking-[2px] text-[#2C2C26]">
                  Get started
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
