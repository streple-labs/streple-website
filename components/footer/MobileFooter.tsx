import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function MobileFooter() {
  return (
    <footer className="flex lg:hidden flex-col py-16">
      <div className="flex flex-col px-4">
        <Link href="/">
          <Image
            src="/logo-footer.png"
            alt="streple logo"
            width={100}
            height={45}
          />
        </Link>
        <p className="font-normal text-base leading-6 text-[#FFFFFFB2]">
          Streple lets you copy top traders in real-time with no experience
          needed.
        </p>
      </div>
    </footer>
  );
}
