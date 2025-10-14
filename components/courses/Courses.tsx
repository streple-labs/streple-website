"use client";

import { anton } from "@/app/fonts";
import ArticleSkeleton from "@/components/article-skeleton/ArticleSkeleton";
import api from "@/utils/axios";
import { estimateReadingMinutes, formatDate } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GoArrowRight } from "react-icons/go";

export default function Courses() {
  const { data: courses, isPending: loading } = useQuery<CoursesResponse>({
    queryKey: ["courses-data"],
    queryFn: async () =>
      (
        await api.get("/learnings", {
          params: { status: "Published" },
        })
      ).data,
  });

  console.log(courses);

  const [articleType, setArticleType] = useState<"all" | "articles" | "videos">(
    "all"
  );

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
            onClick={() => {
              setArticleType("all");
            }}
            className={`text-center min-w-10 md:min-w-20 pb-2 cursor-pointer text-base md:text-[21px] leading-6 md:leading-8 tracking-[1px] font-normal ${
              articleType === "all" && "border-b-[2.5px] border-b-[#F4E90E]"
            }`}
          >
            All
          </span>
          <span
            onClick={() => {
              setArticleType("articles");
            }}
            className={`text-center min-w-10 md:min-w-20 pb-2 cursor-pointer text-base md:text-[21px] leading-6 md:leading-8 tracking-[1px] font-normal ${
              articleType === "articles" &&
              "border-b-[2.5px] border-b-[#F4E90E]"
            }`}
          >
            Articles
          </span>
          <span
            onClick={() => {
              setArticleType("videos");
            }}
            className={`text-center min-w-10 md:min-w-20 pb-2 cursor-pointer text-base md:text-[21px] leading-6 md:leading-8 tracking-[1px] font-normal ${
              articleType === "videos" && "border-b-[2.5px] border-b-[#F4E90E]"
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
                  href={"/learn/" + course.slug}
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
                      <span>{formatDate(course.createdAt)}</span>
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
            href={"/learn"}
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
            {/* TODO: A better logic for selecting top guides */}
            <p className="flex flex-col gap-5.5 font-semibold text-sm leading-[25px] tracking-[1px] text-[#FFFFFFB2]">
              {courses?.data
                .sort(
                  (a, b) =>
                    new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime()
                )
                .slice(0, 4)
                .map((course, i) => (
                  <Link key={i} href={"/learn/" + course.slug}>
                    {course.title}
                  </Link>
                ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
