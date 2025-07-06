import { anton } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="w-full flex items-center justify-center px-4 sm:px-[6.4%] py-[92px]">
      <footer className="flex flex-col gap-[72px] lg:gap-[92px] w-full max-w-[1356px]">
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-[5%]">
          <h3
            className={`${anton.className} w-auto text-2xl xs:text-[27px] sm:text-3xl md:text-4xl lg:text-[52px] text-gradient-copy-top-traders leading-[150%] tracking-[2px]`}
          >
            Subscribe to Our Newsletter
          </h3>

          <div className="relative w-full">
            <input
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              placeholder="ENTER EMAIL ADDRESS"
              className={`pr-12 border-b-[3px] border-b-white/70 leading-[150%] tracking-[2px] font-normal text-base sm:text-lg md:text-2xl lg:text-4xl placeholder:text-white/40  w-full ring-0 border-0 outline-0 ${anton.className}`}
            />
            <span className="w-6 h-5 md:w-7 md:h-6 lg:w-[42px] lg:h-[36px] absolute right-0 top-0 md:top-2 cursor-pointer">
              <svg
                viewBox="0 0 42 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41.5536 16.1893L26.5533 1.18896C26.3437 0.979055 26.0765 0.836039 25.7855 0.778003C25.4945 0.719967 25.1929 0.749516 24.9187 0.862915C24.6446 0.976313 24.4102 1.16847 24.2453 1.41507C24.0803 1.66168 23.9922 1.95167 23.992 2.24836V9.81413C19.1282 10.2304 13.7562 12.6117 9.33677 16.3599C4.01541 20.875 0.702224 26.6932 0.00658552 32.7421C-0.047776 33.2123 0.0475767 33.6878 0.279073 34.1007C0.51057 34.5137 0.866415 34.8431 1.29597 35.0421C1.72552 35.2411 2.20689 35.2995 2.67158 35.209C3.13626 35.1186 3.56059 34.8839 3.88416 34.5384C5.9467 32.3427 13.2856 25.3994 23.992 24.7882V32.2489C23.9922 32.5456 24.0803 32.8356 24.2453 33.0822C24.4102 33.3288 24.6446 33.521 24.9187 33.6344C25.1929 33.7478 25.4945 33.7773 25.7855 33.7193C26.0765 33.6613 26.3437 33.5182 26.5533 33.3083L41.5536 18.308C41.8342 18.0268 41.9917 17.6459 41.9917 17.2486C41.9917 16.8514 41.8342 16.4705 41.5536 16.1893ZM26.9921 28.6282V23.2488C26.9921 22.8509 26.8341 22.4694 26.5528 22.1881C26.2714 21.9068 25.8899 21.7487 25.4921 21.7487C20.227 21.7487 15.0988 23.1231 10.2499 25.8363C7.78038 27.2243 5.47946 28.8929 3.3929 30.8089C4.48042 26.3388 7.22173 22.0881 11.2774 18.6474C15.6313 14.9555 20.9451 12.7486 25.4921 12.7486C25.8899 12.7486 26.2714 12.5905 26.5528 12.3092C26.8341 12.0279 26.9921 11.6464 26.9921 11.2485V5.87093L38.3717 17.2486L26.9921 28.6282Z"
                  fill="white"
                  fillOpacity="0.7"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="flex justify-between flex-col gap-[72px] lg:gap-4 lg:flex-row">
          <div className="space-y-6 lg:space-y-[60px] w-full max-w-[495px]">
            <div className="flex flex-col gap-4">
              <Link href="/">
                <Image
                  src="/streple-logo.png"
                  alt="streple logo"
                  width={100}
                  height={45}
                  className="lg:hidden"
                />
                <Image
                  src="/streple-logo.png"
                  alt="streple logo"
                  width={112}
                  height={34}
                  className="hidden lg:block"
                />
              </Link>
              <p className="font-normal text-base leading-6 text-[#FFFFFFB2] tracking-[1px] lg:text-[21px] lg:leading-8">
                Licensed Virtual Asset Service Provider
              </p>
            </div>
            <div className="flex items-center gap-6 md:gap-8">
              <a
                href="https://t.me/streplenetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="size-[45px] bg-[#5A555C4D] rounded-full flex items-center justify-center"
              >
                <FaTelegramPlane size={20} className="text-white/70" />
              </a>
              <a
                href="https://www.instagram.com/streple.network"
                target="_blank"
                rel="noopener noreferrer"
                className="size-[45px] bg-[#5A555C4D] rounded-full flex items-center justify-center"
              >
                <FaInstagram size={20} className="text-white/70" />
              </a>
              <a
                href="https://www.linkedin.com/company/enet-innovation/"
                target="_blank"
                rel="noopener noreferrer"
                className="size-[45px] bg-[#5A555C4D] rounded-full flex items-center justify-center"
              >
                <FaLinkedin size={20} className="text-white/70" />
              </a>
              <a
                href="https://x.com/streplenetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="size-[45px] bg-[#5A555C4D] rounded-full flex items-center justify-center"
              >
                <FaXTwitter size={20} className="text-white/70" />
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 lg:gap-8 xl:gap-16">
            <div className="gap-4 flex flex-col">
              <h5
                className={`${anton.className} leading-6 tracking-[1px]  mb-2`}
              >
                Products
              </h5>
              <Link
                href={"/learn"}
                className="text-sm leading-[25px] tracking-[1px] "
              >
                Learn
              </Link>
              <Link
                href={"/protraders"}
                className="text-sm leading-[25px] tracking-[1px] "
              >
                ProTraders
              </Link>
              <Link
                href={"/faq"}
                className="text-sm leading-[25px] tracking-[1px] "
              >
                FAQs
              </Link>
            </div>
            <div className="gap-4 flex flex-col">
              <h5
                className={`${anton.className} leading-6 tracking-[1px]  mb-2`}
              >
                Company
              </h5>
              <Link
                href={"/about-us"}
                className="text-sm leading-[25px] tracking-[1px] "
              >
                About us
              </Link>
              <Link
                href={"/learn/blog"}
                className="text-sm leading-[25px] tracking-[1px] "
              >
                Blog
              </Link>
            </div>
            <div className="gap-4 flex flex-col">
              <h5
                className={`${anton.className} leading-6 tracking-[1px]  mb-2`}
              >
                Legal
              </h5>
              <Link
                href={"/privacy-and-policy"}
                className="text-sm leading-[25px] tracking-[1px] "
              >
                Privacy and Policy
              </Link>
              <Link
                href={"/terms-and-conditions"}
                className="text-sm leading-[25px] tracking-[1px] "
              >
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
