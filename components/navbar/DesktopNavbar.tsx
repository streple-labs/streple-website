"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/explore-traders", label: "Explore traders" },
  { href: "/learn", label: "Learn" },
  { href: "/about-us", label: "About us" },
  { href: "/faq", label: "FAQs" },
];

export default function DesktopNavbar() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex flex-row items-center mx-auto mt-6 w-909-lg w-1132-xl xxl:w-[1272px] 2xl:w-[1356px] px-2 lg:gap-7 gap-37-xl xxl:gap-[42px] 2xl:gap-[45px]">
      <Link href="/">
        <Image
          src="/streple-logo.png"
          alt="streple logo"
          width={112}
          height={34}
        />
      </Link>

      <div className="flex flex-row w-796-lg w-996-xl xxl:w-[1120px] 2xl:w-[1195px] justify-between items-center">
        <div className="flex flex-row gap-6 xxl:gap-8 2xl:gap-9 font-normal text-base">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`leading-6 tracking-[1px] ${
                pathname === item.href ? "text-[#F4E90EB2]" : "text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-row items-center gap-6">
          <Link href="#" className="font-normal text-base text-white">
            Login
          </Link>

          <Link
            href="#"
            className="flex flex-row items-center justify-center bg-[#F4E90E] hover:bg-[#CEC510] rounded-[20px] px-10 py-3 gap-2.5 font-bold text-base text-[#2C2C26]"
          >
            Sign up
            <GoArrowRight size={20} className="text-[#2C2D28] font-bold" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
