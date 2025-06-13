import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { FaRegCheckCircle } from "react-icons/fa";
import { anton, roboto } from '@/app/fonts';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

export default function DesktopHome() {
    return (
        <div className='hidden lg:flex flex-col'>
            <main className="flex flex-col">
                <section className="flex flex-col hero-section-bg">
                    <Navbar />
                    {/* HERO Section */}
                    <div className="flex flex-col mx-auto w-916-h-603-xl w-732-h-482-xl xxl:w-[1030px] xxl:h-[678px] mt-16 gap-[17px] items-center text-center px-2">
                        <span className={`justify-center items-center font-normal text-36-lg text-46-xl xxl:text-[52px] 2xl:text-[56px] max-w-[940px] text-gradient-copy-top-traders ${anton.className}`}>
                            COPY TOP TRADERS AND EARN SMARTER
                        </span>

                        <p className="font-normal text-sm xl:text-[21px] text-[#FFFFFFB2] max-w-[694px]">
                            Streple lets you mirror top traders in real-time — no experience needed.
                        </p>

                        <div className="flex flex-row items-center gap-11">
                            <Link href="#" className="flex flex-row items-center rounded-3xl px-4 py-3 gap-3 bg-[#B39FF0] font-bold text-base text-[#2C2D28]">
                                Start coying trades
                                <GoArrowRight size={20} />
                            </Link>

                            <Link href="#" className="flex flex-row items-center gap-3 font-bold text-base text-[#EBF0D5]">
                                Streple for Pro traders
                                <GoArrowRight size={20} />
                            </Link>
                        </div>

                        <div className="flex container w-max h-max">
                            <Image
                                src="/portfolio.png"
                                alt="portfolio"
                                width={464}
                                height={528}
                            />
                        </div>
                    </div>
                </section>

                {/* Section 1 - With Streple, Trading becomes easier */}
                <section className="flex flex-col justify-center items-center section-1-bg px-2">
                    <div className="flex flex-col w-898-lg w-1122-xl xxl:w-[1262px] 2xl:w-[1346px] gap-10 my-[96px]">
                        <div className={`items-center text-center text-44-lg text-55-xl xxl:text-[62px] 2xl:text-[66px] text-white font-normal ${anton.className}`}>
                            <span className="text-[#B39FF0]">With Streple</span>
                            <span className="text-gradient-with-streple">, Trading becomes<br />easier</span>
                        </div>

                        <p className="font-normal text-[20px] text-[#FFFFFFB2] max-w-[694px] text-center mx-auto">
                            With just 3 steps, you can start trading like a pro.
                            No experience, no stress. Find a top trader, set your limits, and start earning automatically.
                        </p>

                        <div className="flex flex-row mx-auto w-898-lg w-1122-xl xxl:w-[1262px] 2xl:w-[1346px] justify-between">
                            <div className="flex flex-row gap-6 items-center">
                                <div className="flex flex-row justify-center items-center w-8 lg:h-10 lg:w-10 xl:h-14 xl:w-14 xxl:w-[75px] xxl:h-[75px] border border-[#70568D47] rounded-[46px] bg-[#5A555C1A]">
                                    <span className="font-normal text-lg lg:text-xl xl:text-2xl xxl:text-[27px] text-[#DDC4F8]">1</span>
                                </div>
                                <p className={`font-normal text-base lg:text-lg xl:text-xl xxl:text-2xl text-white ${roboto.className}`}>
                                    Sign Up
                                </p>
                            </div>

                            <div className="flex flex-row gap-6 items-center">
                                <div className="flex flex-row justify-center items-center w-8 lg:h-10 lg:w-10 xl:h-14 xl:w-14 xxl:w-[75px] xxl:h-[75px] border border-[#70568D47] rounded-[46px] bg-[#5A555C1A]">
                                    <span className="font-normal text-lg lg:text-xl xl:text-2xl xxl:text-[27px] text-[#DDC4F8]">2</span>
                                </div>
                                <p className={`font-normal text-base lg:text-lg xl:text-xl xxl:text-2xl text-white ${roboto.className}`}>
                                    Find a Verified Trader
                                </p>
                            </div>

                            <div className="flex flex-row gap-6 items-center">
                                <div className="flex flex-row justify-center items-center w-8 lg:h-10 lg:w-10 xl:h-14 xl:w-14 xxl:w-[75px] xxl:h-[75px] border border-[#70568D47] rounded-[46px] bg-[#5A555C1A]">
                                    <span className="font-normal text-lg lg:text-xl xl:text-2xl xxl:text-[27px] text-[#DDC4F8]">3</span>
                                </div>
                                <p className={`font-normal text-base lg:text-lg xl:text-xl xxl:text-2xl text-white ${roboto.className}`}>Start copying Trades</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2 - Earn profits without lifting a finger */}
                <section className="flex flex-col my-[96px] px-2">
                    <div className="flex flex-row gap-[82px] mx-auto">
                        <div className="flex flex-col gap-6 w-435-lg w-544-xl xxl:w-[612px]">
                            <div className="why-people-choose-us w-max">
                                <span className="font-normal text-xs text-white">Why people choose us</span>
                            </div>

                            <span className={`text-gradient-earn-profits font-normal text-36-lg text-46-xl xxl:text-[52px] 2xl:text-[56px] ${anton.className}`}>
                                Earn profits without lifting a finger
                            </span>

                            <div className="flex flex-col gap-[60px]">
                                <p className="font-normal text-sm xl:text-[21px] text-white">
                                    Stop stressing over charts and market news.
                                    With Streple, you copy the exact trades of top-performing experts automatically.
                                    You trade smarter, even when you&apos;re offline.
                                </p>

                                <Link href="#" className="flex flex-row items-center gap-3 font-bold text-[20px] text-[#DFD735]">
                                    Get started
                                    <GoArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        <Image
                            src="/debit-card.png"
                            alt="debit card"
                            width={564}
                            height={728}
                            className="w-401-h-518-lg w-501-h-647-xl xxl:w-[564px] xxl:h-[728px]"
                        />
                    </div>
                </section>

                {/* Section 3 - Start with Zero Trading Knowledge */}
                <section className="flex flex-col my-[96px] px-2">
                    <div className="flex flex-row gap-[82px] mx-auto">
                        <div className="flex flex-col gap-6 w-435-lg w-544-xl xxl:w-[612px]">
                            <div className="why-people-choose-us w-max">
                                <span className="font-normal text-base text-white">Why people choose us</span>
                            </div>

                            <span className={`text-gradient-earn-profits font-normal text-36-lg text-46-xl xxl:text-[52px] 2xl:text-[56px] ${anton.className}`}>
                                Start with Zero Trading Knowledge
                            </span>

                            <div className="flex flex-col gap-[60px]">
                                <p className="font-normal text-sm xl:text-[21px] text-white">
                                    No need to “know the market.”
                                    Streple simplifies everything From choosing a trader to earning from their strategies.
                                    If you can tap a button, you can trade...
                                </p>

                                <Link href="#" className="flex flex-row items-center gap-3 font-bold text-[20px] text-[#DFD735]">
                                    Explore Streple Learn
                                    <GoArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        <Image
                            src="/zero-knowledge.png"
                            alt="zero knowledge"
                            width={564}
                            height={728}
                            className="w-401-h-518-lg w-501-h-647-xl xxl:w-[564px] xxl:h-[728px]"
                        />
                    </div>
                </section>

                {/* Section 4 - Testimonials */}
                <section className="flex flex-col my-[96px] px-2 items-center">
                    <div className="flex flex-col w-892-lg w-1114-xl xxl:w-[1254px] gap-[36px] items-center mx-auto">
                        <div className="why-people-choose-us w-max">
                            <span className="font-normal text-xs text-white">Testimonials</span>
                        </div>

                        <span className={`font-normal text-36-lg text-46-xl xxl:text-[52px] 2xl:text-[56px] text-gradient-real-results ${anton.className}`}>
                            Real results from real people
                        </span>

                        <div className="flex flex-row w-full justify-between">
                            <div className="testimonial-card">
                                <div className="flex flex-row gap-3 items-center">
                                    <Image src="/amaka-ugwu.jpg" alt="Amaka Ugwu's Photo" width={60} height={60} className="w-[60px] h-[60px] rounded-full" />
                                    <span className={`font-normal text-base text-white ${anton.className}`}>Amaka Ugwu</span>
                                </div>

                                <p className="font-normal text-sm xl:text-[21px] text-white">
                                    “I never thought I could trade.
                                    I just picked a top trader, set my budget, and boom.
                                    I made a small profit in my first week.
                                    Streple made me feel like I actually belong in the market.”
                                </p>
                            </div>

                            <div className="testimonial-card">
                                <div className="flex flex-row gap-3 items-center">
                                    <Image src="/david-ossai.jpg" alt="David Ossai's Photo" width={60} height={60} className="w-[60px] h-[60px] rounded-full" />
                                    <span className={`font-normal text-base text-white ${anton.className}`}>David Ossai</span>
                                </div>

                                <p className="font-normal text-sm xl:text-[21px] text-white">
                                    “I work full time, so I don&apos;t have time to sit with charts all day.
                                    Streple lets me copy traders with proven stats.
                                    I just check my phone, adjust my limits, and go about my day.”
                                </p>
                            </div>

                            <div className="testimonial-card">
                                <div className="flex flex-row gap-3 items-center">
                                    <Image src="/femi-adetola.jpg" alt="Femi Adetola's Photo" width={60} height={60} className="w-[60px] h-[60px] rounded-full" />
                                    <span className={`font-normal text-base text-white ${anton.className}`}>Femi Adetola</span>
                                </div>

                                <p className="font-normal text-sm xl:text-[21px] text-white">
                                    “I wanted to grow my savings but had zero knowledge of crypto.
                                    Streple made it easy to get started without stress.
                                    I feel like my money is working for me now.”
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 5 - With Streple, you copy trades with limited risks */}
                <section className="flex flex-col my-[96px] px-2">
                    <div className="flex flex-row mx-auto gap-[82px] items-center">
                        <div className="flex flex-col w-435-lg w-544-xl xxl:w-[612px] gap-[39px]">
                            <span className={`font-normal text-36-lg text-46-xl xxl:text-[52px] 2xl:text-[56px] text-gradient-real-results ${anton.className}`}>
                                With Streple, you copy trades with limited risks
                            </span>

                            <p className="font-normal text-sm xl:text-[21px] text-white">
                                Streple protects your funds and gives you full control.
                                Here&apos;s how we keep your journey safe from day one.
                            </p>

                            <div className="flex flex-col gap-4">
                                <div className="flex flex-row items-center gap-4">
                                    <FaRegCheckCircle size={28} className="font-extrabold text-[#FFFFFFA6]" />
                                    <span className="font-normal text-base text-white">Verified traders</span>
                                </div>

                                <div className="flex flex-row items-center gap-4">
                                    <FaRegCheckCircle size={28} className="font-extrabold text-[#FFFFFFA6]" />
                                    <span className="font-normal text-base text-white">Risk control tools</span>
                                </div>
                            </div>
                        </div>

                        <Image
                            src="/verified.png"
                            alt="verified"
                            width={564}
                            height={534}
                            className="w-401-h-380-lg w-501-h-475-xl xxl:w-[564px] xxl:h-[534px]"
                        />
                    </div>
                </section>

                {/* Start trading smarter today with Streple */}
                <section className="flex flex-col items-center section-6-bg justify-center">
                    <div className="flex flex-col mx-auto gap-10 start-trading-bg">
                        <span className={`flex flex-row mx-auto justify-center text-center font-normal text-44-lg text-55-xl xxl:text-[62px] text-white max-w-[700px] ${anton.className}`}>
                            Start trading smarter today with Streple
                        </span>

                        <div className="flex flex-row items-center gap-6 mx-auto">
                            <Link href="#" className="flex flex-row items-center rounded-[20px] px-[16px] py-[12px] gap-2.5 bg-[#F4E90E] hover:bg-[#CEC510]">
                                <span className="font-bold text-base text-[#2C2C26]">Start copying trades</span>
                                <GoArrowRight size={20} className="text-[#2C2D28]" />
                            </Link>
                            <Link href="#" className="flex flex-row items-center gap-3">
                                <span className="font-bold text-xl text-[#EBF0D5]">Streple for Pro traders</span>
                                <GoArrowRight size={20} className="text-[#EBF0D5]" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
