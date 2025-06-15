import { anton } from "@/app/fonts";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import JoinProtraderProgramSection from "./JoinProtraderProgramSection";

export default function MobileHome() {
  return (
    <div className="flex lg:hidden flex-col">
      <main className="flex flex-col">
        {/* HERO Section */}
        <section className="flex flex-col hero-section-bg-mobile">
          <Navbar />

          {/* HERO */}
          <div className="flex flex-col mx-auto px-4 mt-12">
            <div className="flex flex-col px-4 gap-4">
              <div className="flex flex-col gap-8">
                <span
                  className={`font-normal tracking-[2px] leading-[150%] text-2xl xs:text-[27px] text-gradient-copy-top-traders text-center ${anton.className}`}
                >
                  Learn. Trade. Tokenize
                </span>
                <p className="font-normal text-sm sm:text-base text-[#FFFFFFB2] text-center">
                  Streple lets you mirror top traders in real-time, no
                  experience needed.
                </p>
              </div>

              <div className="flex flex-col gap-4 items-center">
                <Link
                  href="#"
                  className="tracking-[1px] leading-6 flex flex-row w-max items-center rounded-3xl px-4 py-2.5 gap-3 bg-[#B39FF0] font-bold text-sm text-[#2C2D28]"
                >
                  Start coying trades
                  <GoArrowRight size={20} />
                </Link>

                <Link
                  href="#"
                  className="tracking-[2px] leading-[150%] flex flex-row w-max items-center gap-3 font-bold text-sm md:text-lg text-[#EBF0D5]"
                >
                  Streple for Pro traders
                  <GoArrowRight size={20} />
                </Link>
              </div>
            </div>

            <div className="flex w-max h-max mx-auto">
              <Image
                loading="lazy"
                src="/portfolio.png"
                alt="portfolio"
                width={372}
                height={372}
                className="w-[240px] min-[320px]:w-[280px] min-[425px]:w-[372px]"
              />
            </div>
          </div>
        </section>

        {/* Section 1 - With Streple, Trading becomes easier */}
        <section className="flex flex-col section-1-bg-mobile mx-auto px-4 pb-8">
          <div className="flex flex-col mt-18 gap-4">
            <div
              className={`items-center text-center  tracking-[2px] leading-[150%] text-2xl text-white font-normal ${anton.className}`}
            >
              <span className="text-[#B39FF0]">With Streple</span>
              <span className="text-gradient-with-streple">
                , Trading becomes easier
              </span>
            </div>

            <p className="font-normal text-sm sm:text-base md:text-xl leading-[30px] text-[#FFFFFFB2] max-w-lg text-center mx-auto">
              With just 3 steps, you can start trading like a pro. No
              experience, no stress. Find a top trader, set your limits, and
              start earning automatically.
            </p>
          </div>

          <div className="mt-[52px] flex flex-col md:flex-row gap-6 md:gap-4 mx-auto w-898-lg w-1122-xl xxl:w-[1262px] 2xl:w-[1346px] justify-between">
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
                className="shadow-sm backdrop-blur-[4px] bw-tb-gradient w-full max-w-[391px] flex md:items-center flex-col gap-10 rounded-3xl p-6"
              >
                <Image
                  loading="lazy"
                  src={img}
                  alt="image"
                  width={80}
                  height={80}
                  className="w-[80px] h-[80px] md:w-[90px] md:h-[90px] object-center object-fill"
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
        </section>

        {/* Section 2 - Earn profits without lifting a finger */}
        <section className="flex flex-col md:flex-row md:gap-10 section-3-bg-mobile mx-auto px-4 py-8">
          <div className="flex flex-col gap-6 w-435-lg w-544-xl xxl:w-[612px]">
            <div className="why-people-choose-us bw-lr-gradient w-max">
              <span className="font-normal text-[9px] leading-4 text-white">
                Why people choose us
              </span>
            </div>

            <h3
              className={`text-gradient-earn-profits tracking-[2px] leading-[150%] font-normal text-2xl xs:text-[27px] md:text-3xl ${anton.className}`}
            >
              Earn profits without lifting a finger
            </h3>

            <div className="flex flex-col gap-8">
              <p className="font-normal text-sm md:text-base tracking-[1px] leading-8 text-white">
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
            height={728}
            className="md:hidden mt-12 mx-auto"
          />
          <Image
            loading="lazy"
            src="/debit-card.png"
            alt="debit card"
            width={564}
            height={728}
            className="hidden md:block h-[491px] w-[380px]"
          />
        </section>

        {/* Section 3 - Start with Zero Trading Knowledge */}
        <section className="flex flex-col md:flex-row md:gap-10 section-3-bg-mobile mx-auto px-4 py-8">
          <div className="flex flex-col md:mt-12 gap-6">
            <div className="why-people-choose-us bw-lr-gradient w-max">
              <span className="font-normal text-[9px] leading-4 text-white">
                Why people choose us
              </span>
            </div>

            <span
              className={`text-gradient-earn-profits tracking-[2px] leading-[150%] font-normal text-2xl xs:text-[27px] md:text-3xl ${anton.className}`}
            >
              Start with Zero Trading Knowledge
            </span>

            <div className="flex flex-col gap-6">
              <p className="font-normal text-sm md:text-base tracking-[1px] leading-8 text-white">
                No need to “know the market.” Streple simplifies everything From
                choosing a trader to earning from their strategies. If you can
                tap a button, you can trade...
              </p>

              <Link
                href="#"
                className="flex flex-row items-center gap-3 leading-[150%] tracking-[2px] font-bold text-[20px] text-[#DFD735]"
              >
                Explore Streple Learn
                <GoArrowRight size={16} />
              </Link>
            </div>
          </div>

          <Image
            loading="lazy"
            src="/zero-knowledge.png"
            alt="zero knowledge"
            width={564}
            height={728}
            className="md:hidden mt-12 mx-auto"
          />
          <Image
            loading="lazy"
            src="/zero-knowledge.png"
            alt="zero knowledge"
            width={564}
            height={728}
            className="hidden md:block h-[491px] w-[380px] mt-12 mx-auto"
          />
        </section>

        {/* Section 4 - Testimonials */}
        <section className="flex flex-col section-4-bg-mobile mx-auto px-4 pb-8">
          <div className="flex flex-col gap-13 items-center mx-auto">
            <div className="flex flex-col mt-18 gap gap-6 items-center mx-auto">
              <div className="why-people-choose-us bw-lr-gradient w-max">
                <span className="font-normal text-[9px] leading-4 text-white">
                  Testimonials
                </span>
              </div>

              <span
                className={`font-normal text-center text-2xl xs:text-[27px] md:text-3xl leading-[150%] text-gradient-real-results ${anton.className}`}
              >
                Real results from real people
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-4 items-center">
              <div className="testimonial-card-mobile">
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

              <div className="testimonial-card-mobile">
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

              <div className="testimonial-card-mobile">
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

        {/* Section 5 - With Streple, you copy trades with limited risks */}
        {/* <section className="flex flex-col md:flex-row section-5-bg-mobile mx-auto px-4 pb-8">
          <div className="flex flex-col mt-18 gap-6">
            <span
              className={`font-normal text-[27px] leading-[150%] text-gradient-real-results ${anton.className}`}
            >
              With Streple, you copy trades with limited risks
            </span>

            <p className="font-normal text-sm md:text-base leading-6 md:leading-8 text-white">
              Streple protects your funds and gives you full control.
              Here&apos;s how we keep your journey safe from day one.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex flex-row items-center gap-4">
                <FaRegCheckCircle
                  size={16}
                  className="font-extrabold text-[#FFFFFFA6]"
                />
                <span className="font-normal text-sm md:text-base leading-6 md:leading-8 text-white">
                  Verified traders
                </span>
              </div>

              <div className="flex flex-row items-center gap-4">
                <FaRegCheckCircle
                  size={16}
                  className="font-extrabold text-[#FFFFFFA6]"
                />
                <span className="font-normal text-sm md:text-base leading-6 md:leading-8 text-white">
                  Risk control tools
                </span>
              </div>
            </div>
          </div>

          <Image
            loading="lazy"
            src="/verified.png"
            alt="verified"
            width={564}
            height={534}
            className="md:w-[401px] md:h-[380px] mt-12 mx-auto"
          />
        </section> */}

        <JoinProtraderProgramSection />

        {/* Section 6 - Start trading smarter today with Streple */}
        <section className="flex flex-col section-6-bg-mobile pb-8 bg-[url('../public/section-6-bg.png')]">
          <div className="flex flex-col mx-auto mt-18 gap-10 w-[90%] min-h-[424px] bg-[#FFFFFF0D] rounded-[26px] justify-center px-2 bg-no-repeat bg-cover bg-center bg-[url('../public/start-trading-bg.png')]">
            <span
              className={`flex flex-row mx-auto justify-center text-center font-normal leading-[150%] tracking-[2px] text-2xl xs:text-[27px] md:text-3xl text-white ${anton.className}`}
            >
              Start trading smarter today with Streple
            </span>

            <div className="flex flex-col items-center gap-6 mx-auto">
              <Link
                href="#"
                className="flex flex-row items-center rounded-[20px] px-[16px] py-[12px] gap-2.5 bg-[#F4E90E] hover:bg-[#CEC510]"
              >
                <span className="font-bold leading-[150%] tracking-[2px] text-sm md:text-base text-[#2C2C26]">
                  Start copying trades
                </span>
                <GoArrowRight className="text-[#2C2D28] size-4 md:size-6" />
              </Link>
              <Link href="#" className="flex flex-row items-center gap-3">
                <span className="font-bold leading-[150%] tracking-[2px] text-base text-[#EBF0D5]">
                  Streple for Pro traders
                </span>
                <GoArrowRight size={16} className="text-[#EBF0D5]" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
