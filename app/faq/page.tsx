"use client";

import Faq from "@/components/faq/Faq";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { anton } from "../fonts";
import Image from "next/image";

export default function page() {
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
  const [showMessage, setShowMessage] = useState(false);
  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="flex flex-col">
      {/* faq form modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black/70" />
          <div className="bg-[#262427] flex flex-col gap-9 py-10 px-8 rounded-[10px] w-full max-w-[637px] relative">
            {submitted ? (
              <>
                <Image
                  src={"/success.png"}
                  alt="success"
                  width={200}
                  height={109}
                  className="mx-auto"
                />

                <div className="space-y-3 mx-auto">
                  <h4
                    className={`${anton.className} text-[27px] leading-[150%] tracking-[2px] text-white font-normal`}
                  >
                    Thanks! You&apos;ll hear from us soon.
                  </h4>
                  <p className="text-base font-normal leading-6 tracking-[1px] text-white">
                    Check your inbox for a reply from the Streple team.
                  </p>
                </div>

                <button
                  onClick={() => {
                    toggleModal();
                    setShowMessage(false);
                    setSubmitted(false);
                  }}
                  type="button"
                  title="go back"
                  className="flex justify-center items-center xs:w-[283px] mx-auto h-[68px] md:h-[48px] rounded-[20px] px-4 py-3 gap-2.5 bg-[#F4E90E] hover:bg-[#CEC510]"
                >
                  <span className="font-bold text-sm md:text-base leading-[150%] tracking-[2px] text-[#2C2C26]">
                    Go back
                  </span>
                </button>
              </>
            ) : (
              <>
                <h5 className="text-xl leading-6 tracking-[1px] text-white font-bold">
                  Enter your details and we will get back to you
                </h5>

                <label className="space-y-3">
                  <p className="text-white font-normal text-base leading-6 tracking-[1px]">
                    Full name
                  </p>
                  <input
                    value={formData.name}
                    name="name"
                    onChange={handleChange}
                    type="text"
                    placeholder="e.g John Doe"
                    className="h-[82px] w-full text-base px-6 py-5 rounded-[20px] md:rounded-3xl gap-4 bg-[#302D30] text-white leading-6 tracking-[1px] placeholder:text-white/50 placeholder:text-xs sm:placeholder:text-base border-0 outline-0 ring-0"
                  />
                </label>
                <label className="space-y-3">
                  <p className="text-white font-normal text-base leading-6 tracking-[1px]">
                    Email address
                  </p>
                  <input
                    value={formData.email}
                    name="email"
                    onChange={handleChange}
                    type="text"
                    placeholder="Input your email address"
                    className="h-[82px] w-full text-base px-6 py-5 rounded-[20px] md:rounded-3xl gap-4 bg-[#302D30] text-white leading-6 tracking-[1px] placeholder:text-white/50 placeholder:text-xs sm:placeholder:text-base border-0 outline-0 ring-0"
                  />
                </label>
                {showMessage && (
                  <label className="space-y-3">
                    <p className="text-white font-normal text-base leading-6 tracking-[1px]">
                      How can we help you?
                    </p>
                    <textarea
                      minLength={10}
                      value={formData.message}
                      name="message"
                      onChange={handleChange}
                      placeholder="I'd like to..."
                      className="h-[129px] w-full text-base px-6 py-5 rounded-[20px] md:rounded-3xl gap-4 bg-[#302D30] text-white leading-6 tracking-[1px] placeholder:text-white/50 placeholder:text-xs sm:placeholder:text-base border-0 outline-0 ring-0"
                    />
                  </label>
                )}

                <button
                  onClick={() => {
                    setSubmitted(true);
                  }}
                  type="button"
                  title="submit form"
                  className="flex flex-row justify-center items-center xs:w-[283px] mx-auto h-[68px] md:h-[48px] rounded-[20px] px-4 py-3 gap-2.5 bg-[#F4E90E] hover:bg-[#CEC510]"
                >
                  <span className="font-bold text-sm md:text-base leading-[150%] tracking-[2px] text-[#2C2C26]">
                    Submit
                  </span>
                  <GoArrowRight size={16} className="text-[#2C2D28]" />
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* faq page */}
      <section className="flex flex-col hero-section-bg">
        <div className="min-h-screen w-full relative overflow-hidden">
          <Navbar />

          <div className="absolute size-[280px] min-[320px]:size-[315px] sm:size-[650px] xl:size-[868px] -bottom-[220px] sm:-bottom-[480px] xl:-bottom-[600px] left-1/2 -translate-x-1/2 bg-contain bg-no-repeat bg-[url('../public/eclipse.png')]" />
          <div className="absolute size-[124px] sm:size-[186px] xl:size-[242px] -bottom-[70px] sm:-bottom-[90px] xl:-bottom-[110px]  left-1/2 -translate-x-1/2 bg-no-repeat bg-contain bg-[url('../public/bitcoin-faq.png')]" />
          {/* <div className="absolute size-[620px] bottom-0 right-0 bg-no-repeat bg-[url('../public/yellow-shimmer.png')] -rotate-90" /> */}

          <div className="relative flex flex-col mx-auto w-916-h-603-xl w-732-h-482-xl xxl:w-[1030px] my-16 gap-[17px] items-center text-center px-2">
            <h3
              className={`justify-center items-center font-normal leading-[150%] tracking-[2%] text-2xl xs:text-[27px] sm:text-3xl md:text-5xl lg:text-[52px] max-w-[940px] text-gradient-copy-top-traders ${anton.className}`}
            >
              Your copy trading questions, answered.
            </h3>

            <p className="font-normal leading-8 text-sm sm:text-base xl:text-[21px] text-[#FFFFFFB2] max-w-[694px]">
              Browse through our most common questions below and if you
              can&apos;t find your answer?, Drop us a question and we&apos;ll
              get back to you quickly.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full">
              <input
                minLength={10}
                value={formData.message}
                name="message"
                onChange={handleChange}
                type="text"
                placeholder="Ask your question"
                className="h-[82px] w-full sm:w-[480px] text-base px-6 py-5 rounded-[20px] md:rounded-3xl gap-4 bg-[#242324] text-white leading-6 tracking-[1px] placeholder:text-white/50 placeholder:text-xs sm:placeholder:text-base border-0 outline-0 ring-0"
              />

              <button
                onClick={toggleModal}
                type="button"
                className="ring-0 border-0 outline-0 flex h-[64px] w-full sm:w-[134px] items-center justify-center rounded-3xl px-4 py-3 gap-3 bg-[#B39FF0] font-bold tracking-[1px] leading-6 text-base text-[#2C2D28]"
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
            <button
              onClick={() => {
                toggleModal();
                setShowMessage(true);
              }}
              type="button"
              title="contact support"
              className="flex flex-row justify-center items-center xs:w-[283px] h-[68px] md:h-[48px] rounded-[20px] px-4 py-3 gap-2.5 bg-[#F4E90E] hover:bg-[#CEC510]"
            >
              <span className="font-bold text-sm md:text-base leading-[150%] tracking-[2px] text-[#2C2C26]">
                Contact support
              </span>
              <GoArrowRight size={16} className="text-[#2C2D28]" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
