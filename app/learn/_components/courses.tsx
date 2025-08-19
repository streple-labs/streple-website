"use client";

import { anton } from "@/app/fonts";
import api from "@/utils/axios";
import { estimateReadingMinutes } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import ArticleSkeleton from "./skeleton";
import { useState } from "react";

type Course = {
  id: string;
  title: string;
  description: string;
  contents: string[];
  document: string | null;
  thumbnail: string;
  level: "Beginner" | "Advanced";
  type: "pdf" | "article";
  createdAt: string;
};

type CoursesResponse = {
  data: Course[];
  currentPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  totalCount: number;
  totalPages: number;
};

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
      <div className="relative flex flex-col mw my-16 gap-[40px]">
        <h3
          className={`text-gradient-copy-top-traders ${anton.className} text-2xl lg:text-5xl leading-[150%] tracking-[2px] font-normal`}
        >
          Learning guides
        </h3>

        <div className="flex flex-row gap-20 items-center">
          <button
            onClick={handleShowAll}
            className="flex flex-col text-center items-center"
          >
            <span className="text-sm lg:text-xl text-white font-normal mb-3.5">All</span>
            {showAll && <span className="w-21 border-2 border-[#F4E90E] rounded-md transition-all duration-500"></span>}
          </button>
          <button
            onClick={handleShowArticles}
            className="flex flex-col text-center items-center"
          >
            <span className="text-sm lg:text-xl text-white font-normal mb-3.5">Articles</span>
            {showArticles && <span className="w-21 border-2 border-[#F4E90E] rounded-md transition-all duration-500"></span>}
          </button>
          <button
            onClick={handleShowVideos}
            className="flex flex-col text-center items-center"
          >
            <span className="text-sm lg:text-xl text-white font-normal mb-3.5">Videos</span>
            {showVideos && <span className="w-21 border-2 border-[#F4E90E] rounded-md transition-all duration-500"></span>}
          </button>
        </div>

        {loading ? (
          <ArticleSkeleton length={6} />
        ) : (
          <>
            {!courses?.data.length && (
              <div className="flex items-center justify-center size-full">
                <p className="text-white/50 text-sm font-normal">
                  No courses uploaded yet.
                </p>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[40px] w-full">
              {courses?.data.map((course, i) => (
                <Link
                  href={"/learn/courses/" + course.id}
                  className="space-y-5"
                  key={i}
                >
                  <Image
                    alt="course thumbnail"
                    src={course.thumbnail || "/guide-1.png"}
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

        {/* Copy Trading 101 */}
        {/* TODO: check if mt-10 */}
        <div className="flex flex-row justify-between mt-10">
          <div className="flex flex-col gap-6">
            <h4 className={`${anton.className} font-normal text-4xl leading-[150%] tracking-[2px] text-[#FFFFFFB2]`}>
              Copy Trading 101: What It Is and How <br />
              It Works (With Examples)</h4>
            <button className="bg-[#B39FF0] px-16 py-3 rounded-[20px] w-max text-[#2C2C26] font-bold text-base">View</button>
          </div>

          <div className="flex flex-col gap-6 max-w-80">
            <h5 className={`${anton.className} font-normal text-[27px] leading-[150%] tracking-[2px] text-white`}>
              Top guides
            </h5>

            <div className="flex flex-col gap-5.5 font-semibold text-sm leading-[25px] tracking-[1px] text-[#FFFFFFB2]">
              <span>Why Copy Trading Is Gaining Massive Popularity in 2025</span>
              <span>How to Spot a Reliable Trader Before You Copy</span>
              <span>Why Copy Trading Is Gaining Massive Popularity in 2025</span>
              <span>Crypto Market Volatility: What It Means for Copy Traders</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
