import Navbar from "@/components/navbar/Navbar";
import BitcoinBlurred from "@/public/images/icons/bitcoin-blurred";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { anton } from "../fonts";
import Faq from "./faqs";

export const metadata: Metadata = {
  title: "Protraders",
  description:
    "Become a pro trader on Streple. Share strategies, earn rewards, and let followers copy your trades in a trusted, gamified trading community.",
};

export default function page() {
  return (
    <main>
      <section className="flex flex-col hero-section-bg px-4 sm:px-[6.4%] items-center relative overflow-x-hidden">
        <div className="xl:hidden absolute bottom-0 h-[278px] w-full left-0 right-0 bg-no-repeat bg-[url('../public/images/bottom-purple-bg.webp')]" />
        <div className="mw md:min-h-screen xl:min-h-auto">
          <Navbar />

          <div className="relative flex flex-col lg:flex-row min-h-[70vh] xxl:min-h-[50vh] items-center justify-between my-16 xl:my-32 gap-16 lg:gap-[5%]">
            <div className="w-full lg:w-[50%] flex flex-col gap-4">
              <h3
                className={`justify-center items-center font-normal leading-[150%] tracking-[2%] text-2xl xs:text-[27px] sm:text-3xl md:text-5xl lg:text-[52px] lg:max-w-[940px] text-gradient-copy-top-traders ${anton.className}`}
              >
                Start to Earn While
                <br />
                You Trade
              </h3>

              <p className="font-normal leading-8 text-sm sm:text-base lg:text-[21px] tracking-[1px] text-white/70">
                Turn your trading expertise into income. Build a loyal
                following, share your strategies, and earn from every copier on
                Streple.
              </p>

              <Link
                href="/protraders/apply"
                className="cursor-pointer max-w-[245px] w-full mt-6 flex justify-center items-center rounded-3xl px-4 py-3 gap-3 bg-[#B39FF0] font-bold tracking-[2px] leading-[150%] text-base text-[#2C2D28]"
              >
                Apply now
                <GoArrowRight size={16} className="text-[#2C2D28]" />
              </Link>
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
      </section>

      <section className="flex px-4 sm:px-[6.4%] justify-center">
        <div className="relative mw py-[92px] flex gap-16 flex-col items-center w-full">
          <div className="flex flex-col gap-6 items-center justify-center w-full text-center max-w-[875px]">
            <h3
              className={`${anton.className} text-2xl xs:text-[27px] sm:text-3xl md:text-4xl lg:text-[52px] text-gradient-copy-top-traders leading-[150%] tracking-[2px] max-w-[968px] text-center`}
            >
              Why Join Streple as a Pro Trader?
            </h3>
            <p className="text-base/6 md:text-[21px]/8 tracking-[1px] text-white/70">
              By joining, you not only grow your portfolio, you also help shape
              Africa&apos;s copy trading ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 md:gap-y-16 w-full">
            <div className="w-full flex flex-col gap-[92px] py-8 px-5 border rounded-[10px] bw-tb-border-gradient protraders-section-bg">
              <div className="w-full flex flex-col gap-6">
                <h5
                  className={`text-[21px] md:text-[27px] leading-[150%] tracking-[2px] font-normal ${anton.className}`}
                >
                  Earn Crypto Rewards
                </h5>
                <p className="text-base/6 md:text-[21px]/10 tracking-[1px] text-white/70">
                  Receive performance-based incentives whenever followers copy
                  your trades.
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
                  Grow Your Influence
                </h5>
                <p className="text-base/6 md:text-[21px]/10 tracking-[1px] text-white/70">
                  Become a trusted leader in Africa&apos;s social trading
                  community.
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

            <div className="w-full flex flex-col gap-[92px] py-8 px-5 border rounded-[10px] bw-tb-border-gradient protraders-section-bg">
              <div className="w-full flex flex-col gap-6">
                <h5
                  className={`text-[21px] md:text-[27px] leading-[150%] tracking-[2px] font-normal ${anton.className}`}
                >
                  Advanced Trading Tools
                </h5>
                <p className="text-base/6 md:text-[21px]/10 tracking-[1px] text-white/70">
                   Access secure dashboards, analytics, and risk management
                  features.
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
                  Tokenized Incentives
                </h5>
                <p className="text-base/6 md:text-[21px]/10 tracking-[1px] text-white/70">
                  Unlock blockchain-powered rewards and points for
                  top-performing traders.
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

            <div className="md:col-span-2 w-full flex flex-col md:flex-row gap-6 py-8 px-5 border rounded-[10px] bw-tr-border-gradient protraders-section-bg">
              <div className="w-full md:w-1/2 flex flex-col gap-6">
                <h5
                  className={`text-[21px] md:text-[27px] leading-[150%] tracking-[2px] font-normal ${anton.className}`}
                >
                  Community Recognition
                </h5>
                <p className="text-base md:text-[21px] leading-6 md:leading-10 tracking-[1px] text-white/70">
                  Featured across the platform as a verified pro trader.
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
          </div>

          <Link
            href="/protraders/apply"
            className="cursor-pointer max-w-[245px] md:max-w-[318px] w-full flex justify-center items-center rounded-[20px] h-[55px] px-4 py-3 gap-3 bg-[#F4E90E] font-bold tracking-[2px] leading-[150%] text-base text-[#2C2D28]"
          >
            Apply now
            <GoArrowRight size={16} className="text-[#2C2D28]" />
          </Link>
        </div>
      </section>

      <section className="flex px-4 sm:px-[6.4%] justify-center relative">
        <span className="absolute top-0 right-0">
          <BitcoinBlurred />
        </span>

        <div className="relative mw py-[92px] flex gap-16 flex-col items-center w-full">
          <h3
            className={`${anton.className} text-2xl xs:text-[27px] sm:text-3xl md:text-4xl lg:text-[52px] text-center leading-[150%] tracking-[2px]`}
          >
            How Streple Pro Traders Program Works
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Apply and verify",
                desc: "Submit your application and confirm your trading experience.",
              },
              {
                title: "Connect Your Account",
                desc: "Securely link your exchange or trading account to Streple.",
              },
              {
                title: "Share and earn",
                desc: "Publish trades and strategies for followers to copy, earning fees, token bonuses, and blockchain rewards.",
              },
              {
                title: "Grow your community",
                desc: "Engage in forums, webinars, and trading challenges to expand your influence and income.",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-6">
                <div className="w-[60px] h-[50px] rounded-lg bg-[#C094F0] flex items-center justify-center shadow-[0px_7px_5.1px_0px_#9977BD_inset]">
                  <p
                    className={`${anton.className} text-[21px] md:text-[27px] leading-[150%] tracking-[2px] bg-gradient-to-b from-black via-[#0000007A] to-black/20 bg-clip-text text-transparent`}
                  >
                    {i + 1}
                  </p>
                </div>

                <div className="pt-how-card-bg py-8 px-5 rounded-[10px] space-y-6 h-full">
                  <h3
                    className={`${anton.className} text-xl md:text-2xl leading-[150%] tracking-[2px]`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-base/6 md:text-[21px]/10 tracking-[1px] text-white/70">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/protraders/apply"
            className="cursor-pointer max-w-[245px] md:max-w-[318px] w-full flex justify-center items-center rounded-[20px] h-[55px] px-4 py-3 gap-3 bg-[#B39FF0] font-bold tracking-[2px] leading-[150%] text-base text-[#2C2D28]"
          >
            Apply now
            <GoArrowRight size={16} className="text-[#2C2D28]" />
          </Link>
        </div>
      </section>

      <section className="flex flex-col py-12 md:py-24 px-4 sm:px-[6.4%] items-center relative overflow-x-hidden">
        <div className="relative mw flex flex-col lg:flex-row gap-20 justify-between">
          <div className="flex flex-col gap-[60px]">
            <div className="space-y-6">
              <h6
                className={`${anton.className} text-2xl md:text-4xl leading-[150%] tracking-[2px] bg-gradient-to-r from-white to-white/5 bg-clip-text text-transparent`}
              >
                Who Can Join
              </h6>

              <div className="space-y-6">
                {[
                  "Minimum 1–2 years trading experience",
                  "Verified trading history with consistent performance",
                  "Verified trading history with consistent performance",
                  "Completed KYC verification(optional)",
                ].map((item) => (
                  <p key={item} className="flex items-center gap-3">
                    <span>
                      <svg
                        width="26"
                        height="25"
                        viewBox="0 0 26 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 21C8.3 21 4.5 17.2 4.5 12.5C4.5 7.8 8.3 4 13 4C17.7 4 21.5 7.8 21.5 12.5C21.5 17.2 17.7 21 13 21ZM13 5C8.85 5 5.5 8.35 5.5 12.5C5.5 16.65 8.85 20 13 20C17.15 20 20.5 16.65 20.5 12.5C20.5 8.35 17.15 5 13 5Z"
                          fill="white"
                          fillOpacity="0.8"
                        />
                        <path
                          d="M12.0004 16.2004L7.65039 11.8504L8.35039 11.1504L12.0004 14.8004L17.6504 9.15039L18.3504 9.85039L12.0004 16.2004Z"
                          fill="white"
                          fillOpacity="0.8"
                        />
                      </svg>
                    </span>

                    {item}
                  </p>
                ))}
              </div>
            </div>
            <Link
              href="/protraders/apply"
              className="flex flex-row items-center gap-3 leading-[150%] tracking-[2px] font-bold text-[20px] text-[#DFD735]"
            >
              Get started
              <GoArrowRight size={16} />
            </Link>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src={"/images/who-can-join.png"}
              alt="who can join illustration"
              width={564}
              height={650}
              className="size-auto lg:max-w-[564px] lg:max-h-[650px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="flex px-4 sm:px-[6.4%] justify-center py-12 md:py-24">
        <div className="mw flex flex-col gap-[36px] items-center">
          <span
            className={`text-gradient-earn-profits tracking-[2px] leading-[150%] font-normal text-36-lg text-46-xl xxl:text-[52px] 2xl:text-[56px] ${anton.className}`}
          >
            What Our Pro Traders Say
          </span>

          <div className="flex flex-row w-full justify-between">
            {[
              {
                name: "Amaka Ugwu",
                img: "/images/amaka-ugwu.webp",
                testimonial:
                  "“Joining Streple transformed my 7trading experience. Not only am I earning rewards, but I’m also mentoring new traders across Africa.",
              },
              {
                name: "David Ossai",
                img: "/images/david-ossai.webp",
                testimonial:
                  "“The copy trading dashboard is seamless, and the community engagement is incredible. Sharing my trades has never been this rewarding.”",
              },
              {
                name: "Femi Adetola",
                img: "/images/femi-adetola.webp",
                testimonial:
                  "“The copy trading dashboard is seamless, and the community engagement is incredible. Sharing my trades has never been this rewarding.”",
              },
            ].map((testimonial, i) => (
              <div key={i} className="testimonial-card">
                <div className="flex flex-row gap-3 items-center">
                  <Image
                    loading="lazy"
                    src={testimonial.img}
                    alt="Testifier's Photo"
                    width={60}
                    height={60}
                    className="w-[60px] h-[60px] rounded-full"
                  />
                  <span
                    className={`font-normal text-base leading-[150%] tracking-[2px] ${anton.className}`}
                  >
                    {testimonial.name}
                  </span>
                </div>

                <p className="font-normal leading-8 tracking-[1px] text-sm xl:text-[21px] ">
                  {testimonial.testimonial}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex px-4 sm:px-[6.4%] py-12 md:py-24 justify-center">
        <div className="mw flex flex-col gap-14 items-center">
          <h3
            className={`justify-center items-center font-normal leading-[150%] tracking-[2%] text-center text-2xl xs:text-[27px] sm:text-3xl md:text-5xl lg:text-[52px] max-w-[940px] text-gradient-copy-top-traders ${anton.className}`}
          >
            FAQs
          </h3>

          <Faq />
        </div>
      </section>

      <section className="flex px-4 sm:px-[6.4%] justify-center relative bg-[url('/images/protraders-cta-section-bg.jpg')] bg-cover object-center bg-no-repeat">
        <div className="bg-[#A082F90D] absolute inset-0" />
        <div className="flex flex-col items-center md:min-h-[560px] justify-center gap-10 my-8 md:my-16 w-full max-w-[898px] relative">
          <h3
            className={`${anton.className} text-2xl xs:text-[27px] sm:text-3xl md:text-4xl lg:text-[52px] leading-[150%] tracking-[2px] max-w-[968px] text-center`}
          >
            Ready to turn your trading expertise into influence and rewards?
          </h3>
          <Link
            href="/protraders/apply"
            className="cursor-pointer max-w-[245px] md:max-w-[318px] w-full flex justify-center items-center rounded-[20px] h-[55px] px-4 py-3 gap-3 bg-[#F4E90E] font-bold tracking-[2px] leading-[150%] text-base text-[#2C2D28]"
          >
            Apply now
            <GoArrowRight size={16} className="text-[#2C2D28]" />
          </Link>
        </div>
      </section>
    </main>
  );
}
