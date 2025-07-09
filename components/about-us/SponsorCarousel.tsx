"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function SponsorCarousel() {
  const logosRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (logosRef.current) {
      const ul = logosRef.current;
      const clonedUl = ul.cloneNode(true) as HTMLElement;
      ul.parentNode?.insertBefore(clonedUl, ul.nextSibling);
      clonedUl.setAttribute("aria-hidden", "true");
    }
  }, []);

  return (
    <div className="w-full mx-auto inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_32px,_black_calc(100%-32px),transparent_100%)] md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <div className="flex infinite-scroll-right">
        <ul
          ref={logosRef}
          className="flex items-center md:justify-start justify-center shrink-0"
        >
          <li className="bg-[#5A555C1A] mx-3 w-[296px] h-[239px] flex items-center justify-center">
            <Image src={"/elysium.webp"} alt="logo" width={188} height={48} />
          </li>
          <li className="bg-[#5A555C1A] mx-3 w-[296px] h-[239px] flex items-center justify-center">
            <Image src={"/enet.webp"} alt="logo" width={131} height={35} />
          </li>
          <li className="bg-[#5A555C1A] mx-3 w-[296px] h-[239px] flex items-center justify-center">
            <Image src={"/elysium.webp"} alt="logo" width={188} height={48} />
          </li>
          <li className="bg-[#5A555C1A] mx-3 w-[296px] h-[239px] flex items-center justify-center">
            <Image src={"/enet.webp"} alt="logo" width={131} height={35} />
          </li>
          <li className="bg-[#5A555C1A] mx-3 w-[296px] h-[239px] flex items-center justify-center">
            <Image src={"/elysium.webp"} alt="logo" width={188} height={48} />
          </li>
          <li className="bg-[#5A555C1A] mx-3 w-[296px] h-[239px] flex items-center justify-center">
            <Image src={"/enet.webp"} alt="logo" width={131} height={35} />
          </li>
        </ul>
      </div>
    </div>
  );
}
