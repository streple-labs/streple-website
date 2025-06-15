import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col py-16 lg:h-[298px] lg:mx-auto lg:2xl:w-[1356px] lg:w-full lg:py-0">
      <div className="flex flex-col px-4 lg:ml-[90px] lg:2xl:ml-0 lg:w-[440px] lg:mt-[45px] lg:px-0">
        <Link href="/">
          <Image
            src="/logo-footer.png"
            alt="streple logo"
            width={100}
            height={45}
            className="lg:hidden"
          />
          <Image
            src="/logo-footer.png"
            alt="streple logo"
            width={186}
            height={84}
            className="hidden lg:block"
          />
        </Link>
        <p className="font-normal text-base leading-6 text-[#FFFFFFB2] lg:text-[21px] lg:leading-8">
          Streple lets you copy top traders in real-time with no experience
          needed.
        </p>
      </div>
    </footer>
  );
}
