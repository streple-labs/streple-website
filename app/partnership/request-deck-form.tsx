"use client";

import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { anton } from "../fonts";

export default function RequestDeckForm() {
  const [showDeckForm, setShowDeckForm] = useState(false);

  return (
    <>
      {showDeckForm && (
        <div className="fixed inset-0 items-center justify-center z-50">
          <div className="absolute inset-0 bg-black/10" />

          <div className="overflow-y-auto w-full h-full flex items-center justify-center relative p-6">
            <form
              className="bg-[#262427] py-10 px-4 flex flex-col items-center text-start gap-9 rounded-[10px] w-full max-w-[637px]"
              onSubmit={(e) => {
                e.preventDefault();
                setShowDeckForm(false);
              }}
            >
              <h4
                className={`${anton.className} font-bold tracking-[1px] text-xl/6 w-full`}
              >
                Request investor deck
              </h4>

              <label htmlFor="fullname" className="w-full space-y-3">
                <p className="text-base/6 tracking-[1px]">Full name</p>
                <input
                  placeholder="e.g John Doe"
                  name="fullname"
                  id="fullname"
                  type="text"
                  className="py-5 px-6 bg-[#302D30] rounded-[20px] w-full h-[82px] placeholder:text-white/50 text-sm/4 tracking-[1px] outline-0 border-0 ring-0"
                  required
                />
              </label>
              <label htmlFor="email" className="w-full space-y-3">
                <p className="text-base/6 tracking-[1px]">Email address</p>
                <input
                  placeholder="Input your email address"
                  name="email"
                  id="email"
                  type="email"
                  className="py-5 px-6 bg-[#302D30] rounded-[20px] w-full h-[82px] placeholder:text-white/50 text-sm/4 tracking-[1px] outline-0 border-0 ring-0"
                  required
                />
              </label>
              <label htmlFor="fullname" className="w-full space-y-3">
                <p className="text-base/6 tracking-[1px]">Optional message</p>
                <textarea
                  placeholder="Enter your message"
                  name="fullname"
                  id="fullname"
                  className="py-5 px-6 bg-[#302D30] rounded-[20px] w-full h-[130px] placeholder:text-white/50 text-sm/4 tracking-[1px] outline-0 border-0 ring-0"
                />
              </label>

              <button
                type="submit"
                aria-label="submit form"
                className="flex items-center justify-center gap-2.5 bg-[#F4E90E] py-3 px-4 w-full max-w-[316px] h-[67px] rounded-[20px] text-[#2C2D28] text-base/[150%] tracking-[2px] font-bold"
              >
                Submit
                <GoArrowRight className="w-3 h-2.5 fill-[#2C2D28]" />
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row items-center gap-6 w-full justify-center">
        <input
          type="email"
          name="email"
          id="email"
          aria-label="email"
          className="h-[70px] max-w-[573px] w-full rounded-[20px] py-3 px-4 md:py-5 md:px-6 bg-[#302D30] text-white/50 tracking-[1px] ring-0 border-0 outline-0"
          placeholder="Input your email address"
        />
        <button
          onClick={() => {
            setShowDeckForm(true);
          }}
          type="button"
          className="flex justify-center items-center rounded-3xl p-4 gap-3 bg-[#B39FF0] font-bold tracking-[1px] leading-6 text-sm md:text-base text-[#2C2D28]"
        >
          Request Investor Deck
          <GoArrowRight size={20} />
        </button>
      </div>
    </>
  );
}
