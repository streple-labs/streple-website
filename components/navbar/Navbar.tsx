"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const navItems = [
  { href: "/learn", label: "Learn" },
  { href: "/about-us", label: "About us" },
  { href: "/faq", label: "FAQs" },
  { href: "/protraders", label: "ProTraders" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <header className="flex flex-col relative">
      {/* Desktop */}
      <nav className="hidden w-full lg:flex items-center lg:gap-7 gap-37-xl xxl:gap-[42px] 2xl:gap-[45px] mt-6">
        <Link href="/">
          <Image
            src="/images/streple-logo.webp"
            alt="streple logo"
            width={112}
            height={34}
          />
        </Link>

        <div className="flex justify-between items-center w-full">
          <div className="flex flex-row gap-6 xxl:gap-8 2xl:gap-9 font-normal text-base">
            {navItems.map((item) => (
              <Link
                key={Math.random()}
                href={item.href}
                className={`leading-6 tracking-[1px] ${
                  pathname.startsWith(item.href)
                    ? "text-[#F4E90EB2]"
                    : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-row items-center gap-6">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.streple.com"
              className="font-normal text-base"
            >
              Login
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.streple.com"
              className="flex flex-row items-center justify-center bg-[#F4E90E] hover:bg-[#CEC510] rounded-[20px] px-10 py-3 gap-2.5 font-bold text-base text-[#2C2C26]"
            >
              Sign up
              <GoArrowRight size={20} className="text-[#2C2D28] font-bold" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile */}
      <nav className="flex flex-col lg:hidden relative w-full mt-6">
        {!isMenuOpen && (
          <div className="flex flex-row items-center mx-auto w-full justify-between">
            <Link href="/">
              <Image
                src="/images/streple-logo.webp"
                alt="streple logo"
                width={80}
                height={34}
              />
            </Link>

            <div className="flex flex-row gap-4 items-center">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://app.streple.com"
                className="max-[300px]:hidden flex flex-row items-center justify-center bg-[#F4E90E] hover:bg-[#CEC510] rounded-[20px] px-3 py-2 gap-2 font-bold text-sm text-[#2C2C26]"
              >
                Sign up
                <GoArrowRight size={16} className="text-[#2C2D28] font-bold" />
              </Link>

              <button
                onClick={toggleMenu}
                aria-label="Open menu"
                className="text-[#FFFFFFCC] cursor-pointer"
                type="button"
              >
                <RxHamburgerMenu size={28} />
              </button>
            </div>
          </div>
        )}

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 z-50 flex flex-col bg-[#1B191C] px-4 pt-6"
            >
              <div className="flex justify-end">
                <button
                  onClick={toggleMenu}
                  aria-label="Close menu"
                  className="text-[#FFFFFFCC] cursor-pointer"
                  type="button"
                >
                  <IoCloseOutline size={28} />
                </button>
              </div>

              {/* mobile menu items */}
              <div className="my-auto">
                <div className="flex flex-col text-center gap-6 font-normal text-base">
                  {navItems.map((item) => (
                    <Link
                      key={Math.random()}
                      href={item.href}
                      className={`leading-6 tracking-[1px] ${
                        pathname === item.href
                          ? "text-[#F4E90EB2]"
                          : "text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div className="flex flex-col gap-3 mt-12 text-center">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://app.streple.com"
                    className="items-center border border-[#EBF0D5] rounded-[20px] px-10 py-3 gap-2.5 font-bold text-base "
                  >
                    Login
                  </Link>

                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://app.streple.com"
                    className="flex flex-row items-center justify-center bg-[#F4E90E] hover:bg-[#CEC510] rounded-[20px] px-10 py-3 gap-2.5 font-bold text-base text-[#2C2C26]"
                  >
                    Sign up
                    <GoArrowRight
                      size={20}
                      className="text-[#2C2D28] font-bold"
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
