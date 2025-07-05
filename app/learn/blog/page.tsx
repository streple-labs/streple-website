import { anton } from "@/app/fonts";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Link from "next/link";

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

            <div className="flex flex-col md:flex-row gap-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-20 gap-x-5 w-full md:w-1/2 lg:w-[70%]">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Link
                    href={
                      "/learn/blog/how-to-choose-the-right-trader-without-getting-burned"
                    }
                    className="space-y-5"
                    key={i}
                  >
                    <Image
                      alt="image"
                      src={`/trader-${
                        i == 0 ? 2 : i == 1 ? 3 : i == 2 ? 2 : i == 3 ? 1 : 1
                      }.jpg`}
                      width={401}
                      height={327}
                      className={`w-full ${
                        i == 3 ? "h-[372px]" : "h-[327px]"
                      } object-cover object-center bg-no-repeat rounded-[14px]`}
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
              <div className="flex flex-col gap-10 w-full md:w-1/2 lg:w-[30%]">
                <div className="space-y-6">
                  <h4
                    className={`text-[21px] md:text-[27px] font-normal leading-[150%] tracking-[2px] ${anton.className}`}
                  >
                    Top Guides
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
                <div className="space-y-6">
                  <h4
                    className={`text-[21px] md:text-[27px] font-normal leading-[150%] tracking-[2px] ${anton.className}`}
                  >
                    Latest
                  </h4>
                  <p className="leading-[25px] font-semibold text-sm tracking-[1px]">
                    <Link
                      href={
                        "/learn/blog/how-to-choose-the-right-trader-without-getting-burned"
                      }
                    >
                      Copy Trading 101: What It Is and How It Works (With
                      Examples)
                    </Link>
                    <br />
                    <br />
                    <Link
                      href={
                        "/learn/blog/how-to-choose-the-right-trader-without-getting-burned"
                      }
                    >
                      How to Choose the Right Trader to Copy Without Getting
                      Burned
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
