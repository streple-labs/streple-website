"use client";

import { anton } from "@/app/fonts";
import api from "@/utils/axios";
import { estimateReadingMinutes } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import ArticleSkeleton from "../article-skeleton/ArticleSkeleton";
import { useState } from "react";

export default function Courses() {
  const { data: courses, isPending: loading } = useQuery<CoursesResponse>({
    queryKey: ["courses-data"],
    queryFn: async () =>
      (
        await api.get("/learnings", {
          params: { page: 1, limit: 6, status: "Published" },
        })
      ).data,
  });

  const [showAll, setShowAll] = useState<boolean>(true);
  const [showArticles, setShowArticles] = useState<boolean>(false);
  const [showVideos, setShowVideos] = useState<boolean>(false);

  function handleShowAll() {
    setShowAll(true);
    setShowArticles(false);
    setShowVideos(false);
  }

  function handleShowArticles() {
    setShowAll(false);
    setShowArticles(true);
    setShowVideos(false);
  }

  function handleShowVideos() {
    setShowAll(false);
    setShowArticles(false);
    setShowVideos(true);
  }

  return (
    <section className="bg-[#1D1B1E] flex px-4 sm:px-[6.4%] justify-center relative">
      <div className="relative flex flex-col mw my-16 gap-14">
        <h1
          className={`justify-center items-center font-normal leading-[150%] tracking-[2%] text-2xl xs:text-[27px] sm:text-3xl md:text-5xl lg:text-[52px] lg:max-w-[940px] text-gradient-copy-top-traders ${anton.className}`}
        >
          Learning guides
        </h1>

        <div className="flex items-center gap-8 md:gap-[80px]">
          <span
            onClick={handleShowAll}
            className={`text-center min-w-10 md:min-w-20 pb-2 cursor-pointer text-base md:text-[21px] leading-6 md:leading-8 tracking-[1px] font-normal ${
              showAll && "border-b-[2.5px] border-b-[#F4E90E]"
            }`}
          >
            All
          </span>
          <span
            onClick={handleShowArticles}
            className={`text-center min-w-10 md:min-w-20 pb-2 cursor-pointer text-base md:text-[21px] leading-6 md:leading-8 tracking-[1px] font-normal ${
              showArticles && "border-b-[2.5px] border-b-[#F4E90E]"
            }`}
          >
            Articles
          </span>
          <span
            onClick={handleShowVideos}
            className={`text-center min-w-10 md:min-w-20 pb-2 cursor-pointer text-base md:text-[21px] leading-6 md:leading-8 tracking-[1px] font-normal ${
              showVideos && "border-b-[2.5px] border-b-[#F4E90E]"
            }`}
          >
            Videos
          </span>
        </div>

        {loading ? (
          <ArticleSkeleton />
        ) : (
          <>
            {!courses?.data.length && (
              <div className="flex items-center justify-center size-full">
                <p className="text-white/50 text-sm font-normal">
                  No courses uploaded yet.
                </p>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full">
              {courses?.data.map((course, i) => (
                <Link
                  href={"/learn/courses/" + course.id}
                  className="space-y-5"
                  key={i}
                >
                  <Image
                    alt="course thumbnail"
                    src={course.thumbnail || "/images/guide-1.png"}
                    width={401}
                    height={237}
                    className={`w-full h-[237px] object-cover object-center bg-no-repeat rounded-[14px]`}
                  />
                  <div className="space-y-2">
                    <p className="flex gap-2 items-center text-xs leading-4 tracking-[1px] text-white/50">
                      <span>
                        {course.type === "article"
                          ? estimateReadingMinutes(course.contents.join(""))
                          : ""}
                        min
                      </span>
                      <span className="size-0.5 bg-white/50" />
                      <span>
                        {new Date(course.createdAt).toLocaleDateString(
                          "en-GB",
                          {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          }
                        )}
                      </span>
                      {/* <span className="size-0.5 bg-white/50" /> */}
                      {/* <span>{course.view} views</span> */}
                    </p>
                    <p
                      className={`${anton.className} text-xl leading-[150%] tracking-[2%] font-normal text-gradient-copy-top-traders max-w-[400px] whitespace-nowrap text-ellipsis overflow-hidden`}
                    >
                      {course.title}
                    </p>

                    <p className="text-sm font-normal leading-[25px] tracking-[1px] text-white/70 max-w-[312px]">
                      {course.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        {(courses?.totalCount || 0) > 6 && (
          <Link
            href={"/learn/courses"}
            className="text-[#EBF0D5] w-[200px] mx-auto text-base font-bold leading-[150%] tracking-[2px] flex items-center justify-center gap-3 border border-white/20 py-4 px-3 rounded-[15px]"
          >
            View all
            <GoArrowRight size={16} className="text-[#EBF0D5]" />
          </Link>
        )}

        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2 lg:w-[70%] space-y-6">
            <h4
              className={`font-normal leading-[150%] tracking-[2%] text-[21px] sm:text-2xl md:text-3xl lg:text-4xl max-w-[615px] text-[#FFFFFFB2] ${anton.className}`}
            >
              Copy Trading 101: What It Is and How It Works (With Examples)
            </h4>

            <button className="text-[#2C2C26] flex items-center justify-center gap-3 font-bold text-base leading-[150%] tracking-[2px] w-[172px] h-12 rounded-[20px] py-3 px-4 bg-[#B39FF0]">
              View
            </button>
          </div>

          <div className="space-y-6 w-full md:w-1/2 lg:w-[30%]">
            <h5
              className={`text-[21px] md:text-[27px] font-normal leading-[150%] tracking-[2px] ${anton.className} text-white`}
            >
              Top Guides
            </h5>
            <p className="flex flex-col gap-5.5 font-semibold text-sm leading-[25px] tracking-[1px] text-[#FFFFFFB2]">
              <Link href={"#"}>
                Why Copy Trading Is Gaining Massive Popularity in 2025
              </Link>

              <Link href={"#"}>
                How to Spot a Reliable Trader Before You Copy
              </Link>

              <Link href={"#"}>
                Why Copy Trading Is Gaining Massive Popularity in 2025
              </Link>

              <Link href={"#"}>
                Crypto Market Volatility: What It Means for Copy Traders
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
