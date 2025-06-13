import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

export default function DesktopNavbar() {
  return (
    <nav className="hidden lg:flex flex-row items-center mx-auto mt-6 w-909-lg w-1132-xl xxl:w-[1272px] 2xl:w-[1356px] px-2 lg:gap-7 gap-37-xl xxl:gap-[42px] 2xl:gap-[45px]">
      <Link href="/">
        <Image src="/streple-logo.png" alt="streple logo" width={112} height={34} />
      </Link>

      <div className="flex flex-row w-796-lg w-996-xl xxl:w-[1120px] 2xl:w-[1195px] justify-between items-center">
        <div className="flex flex-row gap-6 xxl:gap-8 2xl:gap-9 font-normal text-base text-white">
          <Link href="#">Explore traders</Link>
          <Link href="#">Learn</Link>
          <Link href="#">About us</Link>
          <Link href="#">FAQs</Link>
        </div>

        <div className="flex flex-row items-center gap-6">
          <Link href="#" className="font-normal text-base text-white">Login</Link>

          <Link href="#" className="flex flex-row items-center justify-center bg-[#F4E90E] hover:bg-[#CEC510] rounded-[20px] px-10 py-3 gap-2.5 font-bold text-base text-[#2C2C26]">
            Sign up
            <GoArrowRight size={20} className="text-[#2C2D28] font-bold" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
