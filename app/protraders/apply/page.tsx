import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { anton } from "../../fonts";

export default function page() {
  return (
    <main>
      <section className="flex flex-col px-4 sm:px-[6.4%] items-center">
        <div className="mw md:min-h-screen xl:min-h-auto">
          <Navbar />

          <div className="relative flex flex-col items-center justify-between py-12 xl:py-24 gap-10 md:gap-16">
            <h3
              className={`justify-center items-center font-normal leading-[150%] tracking-[2%] text-2xl sm:text-3xl md:text-4xl ${anton.className}`}
            >
              Be a Pro trader
            </h3>

            <div className="flex flex-col gap-6 w-full">
              <label htmlFor="name" className="space-y-3 w-full">
                <p className="text-base/5 md:text-[21px]/8 tracking-[1px]">
                  Name
                </p>
                <input
                  id="name"
                  name="name"
                  placeholder="e.g. John Doe"
                  className="rounded-[20px] px-3 md:px-8 py-5 md:py-6 bg-[#242324] gap-4 h-[80px] md:h-[108px] placeholder:text-white/40 w-full outline-0 ring-0 border-0"
                />
              </label>
              <label htmlFor="email" className="space-y-3 w-full">
                <p className="text-base/5 md:text-[21px]/8 tracking-[1px]">
                  Email address
                </p>
                <input
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="rounded-[20px] px-3 md:px-8 py-5 md:py-6 bg-[#242324] gap-4 h-[80px] md:h-[108px] placeholder:text-white/40 w-full outline-0 ring-0 border-0"
                />
              </label>
              <label htmlFor="experience" className="space-y-3 w-full">
                <p className="text-base/5 md:text-[21px]/8 tracking-[1px]">
                  Trading experience (Months)
                </p>
                <input
                  id="experience"
                  name="experience"
                  placeholder="0 Months"
                  className="rounded-[20px] px-3 md:px-8 py-5 md:py-6 bg-[#242324] gap-4 h-[80px] md:h-[108px] placeholder:text-white/40 w-full outline-0 ring-0 border-0"
                />
              </label>
              <label htmlFor="platform-used" className="space-y-3 w-full">
                <p className="text-base/5 md:text-[21px]/8 tracking-[1px]">
                  Exchange/platform used
                </p>
                <input
                  id="platform-used"
                  name="platform-used"
                  placeholder="Enter the exchange or platform that you use"
                  className="rounded-[20px] px-3 md:px-8 py-5 md:py-6 bg-[#242324] gap-4 h-[80px] md:h-[108px] placeholder:text-white/40 w-full outline-0 ring-0 border-0"
                />
              </label>
              <label htmlFor="link" className="space-y-3 w-full">
                <p className="text-base/5 md:text-[21px]/8 tracking-[1px]">
                  Telegram/Discord handle link (optional)
                </p>
                <input
                  id="link"
                  name="link"
                  placeholder="Enter your handle link"
                  className="rounded-[20px] px-3 md:px-8 py-5 md:py-6 bg-[#242324] gap-4 h-[80px] md:h-[108px] placeholder:text-white/40 w-full outline-0 ring-0 border-0"
                />
              </label>
              <button className="cursor-pointer max-w-[318px] w-full mx-auto flex justify-center items-center rounded-[20px] h-[55px] px-4 py-3 gap-3 bg-[#F4E90E] font-bold tracking-[2px] leading-[150%] text-base text-[#2C2D28]">
                Submit
                <GoArrowRight size={16} className="text-[#2C2D28]" />
              </button>
            </div>
          </div>
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
