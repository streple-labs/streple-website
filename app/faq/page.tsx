"use client";

import Faq from "@/components/faq/Faq";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { anton } from "../fonts";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const [submitted, setSubmitted] = useState(false);

  return (
    <main>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => {
              toggleModal();
              setSubmitted(false);
            }}
          />
          <div className="bg-[#262427] py-6 md:py-10 px-4 md:px-8 rounded-[10px] w-[90%] max-w-[637px] relative max-h-[90vh] overflow-y-auto">
            {submitted ? (
              <div className="flex flex-col gap-6 md:gap-9">
                <Image
                  src={"/success.webp"}
                  alt="success"
                  width={200}
                  height={109}
                  className="mx-auto"
                />

                <div className="space-y-3 mx-auto">
                  <h4
                    className={`${anton.className} text-[21px] md:text-[27px] leading-[150%] tracking-[2px] font-normal`}
                  >
                    Thanks! You&apos;ll hear from us soon.
                  </h4>
                  <p className="text-sm md:text-base font-normal leading-6 tracking-[1px] ">
                    Check your inbox for a reply from the Streple team.
                  </p>
                </div>

                <button
                  onClick={() => {
                    toggleModal();
                    setSubmitted(false);
                  }}
                  type="button"
                  title="go back"
                  className="flex justify-center items-center w-full xs:w-[283px] mx-auto h-[68px] md:h-[48px] rounded-[20px] px-4 py-3 gap-2.5 bg-[#F4E90E] hover:bg-[#CEC510]"
                >
                  <span className="font-bold text-sm md:text-base leading-[150%] tracking-[2px] text-[#2C2C26]">
                    Go back
                  </span>
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-6 md:gap-9">
                <h5 className="text-base md:text-xl leading-6 tracking-[1px]  font-bold">
                  Enter your details and we will get back to you
                </h5>

                <label className="space-y-1.5 md:space-y-3">
                  <p className=" font-normal text-sm md:text-base leading-6 tracking-[1px]">
                    Full name
                  </p>
                  <input
                    value={formData.name}
                    name="name"
                    onChange={handleChange}
                    type="text"
                    placeholder="e.g John Doe"
                    className="h-[82px] w-full text-base px-6 py-5 rounded-[20px] md:rounded-3xl gap-4 bg-[#302D30]  leading-6 tracking-[1px] placeholder:text-white/50 placeholder:text-xs sm:placeholder:text-base border-0 outline-0 ring-0"
                  />
                </label>
                <label className="space-y-1.5 md:space-y-3">
                  <p className=" font-normal text-sm md:text-base leading-6 tracking-[1px]">
                    Email address
                  </p>
                  <input
                    value={formData.email}
                    name="email"
                    onChange={handleChange}
                    type="text"
                    placeholder="Input your email address"
                    className="h-[82px] w-full text-base px-6 py-5 rounded-[20px] md:rounded-3xl gap-4 bg-[#302D30]  leading-6 tracking-[1px] placeholder:text-white/50 placeholder:text-xs sm:placeholder:text-base border-0 outline-0 ring-0"
                  />
                </label>

                <label className="space-y-1.5 md:space-y-3">
                  <p className=" font-normal text-sm md:text-base leading-6 tracking-[1px]">
                    How can we help you?
                  </p>
                  <textarea
                    minLength={10}
                    value={formData.message}
                    name="message"
                    onChange={handleChange}
                    placeholder="I'd like to..."
                    className="h-[129px] w-full text-base px-6 py-5 rounded-[20px] md:rounded-3xl gap-4 bg-[#302D30]  leading-6 tracking-[1px] placeholder:text-white/50 placeholder:text-xs sm:placeholder:text-base border-0 outline-0 ring-0"
                  />
                </label>

                <button
                  onClick={() => {
                    setSubmitted(true);
                  }}
                  type="button"
                  title="submit form"
                  className="flex flex-row justify-center items-center w-full xs:w-[283px] mx-auto h-[68px] md:h-[48px] rounded-[20px] px-4 py-3 gap-2.5 bg-[#F4E90E] hover:bg-[#CEC510]"
                >
                  <span className="font-bold text-sm md:text-base leading-[150%] tracking-[2px] text-[#2C2C26]">
                    Submit
                  </span>
                  <GoArrowRight size={16} className="text-[#2C2D28]" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* faq page */}
      <section className="flex flex-col hero-section-bg px-4 sm:px-[6.4%] items-center">
        <div className="mw md:min-h-screen xl:min-h-auto w-full relative overflow-hidden">
          <Navbar />

          <div className="absolute size-[280px] min-[320px]:size-[315px] sm:size-[650px] xl:size-[868px] -bottom-[220px] sm:-bottom-[480px] xl:-bottom-[600px] left-1/2 -translate-x-1/2 bg-contain bg-no-repeat bg-[url('../public/eclipse.webp')]" />
          <div className="absolute size-[124px] sm:size-[186px] xl:size-[242px] -bottom-[70px] sm:-bottom-[90px] xl:-bottom-[110px]  left-1/2 -translate-x-1/2 bg-no-repeat bg-contain bg-[url('../public/bitcoin-faq.webp')]" />

          <div className="relative flex flex-col items-center justify-center gap-12 md:gap-[78px] min-h-[70vh] my-20">
            <h3
              className={`justify-center items-center font-normal leading-[150%] tracking-[2%] text-center text-2xl xs:text-[27px] sm:text-3xl md:text-5xl lg:text-[52px] max-w-[940px] text-gradient-copy-top-traders ${anton.className}`}
            >
              Your copy trading questions, answered.
            </h3>

            <Faq />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center md:min-h-[610px] justify-center relative overflow-x-hidden bg-cover bg-no-repeat bg-center bg-[url('../public/section-6-bg.webp')] mb-8 md:mt-16">
        {/* <div className="absolute -right-[70px] top-0 bg-no-repeat size-[242px] bg-[url('../public/bitcoin-traced.webp')]" /> */}
        <div className="flex flex-col justify-center mx-auto gap-10 start-trading-bg my-[52px] px-3 md:px-8 lg:my-[92px] lg:px-[80px]">
          <span
            className={`flex flex-row mx-auto justify-center text-center leading-[150%] tracking-[2px] font-normal text-[27px] sm:text-3xl md:text-5xl lg:text-[52px]  max-w-[700px] ${anton.className}`}
          >
            Need more help?
          </span>

          <p className="w-full max-w-[694px] text-center text-white/70 text-base md:text-[21px] leading-8 tracking-[1px] mx-auto">
            Contact our support team to get answers and the help that you need
          </p>

          <div className="flex items-center justify-center w-full">
            <button
              onClick={toggleModal}
              type="button"
              title="contact support"
              className="flex flex-row justify-center items-center w-full xs:w-[283px] h-[68px] md:h-[48px] rounded-[20px] px-4 py-3 gap-2.5 bg-[#F4E90E] hover:bg-[#CEC510]"
            >
              <span className="font-bold text-sm md:text-base leading-[150%] tracking-[2px] text-[#2C2C26]">
                Contact support
              </span>
              <GoArrowRight size={16} className="text-[#2C2D28]" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
