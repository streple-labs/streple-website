import { anton } from "@/app/fonts";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import JoinProtraderProgramSection from "./JoinProtraderProgramSection";

export default function DesktopHome() {
  return (
    <div className="hidden lg:flex flex-col">
      <main className="flex flex-col">
        <section className="flex flex-col hero-section-bg">
          <Navbar />
          {/* HERO Section */}
          <div className="flex flex-col mx-auto w-916-h-603-xl w-732-h-482-xl xxl:w-[1030px] xxl:h-[678px] mt-16 gap-[17px] items-center text-center px-2">
            <span
              className={`justify-center items-center font-normal text-36-lg text-46-xl xxl:text-[52px] 2xl:text-[56px] max-w-[940px] text-gradient-copy-top-traders ${anton.className}`}
            >
              Learn. Trade. Tokenize
            </span>

            <p className="font-normal leading-8 text-sm xl:text-[21px] text-[#FFFFFFB2] max-w-[694px]">
              Streple lets you follow expert traders live, learn as you go, and
              grow your confidence, all in one place. No experience needed.
            </p>

            <div className="flex flex-row items-center gap-11">
              <Link
                href="#"
                className="flex flex-row items-center rounded-3xl px-4 py-3 gap-3 bg-[#B39FF0] font-bold tracking-[1px] leading-6 text-base text-[#2C2D28]"
              >
                Start coying trades
                <GoArrowRight size={20} />
              </Link>

              <Link
                href="#"
                className="flex flex-row items-center gap-3 font-bold leading-[150%] text-base text-[#EBF0D5]"
              >
                Apply to be a Pro Trader
                <GoArrowRight size={20} />
              </Link>
            </div>

            <div className="flex container w-max h-max">
              <Image
                loading="lazy"
                src="/portfolio.png"
                alt="portfolio"
                width={464}
                height={528}
              />
            </div>
          </div>
        </section>

        {/* Section 1 - With Streple, Trading becomes easier */}
        <section className="flex flex-col justify-center items-center section-1-bg px-2">
          <div className="flex flex-col w-898-lg w-1122-xl xxl:w-[1262px] 2xl:w-[1346px] gap-10 my-[96px]">
            <div
              className={`items-center text-center text-44-lg text-55-xl xxl:text-[62px] 2xl:text-[66px] text-white font-normal ${anton.className}`}
            >
              <span className="text-[#B39FF0]">With Streple</span>
              <span>
                <span className="text-gradient-with-streple">
                  , Trading becomes
                </span>
                <br />
                <span>easier</span>
              </span>
            </div>

            <p className="font-normal text-[20px] text-[#FFFFFFB2] max-w-3xl leading-[40px] text-center mx-auto">
              With just 3 steps, you can start trading like a pro. No
              experience, no stress. Find a top trader, set your limits, and
              start earning automatically.
            </p>

            <div className="flex gap-8 mx-auto w-898-lg w-1122-xl xxl:w-[1262px] 2xl:w-[1346px] justify-between">
              {[
                {
                  img: "/follow-trade.svg",
                  title: "Follow top traders",
                  desc: "Browse verified expert traders, check their stats, risk levels, and trading style before following.",
                },
                {
                  img: "/copy-trades.svg",
                  title: "Copy Trades in Real Time",
                  desc: "Once you follow a trader, Streple mirrors their trades to your simulated account.",
                },
                {
                  img: "/learn-more.svg",
                  title: "Learn As you Grow",
                  desc: "Each trade comes with tips, insights, and clear breakdowns so you understand the reason behind every move.",
                },
              ].map(({ img, desc, title }, i) => (
                <div
                  key={i}
                  className="shadow-sm backdrop-blur-[4px] bw-tb-gradient w-full max-w-[391px] flex items-center flex-col gap-10 rounded-3xl px-8 py-11"
                >
                  <Image
                    loading="lazy"
                    src={img}
                    alt="image"
                    width={120}
                    height={120}
                    className="w-[90px] h-[90px] xl:w-[120px] xl:h-[120px] object-center object-fill"
                  />

                  <div className="space-y-4">
                    <h4
                      className={`text-2xl xl:text-[28px] text-white leading-[35px] tracking-[2px] ${anton.className}`}
                    >
                      {title}
                    </h4>
                    <p className="text-white/80 text-sm xl:text-base leading-[35px] tracking-[1px]">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2 - Earn profits without lifting a finger */}
        <section className="flex flex-col my-[96px] px-2">
          <div className="flex flex-row gap-[82px] mx-auto">
            <div className="flex flex-col gap-6 w-435-lg w-544-xl xxl:w-[612px]">
              <div className="why-people-choose-us bw-lr-gradient w-max">
                <span className="font-normal text-xs leading-4 text-white">
                  Why people choose us
                </span>
              </div>

              <h3
                className={`text-gradient-earn-profits tracking-[2px] leading-[150%] font-normal text-36-lg text-46-xl xxl:text-[52px] 2xl:text-[56px] ${anton.className}`}
              >
                Earn profits without lifting a finger
              </h3>

              <div className="flex flex-col gap-[60px]">
                <p className="font-normal text-sm tracking-[1px] leading-8 xl:text-[21px] text-white">
                  Stop stressing over charts and market news. With Streple, you
                  copy the exact trades of top-performing experts automatically.
                  You trade smarter, even when you&apos;re offline.
                </p>

                <Link
                  href="#"
                  className="flex flex-row items-center gap-3 leading-[150%] tracking-[2px] font-bold text-[20px] text-[#DFD735]"
                >
                  Get started
                  <GoArrowRight size={16} />
                </Link>
              </div>
            </div>

            <Image
              loading="lazy"
              src="/debit-card.png"
              alt="debit card"
              width={564}
              height={650}
              className="w-401-h-518-lg w-501-h-647-xl xxl:w-[564px] xxl:h-[650px]"
            />
          </div>
        </section>

        {/* Section 3 - Start with Zero Trading Knowledge */}
        <section className="flex flex-col my-[96px] px-2">
          <div className="flex flex-row gap-[82px] mx-auto">
            <div className="flex flex-col gap-6 w-435-lg w-544-xl xxl:w-[612px]">
              <div className="why-people-choose-us bw-lr-gradient w-max">
                <span className="font-normal text-xs leading-4 text-white">
                  Why people choose us
                </span>
              </div>

              <h3
                className={`text-gradient-earn-profits tracking-[2px] leading-[150%] font-normal text-36-lg text-46-xl xxl:text-[52px] 2xl:text-[56px] ${anton.className}`}
              >
                Learn the Why Behind Every Trade
              </h3>

              <div className="flex flex-col gap-[60px]">
                <p className="font-normal text-sm tracking-[1px] leading-8 xl:text-[21px] text-white">
                  Go beyond just copying — discover what each trade means, why
                  it happened, and how to build confidence with every move you
                  make.
                </p>

                <Link
                  href="#"
                  className="flex flex-row items-center gap-3 leading-[150%] tracking-[2px] font-bold text-[20px] text-[#DFD735]"
                >
                  Get started
                  <GoArrowRight size={16} />
                </Link>
              </div>
            </div>

            <Image
              loading="lazy"
              src="/learn-the-why.png"
              alt="learn the why"
              width={564}
              height={650}
              className="w-401-h-518-lg w-501-h-647-xl xxl:w-[564px] xxl:h-[650px]"
            />
          </div>
        </section>

        {/* Section 4 - Testimonials */}
        <section className="flex flex-col my-[96px] px-2 items-center">
          <div className="flex flex-col w-892-lg w-1114-xl xxl:w-[1254px] gap-[36px] items-center mx-auto">
            <div className="why-people-choose-us bw-lr-gradient w-max">
              <span className="font-normal text-xs leading-4 text-white">
                Testimonials
              </span>
            </div>

            <span
              className={`text-gradient-earn-profits tracking-[2px] leading-[150%] font-normal text-36-lg text-46-xl xxl:text-[52px] 2xl:text-[56px] ${anton.className}`}
            >
              Real results from real people
            </span>

            <div className="flex flex-row w-full justify-between">
              <div className="testimonial-card">
                <div className="flex flex-row gap-3 items-center">
                  <Image
                    loading="lazy"
                    src="/amaka-ugwu.jpg"
                    alt="Amaka Ugwu's Photo"
                    width={60}
                    height={60}
                    className="w-[60px] h-[60px] rounded-full"
                  />
                  <span
                    className={`font-normal text-base leading-[150%] tracking-[2px] text-white ${anton.className}`}
                  >
                    Amaka Ugwu
                  </span>
                </div>

                <p className="font-normal leading-8 tracking-[1px] text-sm xl:text-[21px] text-white">
                  “I never thought I could trade. I just picked a top trader,
                  set my budget, and boom. I made a small profit in my first
                  week. Streple made me feel like I actually belong in the
                  market.”
                </p>
              </div>

              <div className="testimonial-card">
                <div className="flex flex-row gap-3 items-center">
                  <Image
                    loading="lazy"
                    src="/david-ossai.jpg"
                    alt="David Ossai's Photo"
                    width={60}
                    height={60}
                    className="w-[60px] h-[60px] rounded-full"
                  />
                  <span
                    className={`font-normal text-base leading-[150%] tracking-[2px] text-white ${anton.className}`}
                  >
                    David Ossai
                  </span>
                </div>

                <p className="font-normal leading-8 tracking-[1px] text-sm xl:text-[21px] text-white">
                  “I work full time, so I don&apos;t have time to sit with
                  charts all day. Streple lets me copy traders with proven
                  stats. I just check my phone, adjust my limits, and go about
                  my day.”
                </p>
              </div>

              <div className="testimonial-card">
                <div className="flex flex-row gap-3 items-center">
                  <Image
                    loading="lazy"
                    src="/femi-adetola.jpg"
                    alt="Femi Adetola's Photo"
                    width={60}
                    height={60}
                    className="w-[60px] h-[60px] rounded-full"
                  />
                  <span
                    className={`font-normal text-base leading-[150%] tracking-[2px] text-white ${anton.className}`}
                  >
                    Femi Adetola
                  </span>
                </div>

                <p className="font-normal leading-8 tracking-[1px] text-sm xl:text-[21px] text-white">
                  “I wanted to grow my savings but had zero knowledge of crypto.
                  Streple made it easy to get started without stress. I feel
                  like my money is working for me now.”
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 - join protrader program */}
        <section className="flex flex-col my-[96px] px-2">
          <JoinProtraderProgramSection />
        </section>

        {/* Start trading smarter today with Streple */}
        <section className="flex flex-col items-center section-6-bg justify-center relative overflow-x-hidden">
          {/* <div className="absolute -right-[70px] top-0 bg-no-repeat size-[242px] bg-[url('../public/bitcoin-traced.png')]" /> */}
          <div className="flex flex-col mx-auto gap-10 start-trading-bg">
            <span
              className={`flex flex-row mx-auto justify-center text-center leading-[150%] tracking-[2px] font-normal text-44-lg text-55-xl xxl:text-[62px] text-white max-w-[700px] ${anton.className}`}
            >
              Start trading smarter today with Streple
            </span>

            <div className="flex flex-row items-center gap-6 mx-auto">
              <Link
                href="#"
                className="flex flex-row items-center rounded-[20px] px-[16px] py-[12px] gap-2.5 bg-[#F4E90E] hover:bg-[#CEC510]"
              >
                <span className="font-bold text-base leading-[150%] tracking-[2px] text-[#2C2C26]">
                  Start copying trades
                </span>
                <GoArrowRight size={20} className="text-[#2C2D28]" />
              </Link>
              <Link href="#" className="flex flex-row items-center gap-3">
                <span className="font-bold text-xl leading-[150%] tracking-[2px] text-[#EBF0D5]">
                  Streple for Pro traders
                </span>
                <GoArrowRight size={20} className="text-[#EBF0D5]" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
