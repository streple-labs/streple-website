import TradingInfo from "@/components/about-us/TradingInfo";
import Navbar from "@/components/navbar/Navbar";
import PurpleShimmer from "@/public/purple-shimmer-aboutus";
import SwigglyLine from "@/public/swiggly-line";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { anton } from "../fonts";

export default function Page() {
  return (
    <main className="lex flex-col">
      <section className="flex justify-center hero-section-bg px-4 sm:px-[6.4%]">
        <div className="mw md:xxl:min-h-screen relative overflow-hidden">
          <span className="hidden lg:block absolute top-[38%] left-1/2 -translate-1/2">
            <PurpleShimmer />
          </span>
          <Navbar />
          {/* HERO Section */}
          <div className="flex flex-col md:min-h-[578px] my-24 gap-[60px] items-center text-center">
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

      <section className="flex justify-center px-4 sm:px-[6.4%] relative bg-[#1D1B1E]">
        <div className="flex flex-col md:flex-row justify-between gap-[62px] md:gap-6 w-full mw py-12 md:py-[92px]">
          <div className="flex flex-col gap-8 w-full md:w-1/2">
            <h3
              className={`text-gradient-earn-profits tracking-[2px] leading-[150%] font-normal text-[27px] sm:text-2xl md:text-3xl lg:text-4xl ${anton.className}`}
            >
              At Streple, we see a world where:
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="col-span-1 px-4 py-3 space-y-2.5 rounded-[10px] backdrop-blur-sm bg-gradient-to-b to-[#2A282B1A] from-[#8B799480]">
                <Image src={"/atstreple1.png"} alt="" width={28} height={25} />

                <p className="font-normal leading-6 tracking-[1px] text-base text-white">
                  People don&apos;t just use digital tools, they own with them
                </p>
              </div>
              <div className="col-span-1 px-4 py-3 space-y-2.5 rounded-[10px] backdrop-blur-sm bg-gradient-to-b to-[#2A282B1A] from-[#8B799480]">
                <Image src={"/atstreple2.png"} alt="" width={23} height={24} />

                <p className="font-normal leading-6 tracking-[1px] text-base text-white">
                  Participation in digital economies is open to everyone{" "}
                </p>
              </div>
              <div className="col-span-1 px-4 py-3 space-y-2.5 rounded-[10px] backdrop-blur-sm bg-gradient-to-b to-[#2A282B1A] from-[#8B799480]">
                <Image src={"/atstreple3.png"} alt="" width={23} height={22} />

                <p className="font-normal leading-6 tracking-[1px] text-base text-white">
                  Knowledge replaces fear, and ownership replaces limitation
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto">
            <Image
              src={"/joining-hands.jpg"}
              alt="joining hands illustration"
              width={561}
              height={541}
              className="rounded-[23px] max-w-full max-h-full object-cover aspect-[561/541] md:aspect-auto md:w-[561px] md:h-[541px]"
            />
          </div>
        </div>
      </section>

      <section className="flex justify-center px-4 sm:px-[6.4%] relative bg-[#1D1B1E]">
        <div className="flex flex-col md:flex-row justify-between gap-[62px] md:gap-6 w-full mw py-12 md:py-[92px]">
          <div className="mx-auto">
            <Image
              src={"/world-map.png"}
              alt="world map illustration"
              width={500}
              height={273}
            />
          </div>

          <div className="flex flex-col gap-8 w-full md:w-1/2">
            <h3
              className={`text-gradient-earn-profits tracking-[2px] leading-[150%] font-normal text-[27px] sm:text-2xl md:text-3xl lg:text-4xl ${anton.className}`}
            >
              We exist to close the digital participation gap
            </h3>

            <div className="flex flex-col gap-[60px]">
              <p className="font-normal text-sm tracking-[1px] leading-8 xl:text-[21px] text-white/70">
                Especially for African youth and underserved communities. Our
                mission is to make digital ownership simple to understand, safe
                to explore, and accessible to all, because opportunity
                shouldn&apos;t belong only to the wealthy, it should start with
                anyone bold enough to learn.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TradingInfo />

      <section className="flex justify-center px-4 sm:px-[6.4%] relative bg-[#1D1B1E] overflow-hidden">
        <div className="flex items-center flex-col mw my-[54px] md:my-[92px] gap-16 md:gap-[84px]">
          <div className="flex flex-col items-center justify-center gap-8 md:gap-6">
            <h3
              className={`text-gradient-earn-profits tracking-[2px] leading-[150%] font-normal text-[27px] sm:text-2xl md:text-3xl lg:text-4xl ${anton.className} text-center`}
            >
              We are backed by the best
            </h3>
            <p className="text-sm sm:text-base md:text-[21px] leading-8 tracking-[1px] text-[#FFFFFFB2] text-center">
              We&apos;re supported by investors and builders who&apos;ve shaped
              the tools you already know and trust, now helping us shape the
              future of crypto trading.
            </p>
          </div>

          {/* <SponsorCarousel /> */}
          <div className="flex flex-col sm:flex-row w-screen border-y border-y-white/10 h-[410px] sm:h-[205px]">
            <div className="flex-1 max-sm:border-b max-sm:border-b-white/10 sm:border-r sm:border-r-white/10 flex items-center justify-center flex-col gap-3">
              <Image src={"/enet.png"} alt="logo" width={131} height={35} />

              <p className="text-base leading-[150%] tracking-[1px] text-white/80 font-normal text-center">
                Cybersecurity Solution provider
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center flex-col gap-3">
              <Image src={"/elysium.png"} alt="logo" width={188} height={48} />

              <p className="text-base leading-[150%] tracking-[1px] text-white/80 font-normal text-center">
                UK based Research institution
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex px-4 sm:px-[6.4%] justify-center relative overflow-x-hidden">
        <div className="flex flex-col items-center md:min-h-[610px] justify-center w-full mw">
          <div className="hidden md:block absolute -right-[70px] top-0 bg-no-repeat size-[242px] bg-[url('../public/bitcoin-traced.png')]" />
          <div className="relative flex flex-col justify-center mx-auto gap-10 start-trading-bg py-[52px] px-3 md:px-8 lg:py-[92px] lg:px-[80px]">
            <h3
              className={`flex mx-auto justify-center text-center leading-[150%] tracking-[2px] font-normal text-[27px] sm:text-3xl md:text-5xl lg:text-[52px] text-white max-w-[800px] ${anton.className}`}
            >
              Join thousands and start trading smarter with Streple
            </h3>

            <div className="flex items-center justify-center w-full">
              <button
                // onClick={() => {}}
                type="button"
                title="contact support"
                className="flex justify-center items-center w-full xs:w-[283px] h-[68px] md:h-[48px] rounded-[20px] px-4 py-3 gap-2.5 bg-[#F4E90E] hover:bg-[#CEC510]"
              >
                <span className="font-bold text-sm md:text-base leading-[150%] tracking-[2px] text-[#2C2C26]">
                  Start copying trades
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
