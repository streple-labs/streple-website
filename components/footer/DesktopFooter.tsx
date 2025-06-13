import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function DesktopFooter() {
  return (
    <footer className="hidden lg:flex flex-col h-[298px]">
      <div className="flex flex-col ml-[90px] w-[440px] mt-[45px]">
        <Link href="/">
          <Image src="/logo-footer.png" alt="streple logo" width={186} height={84} />
        </Link>
        <p className="font-normal text-[21px] text-[#FFFFFFB2]">
          Streple lets you copy top traders in real-time with no experience needed.
        </p>
      </div>
    </footer>
  );
}
