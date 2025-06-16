import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React from "react";
import { anton } from "../fonts";
import { GoArrowRight } from "react-icons/go";
import Faq from "@/components/faq/Faq";
import Link from "next/link";

export default function page() {
  return (
    <main className="flex flex-col">
      <section className="flex flex-col hero-section-bg">
        <div className="min-h-[80vh] xxl:min-h-screen w-full relative overflow-hidden">
          <Navbar />
          <div className="absolute xxl:size-[60%] top-[70%] left-[21%] bg-no-repeat bg-[url('../public/eclipse.png')]" />
          <div className="absolute xxl:size-[20%] top-[85%] left-[41%] bg-no-repeat bg-[url('../public/bitcoin-faq.png')]" />
          <div className="absolute xxl:size-[620px] top-[10%] left-[62%] bg-no-repeat bg-[url('../public/yellow-shimmer.png')] -rotate-90" />

          <div className="relative flex flex-col mx-auto w-916-h-603-xl w-732-h-482-xl xxl:w-[1030px] my-10 md:my-16 gap-[17px] items-center text-center px-2">
            <h3
              className={`justify-center items-center font-normal leading-[150%] tracking-[2%] text-2xl xs:text-[27px] sm:text-3xl md:text-5xl lg:text-[52px] max-w-[940px] text-gradient-copy-top-traders ${anton.className}`}
            >
              Your copy trading questions, answered.
            </h3>

            <p className="font-normal leading-8 text-sm sm:text-base xl:text-[21px] text-[#FFFFFFB2] max-w-[694px]">
              Browse through our most common questions below and if you can't
              find your answer?, Drop us a question and we'll get back to you
              quickly.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full">
              <input
                type="text"
                placeholder="Ask your question"
                className="h-[82px] w-full sm:w-[480px] text-base px-6 py-5 rounded-[20px] md:rounded-3xl gap-4 bg-[#242324] text-white leading-6 tracking-[1px] placeholder:text-white/50 placeholder:text-xs sm:placeholder:text-base border-0 outline-0 ring-0"
              />

              <button
                type="button"
                className="flex h-[64px] w-full sm:w-[134px] items-center justify-center rounded-3xl px-4 py-3 gap-3 bg-[#B39FF0] font-bold tracking-[1px] leading-6 text-base text-[#2C2D28]"
              >
                Send
                <GoArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen flex justify-center">
        <div className="relative flex flex-col mx-auto w-916-h-603-xl w-732-h-482-xl xxl:w-[1030px] mb-10 mt-16 md:my-[92px] gap-8 md:gap-[60px] md:items-center px-2">
          <h3
            className={`justify-center items-center font-normal text-4xl md:text-5xl lg:text-[52px] leading-[150%] tracking-[2px] text-gradient-copy-top-traders ${anton.className}`}
          >
            FAQs
          </h3>
          <Faq />
        </div>
      </section>

      <section className="flex flex-col items-center md:min-h-[610px] justify-center relative overflow-x-hidden bg-cover bg-no-repeat bg-center bg-[url('../public/section-6-bg.png')] mb-8 md:mt-16">
        {/* <div className="absolute -right-[70px] top-0 bg-no-repeat size-[242px] bg-[url('../public/bitcoin-traced.png')]" /> */}
        <div className="flex flex-col justify-center mx-auto gap-10 start-trading-bg py-[52px] px-3 md:px-8 lg:py-[92px] lg:px-[80px]">
          <span
            className={`flex flex-row mx-auto justify-center text-center leading-[150%] tracking-[2px] font-normal text-[27px] sm:text-3xl md:text-5xl lg:text-[52px] text-white max-w-[700px] ${anton.className}`}
          >
            Need more help?
          </span>

          <p className="w-full max-w-[694px] text-center text-white/70 text-base md:text-[21px] leading-8 tracking-[1px] mx-auto">
            Contact our support team to get answers and the help that you need
          </p>

          <div className="flex items-center mx-auto">
            <Link
              href="#"
              className="flex flex-row justify-center items-center xs:w-[283px] h-[68px] md:h-[48px] rounded-[20px] px-4 py-3 gap-2.5 bg-[#F4E90E] hover:bg-[#CEC510]"
            >
              <span className="font-bold text-sm md:text-base leading-[150%] tracking-[2px] text-[#2C2C26]">
                Contact support
              </span>
              {/* <GoArrowRight
                size={16}
                className="text-[#2C2D28] hidden md:block"
              /> */}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
