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
              <div className="flex md:items-center justify-between flex-col md:flex-row gap-4">
                <p className="flex gap-1.5 items-center font-semibold text-sm leading-[150%] tracking-[2px]">
                  <span>7 min</span>
                  <span>|</span>
                  <span>35K WATCH</span>
                </p>
                <div className="flex gap-2">
                  <span className="rounded-[21px] border-[#FDF9FF99] border py-2 px-1 min-w-[90px] flex items-center justify-center text-xs leading-4 tracking-[1px] text-white/50">
                    Beginner
                  </span>

                  <span className="rounded-[21px] border-[#FDF9FF99] border py-2 px-1 min-w-[90px] flex items-center justify-center text-xs leading-4 tracking-[1px] text-white/50">
                    Learn
                  </span>
                </div>
              </div>
            </div>
            <div className="article-ci aspect-video w-full bg-no-repeat max-h-[521px] rounded-[10px]" />

            <div className="w-full space-y-10">
              <p className="text-base md:text-xl leading-[150%] tracking-[2px] font-normal text-white/80">
                Copy trading can be exciting — especially when you&apos;re just
                starting out. The idea of earning while you learn sounds like a
                dream. But here&apos;s the truth: copying the wrong trader can
                cost you more than you expected. This quick guide will help you
                avoid that mistake and choose the right trader confidently.
              </p>

              <div className="space-y-5">
                <h4 className="text-[21px] sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-[1px]">
                  1. Start With Verified Traders Only
                </h4>
                <p className="text-base md:text-xl leading-[150%] tracking-[2px] font-normal text-white/80">
                  Always look for traders that are verified by the platform. A
                  verified trader means their performance has been reviewed, and
                  you can trust that their results aren&apos;t fake. On
                  platforms like Streple, verified traders usually have a badge
                  and public trading history — no screenshots, just real data.
                </p>
              </div>

              <div className="space-y-5">
                <h4 className="text-[21px] sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-[1px]">
                  2. Check Their ROI… But Don&apos;t Rely On It Alone
                </h4>
                <p className="text-base md:text-xl leading-[150%] tracking-[2px] font-normal text-white/80">
                  ROI (Return on Investment) tells you how much profit a trader
                  has made over time. A high ROI is good — but it doesn&apos;t
                  mean the trader is low-risk. Sometimes, traders with high ROI
                  take dangerous risks that might not work again. Instead of
                  focusing on ROI alone, combine it with risk level and drawdown
                  history.
                </p>
              </div>

              <div className="space-y-5">
                <h4 className="text-[21px] sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-[1px]">
                  3. Look at Risk Score and Drawdown
                </h4>
                <p className="text-base md:text-xl leading-[150%] tracking-[2px] font-normal text-white/80">
                  Every good copy trading platform should show a risk score —
                  this tells you how risky the trader&apos;s strategy is. If the
                  number is too high, it means they&apos;re probably taking big
                  risks for big rewards. <br />
                  Also check the drawdown, which is the biggest drop in their
                  account&apos;s value. If a trader lost 40% at one point,
                  that&apos;s a red flag.
                </p>
              </div>

              <div className="space-y-5">
                <h4 className="text-[21px] sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-[1px]">
                  4. How Long Have They Been Active?
                </h4>
                <p className="text-base md:text-xl leading-[150%] tracking-[2px] font-normal text-white/80">
                  Time is trust. A trader who&apos;s been consistently
                  profitable for 6 months or more is usually more reliable than
                  someone who just started a month ago with one lucky streak.
                  Consistency over time beats one-time wins.
                </p>
              </div>

              <div className="space-y-5">
                <h4 className="text-[21px] sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-[1px]">
                  5. Do They Match Your Goals?
                </h4>
                <p className="text-base md:text-xl leading-[150%] tracking-[2px] font-normal text-white/80">
                  Ask yourself: What am I trying to achieve? <br /> If you want
                  slow, steady profits → look for traders with low-risk,
                  long-term strategies <br /> If you want quick growth and
                  don&apos;t mind risks → choose traders with higher ROI but
                  also high transparency <br /> Matching with a trader whose
                  strategy fits your mindset will reduce anxiety — and increase
                  your satisfaction.
                </p>
              </div>

              <p className="text-base md:text-xl leading-[150%] tracking-[2px] font-normal text-white/80">
                It&apos;s easy to follow a trader because they &quot;look
                trustworthy&quot; or have a cool name. But in copy trading, data
                always tells the truth. Stick to real performance stats, risk
                levels, and long-term results — and you&apos;ll be way less
                likely to get burned.
              </p>
            </div>
          </div>

          <div className="space-y-6 md:sapce-y-8 w-full">
            <h5 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[1px]">
              Next reads
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
