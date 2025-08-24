import Navbar from "@/components/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { anton } from "../fonts";

export const metadata: Metadata = {
  title: "Protraders",
};

export default function page() {
  return (
    <main>
      <section className="flex flex-col hero-section-bg px-4 sm:px-[6.4%] items-center relative overflow-x-hidden">
        <div className="mw md:min-h-screen xl:min-h-auto">
          <Navbar />

          <div className="relative flex flex-col lg:flex-row min-h-[70vh] xxl:min-h-[50vh] items-center justify-between my-16 xl:my-32 gap-16 lg:gap-[5%]">
            <div className="w-full lg:w-[50%] flex flex-col gap-4">
              <h3
                className={`justify-center items-center font-normal leading-[150%] tracking-[2%] text-2xl xs:text-[27px] sm:text-3xl md:text-5xl lg:text-[52px] lg:max-w-[940px] text-gradient-copy-top-traders ${anton.className}`}
              >
                Start to Earn While<br/>
                You Trade
              </h3>

              <p className="font-normal leading-8 text-sm sm:text-base lg:text-[21px] tracking-[1px] text-white/70">
                Turn your trading expertise into income. Build a loyal
                following, share your strategies, and earn from every copier on
                Streple.
              </p>

              <a
                href="https://forms.gle/FZmzQX3SbVjiHPo18"
                target="_blank"
                rel="noopener noreferrer"
                type="button"
                className="cursor-pointer max-w-[245px] w-full mt-6 flex justify-center items-center rounded-3xl px-4 py-3 gap-3 bg-[#B39FF0] font-bold tracking-[2px] leading-[150%] text-base text-[#2C2D28]"
              >
                Apply now
                <GoArrowRight size={16} className="text-[#2C2D28]" />
              </a>
            </div>
            <div className="w-full lg:w-[50%] flex justify-center lg:justify-end">
              <Image
                src={"/images/bitcoin-big.webp"}
                alt="bitcoin img"
                width={507}
                height={547}
                className="size-full max-w-[507px] max-h-[547px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="xl:hidden absolute bottom-0 h-[278px] w-full right-0 bg-no-repeat bg-[url('../public/images/bottom-purple-bg.webp')]" />
      </section>

      <section className="flex px-4 sm:px-[6.4%] justify-center">
        <div className="relative mw py-[92px] flex gap-8 flex-col items-center w-full">
          <h3
            className={`${anton.className} text-2xl xs:text-[27px] sm:text-3xl md:text-4xl lg:text-[52px] text-gradient-copy-top-traders leading-[150%] tracking-[2px] max-w-[968px] text-center`}
          >
            Join 1,000s of ProTraders to monetize your trading skills
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 w-full">
            <div className="md:col-span-2 w-full flex flex-col md:flex-row gap-6 py-8 px-5 border rounded-[10px] bw-tr-border-gradient protraders-section-bg">
              <div className="w-full md:w-1/2 flex flex-col gap-6">
                <h5
                  className={`text-[21px] md:text-[27px] leading-[150%] tracking-[2px] font-normal ${anton.className}`}
                >
                  Share your strategy
                </h5>
                <p className="text-base md:text-[21px] leading-6 md:leading-10 tracking-[1px] text-white/70">
                  Publish your trades, explain your moves, and let your skills
                  speak for themselves. Whether it&apos;s spot, futures, or bot
                  strategies — your edge becomes your value.
                </p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <Image
                  src={"/images/chart.webp"}
                  alt="chart diagram"
                  width={621}
                  height={312}
                  className="size-full max-w-[621px] max-h-[312px]"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="w-full flex flex-col gap-[92px] py-8 px-5 border rounded-[10px] bw-tb-border-gradient protraders-section-bg">
              <div className="w-full flex flex-col gap-6">
                <h5
                  className={`text-[21px] md:text-[27px] leading-[150%] tracking-[2px] font-normal ${anton.className}`}
                >
                  Earn commissions & profits
                </h5>
                <p className="text-base md:text-[21px] leading-6 md:leading-10 tracking-[1px] text-white/70">
                  Get rewarded every time someone copies your trades. Your
                  insights generate income — and Streple handles the rest
                  automatically.
                </p>
              </div>
              <div className="w-full flex">
                <Image
                  src={"/images/arrows.webp"}
                  alt="arrow diagram"
                  width={353}
                  height={363}
                  className="size-full max-w-[353px] max-h-[363px]"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="w-full flex flex-col gap-[92px] py-8 px-5 border rounded-[10px] bw-tb-border-gradient protraders-section-bg">
              <div className="w-full flex flex-col gap-6">
                <h5
                  className={`text-[21px] md:text-[27px] leading-[150%] tracking-[2px] font-normal ${anton.className}`}
                >
                  Grow a following
                </h5>
                <p className="text-base md:text-[21px] leading-6 md:leading-10 tracking-[1px] text-white/70">
                  Attract a loyal base of copiers who trust your style and
                  performance. As your track record grows, so does your
                  influence right inside the Streple ecosystem.
                </p>
              </div>
              <div className="w-full flex items-center justify-center">
                <Image
                  src={"/images/followings.webp"}
                  alt="followings diagram"
                  width={473}
                  height={139}
                  className="size-full max-w-[473px] object-contain max-h-[139px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex px-4 sm:px-[6.4%] justify-center">
        <div className="relative mw">
          <div className="absolute -left-[120px] top-0 bg-no-repeat size-[369px] bg-[url('../public/images/bitcoin-blurred.webp')]" />

          <div className="relative py-[92px] flex gap-8 flex-col items-center w-full">
            <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-4 md:gap-8">
              <h4
                className={`${anton.className} text-2xl xs:text-[27px] sm:text-3xl md:text-4xl lg:text-[52px] text-gradient-copy-top-traders leading-[150%] tracking-[2px]`}
              >
                Meet Our Top <br className="hidden md:block" /> Traders
              </h4>

              <p className="max-w-[688px] text-base md:text-[21px] leading-8 tracking-[1px] text-white/70">
                Find traders that match your goals — from low-risk steady
                growers to bold high-return strategists. Every move they make is
                transparent, and you decide who earns your trust.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {Array.from({ length: 6 }).map((_, i) => (
                <Image
                  key={i}
                  alt={`top trader ${i + 1} `}
                  src={`/images/top-trader-${i + 1}.webp`}
                  width={403}
                  height={481}
                  className={`w-full object-cover object-center rounded-[15px] h-[481px]`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="flex px-4 sm:px-[6.4%] justify-center relative overflow-x-hidden">
        <div className="flex flex-col items-center md:min-h-[610px] justify-center my-8 md:my-16 w-full mw">
          <div className="absolute -right-[70px] top-0 bg-no-repeat size-[242px] bg-[url('../public/images/bitcoin-traced.webp')]" />
          <div className="flex flex-col justify-center mx-auto gap-10 start-trading-bg py-[52px] px-3 md:px-8 lg:py-[92px] lg:px-[80px]">
            <h3
              className={`flex flex-row mx-auto justify-center text-center leading-[150%] tracking-[2px] font-normal text-[27px] sm:text-3xl md:text-5xl lg:text-[52px]  max-w-[700px] ${anton.className}`}
            >
              Start earning from your trades Today
            </h3>

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
                  Apply now
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
