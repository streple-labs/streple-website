import Navbar from "@/components/navbar/Navbar";
import { anton } from "../fonts";
import SwigglyLine from "@/public/swiggly-line";
import PurpleShimmer from "@/public/purple-shimmer-aboutus";
import Image from "next/image";

export default function page() {
  return (
    <main className="lex flex-col">
      <section className="flex justify-center hero-section-bg">
        <div className="mw max-xxl:min-h-screen relative overflow-hidden">
          <span className="hidden md:block absolute top-[39%] left-1/2 -translate-1/2">
            <PurpleShimmer />
          </span>
          <Navbar />
          {/* HERO Section */}
          <div className="flex flex-col min-h-[678px] mt-24 gap-[60px] items-center text-center">
            <h2
              className={`leading-[150%] tracking-[2px] justify-center items-center font-normal text-[27px] sm:text-3xl md:text-5xl lg:text-6xl max-w-[855px] text-gradient-copy-top-traders ${anton.className} relative`}
            >
              We make digital ownership Simple
              <span className="hidden md:block absolute -bottom-12 left-1/2 -translate-1/2">
                <SwigglyLine />
              </span>
            </h2>

            <p className="leading-[35px] md:leading-[44px] tracking-[1px] font-semibold text-base md:text-2xl lg:text-[28px] text-[#FFFFFFB2] max-w-[1256px]">
              Streple is the world&apos;s first social investing platform
              focused on helping people grow wealth together, across crypto,
              stocks, and ETFs
            </p>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center px-4 sm:px-[6.4%] relative bg-[#1D1B1E]">
        <div className="flex items-center justify-between flex-col gap-8 md:gap-16 lg:gap-[92px] w-full mw py-12 md:py-[92px]">
          <div className="flex items-center justify-center flex-col gap-[49px]">
            <Image
              src="/streple-logo.png"
              alt="streple logo"
              width={112}
              height={34}
            />

            <p className="leading-[35px] md:leading-[44px] tracking-[1px] font-semibold text-base md:text-2xl lg:text-[28px] text-[#FFFFFFB2] text-center max-w-[1256px]">
              We see a future where digital ownership isn&apos;t just for the
              wealthy, but for everyday people who want to learn, trade, and
              grow together with Streple helping them take their first steps
              toward ownership and independence.
            </p>
          </div>

          <div className="flex justify-between gap-6 my-[96px]">
            <div className="flex flex-col gap-[60px] w-full md:w-1/2">
              <h3
                className={`text-gradient-earn-profits tracking-[2px] leading-[150%] font-normal text-[27px] sm:text-2xl md:text-3xl lg:text-4xl ${anton.className}`}
              >
                Founder story
              </h3>

              <div className="flex flex-col gap-[60px]">
                <p className="font-normal text-sm tracking-[1px] leading-8 xl:text-[21px] text-white">
                  &quot;Growing up, I watched a lot of people in my community
                  avoid crypto not because they didn&apos;t care, but because it
                  felt too confusing. I was also there. <br />
                  <br /> There were charts, jargon, and a lot of pressure to
                  &quot;just figure it out.&quot; I didn&apos;t start with a lot
                  of understanding, I started by chasing profits and slowly,
                  learning and understanding followed.
                  <br />
                  <br /> That&apos;s when I realized: people don&apos;t need
                  hype or complex tools. They just need a simple way to start,
                  and people they can grow with. <br />
                  <br /> That&apos;s why I created Streple: a place to learn
                  from real traders, copy their moves, make profit and grow your
                  skills, one step at a time. <br />
                  <br /> This isn&apos;t just about trading. It&apos;s about
                  building confidence, opportunity, and a team.
                  <br />
                  <br /> And if you&apos;re ready, you&apos;re part of it.&quot;
                  <br />
                  <br /> Arinze, Founder of Streple
                </p>
              </div>
            </div>

            <div className="bg-[#3B343F66] h-[541px] rounded-[23px] w-full md:w-1/2 max-w-[564px]" />
          </div>
        </div>
      </section>
    </main>
  );
}
