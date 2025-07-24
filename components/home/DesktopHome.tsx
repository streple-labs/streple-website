import { anton } from "@/app/fonts";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

export default function DesktopHome() {
  return (
    <main className="hidden lg:flex flex-col">
      <section className="flex justify-center px-4 sm:px-[6.4%] hero-section-bg">
        <div className="mw max-xxl:min-h-screen relative overflow-hidden">
          <Navbar />
          {/* HERO Section */}
          <div className="flex flex-col min-h-[678px] mt-16 xl:mt-32 gap-[17px] items-center text-center">
            <h2
              className={`leading-[150%] tracking-[2px] justify-center items-center font-normal text-2xl xs:text-[27px] sm:text-4xl md:text-5xl lg:text-[52px] max-w-[940px] text-gradient-copy-top-traders ${anton.className}`}
            >
              Learn. Trade. Tokenize
            </h2>

            <p className="font-normal leading-8 text-[21px] text-sm sm:text-base text-[#FFFFFFB2] max-w-[694px]">
              Your Journey Into Digital Ownership Starts Here
            </p>

            <div className="flex flex-row items-center gap-11">
              <a
                href="https://forms.gle/FZmzQX3SbVjiHPo18"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-[245px] rounded-3xl px-4 py-3 gap-3 bg-[#B39FF0] font-bold tracking-[1px] leading-6 text-sm md:text-base text-[#2C2D28]"
              >
                Get early access
                <GoArrowRight size={20} />
              </a>
            </div>

            <div className="container w-max h-max hidden lg:flex">
              <Image
                loading="lazy"
                src="/portfolio.webp"
                alt="portfolio"
                width={464}
                height={528}
              />
            </div>
            <div className="flex lg:hidden w-max h-max mx-auto">
              <Image
                loading="lazy"
                src="/portfolio.webp"
                alt="portfolio"
                width={372}
                height={372}
                className="w-[240px] min-[320px]:w-[280px] min-[425px]:w-[372px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 - With Streple, Trading becomes easier */}
      <section className="section-1-bg flex px-4 sm:px-[6.4%] justify-center">
        <div className="mw flex flex-col gap-10 my-[96px]">
          <div
            className={`items-center text-center text-44-lg text-55-xl xxl:text-[62px] 2xl:text-[66px]  font-normal ${anton.className}`}
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
            With just 3 steps, you can start trading like a pro, earn
            automatically.
          </p>

          <div className="flex gap-8 justify-between">
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
                    className={`text-2xl xl:text-[28px]  leading-[35px] tracking-[2px] ${anton.className}`}
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
      <section className="flex px-4 sm:px-[6.4%] justify-center">
        <div className="flex justify-between gap-[82px] mw my-[96px]">
          <div className="flex flex-col gap-6 w-435-lg w-544-xl xxl:w-[612px]">
            <div className="why-people-choose-us bw-lr-gradient w-max">
              <span className="font-normal text-xs leading-4 ">
                Why people choose us
              </span>
            </div>

            <h3
              className={`text-gradient-earn-profits tracking-[2px] leading-[150%] font-normal text-36-lg text-46-xl xxl:text-[52px] 2xl:text-[56px] ${anton.className}`}
            >
              Learn From the Best
            </h3>

            <div className="flex flex-col gap-[60px]">
              <p className="font-normal text-sm tracking-[1px] leading-8 xl:text-[21px] ">
                Copy verified expert traders with proven track records. Analyze
                their approaches and replicate their success.{" "}
              </p>

              <a
                href="https://forms.gle/FZmzQX3SbVjiHPo18"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-3 leading-[150%] tracking-[2px] font-bold text-[20px] text-[#DFD735]"
              >
                Get started
                <GoArrowRight size={16} />
              </a>
            </div>
          </div>

          <Image
            loading="lazy"
            src="/debit-card.webp"
            alt="debit card"
            width={564}
            height={650}
            className="w-401-h-518-lg w-501-h-647-xl xxl:w-[564px] xxl:h-[650px]"
          />
        </div>
      </section>

      {/* Section 3 - Start with Zero Trading Knowledge */}
      <section className="flex px-4 sm:px-[6.4%] justify-center">
        <div className="flex justify-between gap-[82px] mw my-[96px]">
          <div className="flex flex-col gap-6 w-435-lg w-544-xl xxl:w-[612px]">
            <div className="why-people-choose-us bw-lr-gradient w-max">
              <span className="font-normal text-xs leading-4 ">
                Why people choose us
              </span>
            </div>

            <h3
              className={`text-gradient-earn-profits tracking-[2px] leading-[150%] font-normal text-36-lg text-46-xl xxl:text-[52px] 2xl:text-[56px] ${anton.className}`}
            >
              Learn the Why Behind Every Trade
            </h3>

            <div className="flex flex-col gap-[60px]">
              <p className="font-normal text-sm tracking-[1px] leading-8 xl:text-[21px] ">
                Get clear, step-by-step breakdowns of every trading decision. We
                explain the reasoning, market conditions, and key factors behind
                each move so you can learn, understand, and make informed
                decisions with confidence.
              </p>

              <a
                href="https://forms.gle/FZmzQX3SbVjiHPo18"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-3 leading-[150%] tracking-[2px] font-bold text-[20px] text-[#DFD735]"
              >
                Get started
                <GoArrowRight size={16} />
              </a>
            </div>
          </div>

          <Image
            loading="lazy"
            src="/learn-the-why.webp"
            alt="learn the why"
            width={564}
            height={650}
            className="w-401-h-518-lg w-501-h-647-xl xxl:w-[564px] xxl:h-[650px]"
          />
        </div>
      </section>

      {/* Section 4 - Testimonials */}
      <section className="flex px-4 sm:px-[6.4%] justify-center">
        <div className="mw my-[96px] flex flex-col gap-[36px] items-center">
          <div className="why-people-choose-us bw-lr-gradient w-max">
            <span className="font-normal text-xs leading-4">Testimonials</span>
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
                  src="/amaka-ugwu.webp"
                  alt="Amaka Ugwu's Photo"
                  width={60}
                  height={60}
                  className="w-[60px] h-[60px] rounded-full"
                />
                <span
                  className={`font-normal text-base leading-[150%] tracking-[2px]  ${anton.className}`}
                >
                  Amaka Ugwu
                </span>
              </div>

              <p className="font-normal leading-8 tracking-[1px] text-sm xl:text-[21px] ">
                “I never thought I could trade. I just picked a top trader, set
                my budget, and boom. I made a small profit in my first week.
                Streple made me feel like I actually belong in the market.”
              </p>
            </div>

            <div className="testimonial-card">
              <div className="flex flex-row gap-3 items-center">
                <Image
                  loading="lazy"
                  src="/david-ossai.webp"
                  alt="David Ossai's Photo"
                  width={60}
                  height={60}
                  className="w-[60px] h-[60px] rounded-full"
                />
                <span
                  className={`font-normal text-base leading-[150%] tracking-[2px]  ${anton.className}`}
                >
                  David Ossai
                </span>
              </div>

              <p className="font-normal leading-8 tracking-[1px] text-sm xl:text-[21px] ">
                “I work full time, so I don&apos;t have time to sit with charts
                all day. Streple lets me copy traders with proven stats. I just
                check my phone, adjust my limits, and go about my day.”
              </p>
            </div>

            <div className="testimonial-card">
              <div className="flex flex-row gap-3 items-center">
                <Image
                  loading="lazy"
                  src="/femi-adetola.webp"
                  alt="Femi Adetola's Photo"
                  width={60}
                  height={60}
                  className="w-[60px] h-[60px] rounded-full"
                />
                <span
                  className={`font-normal text-base leading-[150%] tracking-[2px]  ${anton.className}`}
                >
                  Femi Adetola
                </span>
              </div>

              <p className="font-normal leading-8 tracking-[1px] text-sm xl:text-[21px] ">
                “I wanted to grow my savings but had zero knowledge of crypto.
                Streple made it easy to get started without stress. I feel like
                my money is working for me now.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - join protrader program */}
      <section className="flex px-4 sm:px-[6.4%] justify-center">
        <div className="flex justify-between gap-[82px] mw my-[96px]">
          <Image
            loading="lazy"
            src="/earn-while-you-teach.webp"
            alt="earn while you teach"
            width={564}
            height={650}
            className="w-401-h-518-lg w-501-h-647-xl xxl:w-[564px] xxl:h-[650px] rounded-[23px]"
          />

          <div className="flex flex-col gap-6 w-435-lg w-544-xl xxl:w-[612px]">
            <div className="why-people-choose-us bw-lr-gradient w-max">
              <span className="font-normal text-xs leading-4 ">
                Streple for ProTraders
              </span>
            </div>

            <h3
              className={`text-gradient-earn-profits tracking-[2px] leading-[150%] font-normal text-36-lg text-46-xl xxl:text-[52px] 2xl:text-[56px] ${anton.className}`}
            >
              Earn While You Teach
            </h3>

            <div className="flex flex-col gap-[60px]">
              <p className="font-normal text-sm tracking-[1px] leading-8 xl:text-[21px] ">
                Join our Pro Trader Program, share your expertise, grow your
                community, and monetize your trading skills.
              </p>

              <a
                href="https://forms.gle/FZmzQX3SbVjiHPo18"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-3 leading-[150%] tracking-[2px] font-bold text-[20px] text-[#DFD735]"
              >
                Explore ProTraders
                <GoArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Start trading smarter today with Streple */}
      <section className="flex flex-col items-center section-6-bg justify-center relative overflow-x-hidden">
        <div className="flex flex-col mx-auto gap-10 start-trading-bg lg:py-16">
          <h4
            className={`flex flex-row mx-auto justify-center text-center leading-[150%] tracking-[2px] font-normal text-44-lg text-55-xl xxl:text-[62px]  max-w-[800px] ${anton.className}`}
          >
            Join Streple and build your trading skills the smart way
          </h4>

          <div className="flex flex-row items-center gap-6 mx-auto">
            <a
              href="https://forms.gle/FZmzQX3SbVjiHPo18"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center rounded-[20px] px-[16px] py-[12px] gap-2.5 bg-[#F4E90E] hover:bg-[#CEC510]"
            >
              <span className="font-bold leading-[150%] tracking-[2px] text-sm md:text-base text-[#2C2C26]">
                Secure your spot
              </span>
              <GoArrowRight className="text-[#2C2D28] size-4 md:size-6" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
