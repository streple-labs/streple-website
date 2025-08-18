import { anton } from "@/app/fonts";
import Navbar from "@/components/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

export const metadata: Metadata = {
  title: "Blogs",
};

export default function page() {
  return (
    <main>
      <section className="flex flex-col px-4 sm:px-[6.4%] items-center">
        <div className="mw md:min-h-screen xl:min-h-auto relative overflow-hidden">
          <Navbar />

          <div className="relative flex flex-col my-16 sm:my-24 md:my-32 min-h-screen gap-14">
            <h1
              className={`justify-center items-center font-normal leading-[150%] tracking-[2%] text-2xl xs:text-[27px] sm:text-3xl md:text-5xl lg:text-[52px] lg:max-w-[940px] text-gradient-copy-top-traders ${anton.className}`}
            >
              Learning guides
            </h1>

            <div className="flex items-center gap-8 md:gap-[80px]">
              <p className="text-center min-w-10 md:min-w-20 pb-2 cursor-pointer border-b-[2.5px] border-b-[#F4E90E] text-base md:text-[21px] leading-6 md:leading-8 tracking-[1px] font-normal">
                All
              </p>
              <p className="text-center min-w-10 md:min-w-20 pb-2 cursor-pointer text-base md:text-[21px] leading-6 md:leading-8 tracking-[1px] font-normal">
                Articles
              </p>
              <p className="text-center min-w-10 md:min-w-20 pb-2 cursor-pointer text-base md:text-[21px] leading-6 md:leading-8 tracking-[1px] font-normal">
                Videos
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-[40px]">
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
                    <p className="text-sm font-normal leading-[25px] tracking-[1px] text-white/70 max-w-[312px]">
                      Spot real performance vs hype. Avoid common beginner traps
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row gap-10">
              <div className="w-full md:w-1/2 lg:w-[70%] space-y-6">
                <h4
                  className={`font-normal leading-[150%] tracking-[2%] text-[21px] sm:text-2xl md:text-3xl lg:text-4xl max-w-[615px] text-gradient-copy-top-traders ${anton.className}`}
                >
                  Copy Trading 101: What It Is and How It Works (With Examples)
                </h4>

                <button className="text-[#2C2C26] flex items-center justify-center gap-3 font-bold text-base leading-[150%] tracking-[2px] w-[172px] h-12 rounded-[20px] py-3 px-4 bg-[#B39FF0]">
                  View
                </button>
              </div>

              <div className="space-y-6 w-full md:w-1/2 lg:w-[30%]">
                <h4
                  className={`text-[21px] md:text-[27px] font-normal leading-[150%] tracking-[2px] ${anton.className}`}
                >
                  Top Guides
                </h4>
                <p className="leading-[25px] font-semibold text-sm tracking-[1px]">
                  <Link
                    href={
                      "/learn/blog/how-to-choose-the-right-trader-without-getting-burned-article"
                    }
                  >
                    Why Copy Trading Is Gaining Massive Popularity in 2025
                  </Link>
                  <br />
                  <br />
                  <Link
                    href={
                      "/learn/blog/how-to-choose-the-right-trader-without-getting-burned-article"
                    }
                  >
                    How to Spot a Reliable Trader Before You Copy
                  </Link>
                  <br />
                  <br />
                  <Link
                    href={
                      "/learn/blog/how-to-choose-the-right-trader-without-getting-burned-article"
                    }
                  >
                    Why Copy Trading Is Gaining Massive Popularity in 2025
                  </Link>
                  <br />
                  <br />
                  <Link
                    href={
                      "/learn/blog/how-to-choose-the-right-trader-without-getting-burned-article"
                    }
                  >
                    Crypto Market Volatility: What It Means for Copy Traders
                  </Link>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-[40px]">
              {Array.from({ length: 6 }).map((_, i) => (
                <div className="space-y-5" key={i}>
                  <Image
                    alt="image"
                    src={`/guide-${i < 3 ? `${i + 7}.jpg` : `${i + 1}.png`}`}
                    width={401}
                    height={237}
                    className={`w-full h-[237px] object-cover object-center bg-no-repeat rounded-[14px]`}
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
                    <p className="text-sm font-normal leading-[25px] tracking-[1px] text-white/70 max-w-[312px]">
                      Spot real performance vs hype. Avoid common beginner traps
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
    </main>
  );
}
