"use client";

import { anton } from "@/app/fonts";
import api from "@/utils/axios";
import { estimateReadingMinutes, formatDate } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { useQuery } from "@tanstack/react-query";
import ArticleSkeleton from "@/components/article-skeleton/ArticleSkeleton";

/**
 * Gets the next recommended courses from an array, wrapping around if necessary.
 *
 * @param {Course[]} allCourses - The complete array of course objects.
 * @param {string} currentCourseId - The unique ID of the course the user just finished.
 * @returns {Course[]} A new array containing up to 3 recommended courses.
 */
function getNextThreeCourses(
  allCourses: Course[],
  currentCourseId: string
): Course[] {
  // Edge Case 1: If the initial array is empty or has only one item, there's nothing to recommend.
  if (!allCourses || allCourses.length <= 1) {
    return [];
  }

  // Find the index of the course the user just read.
  const currentIndex = allCourses.findIndex(
    (course) => course.id === currentCourseId
  );

  // If the current course wasn't found, return the first 3 from the main list as a fallback.
  if (currentIndex === -1) {
    return allCourses.slice(0, 3);
  }

  // Edge Case 2: If there are 3 or fewer total courses, the recommendation is simply all the *other* courses.
  if (allCourses.length <= 3) {
    return allCourses.filter((course) => course.id !== currentCourseId);
  }

  // Core Logic: Create an ordered list of potential recommendations.
  const itemsAfter = allCourses.slice(currentIndex + 1);
  const itemsBefore = allCourses.slice(0, currentIndex);

  // The final ordered list wraps around by combining items after, then items before.
  const potentialRecommendations = [...itemsAfter, ...itemsBefore];

  // Return the Next Three Courses.
  return potentialRecommendations.slice(0, 3);
}

type NextReadsProps = {
  currentCourseId: string;
};

export default function NextReads({ currentCourseId }: NextReadsProps) {
  const { data: allCourses, isPending: loading } = useQuery<CoursesResponse>({
    queryKey: ["courses-data"],
    queryFn: async () =>
      (
        await api.get("/learnings", {
          params: { status: "Published", limit: 4 },
        })
      ).data,
  });

  const recommendedCourses = allCourses
    ? getNextThreeCourses(allCourses.data, currentCourseId)
    : [];

  if (loading) return <ArticleSkeleton />;

  if (recommendedCourses.length === 0) return null;

  return (
    <div className="space-y-6 md:sapce-y-8 w-full">
      <h5
        className={`${anton.className} font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[1px]`}
      >
        Next reads
      </h5>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full">
        {recommendedCourses.map((course, i) => (
          <Link key={i} href={"/learn/" + course.id} className="space-y-5">
            <Image
              alt="course thumbnail"
              src={course.thumbnail || `/images/guide-${i + 1}.png`}
              width={401}
              height={237}
              className={`w-full h-[237px] object-cover object-center bg-no-repeat rounded-[14px]`}
            />
            <div className="space-y-2">
              <p className="flex gap-2 items-center text-xs leading-4 tracking-[1px] text-white/50">
                <span>
                  {course.type === "article"
                    ? estimateReadingMinutes(course.contents.join(""))
                    : ""}{" "}
                  min
                </span>
                <span className="size-0.5 bg-white/50" />
                <span>{formatDate(course.createdAt)}</span>
              </p>

              <p
                className={`${anton.className} text-xl leading-[150%] tracking-[2%] font-normal text-gradient-copy-top-traders`}
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

      <Link
        href={"/learn"}
        className="text-[#EBF0D5] w-[200px] mx-auto text-base font-bold leading-[150%] tracking-[2px] flex items-center justify-center gap-3 border border-white/20 py-4 px-3 rounded-[15px]"
      >
        View all
        <GoArrowRight size={16} className="text-[#EBF0D5]" />
      </Link>
    </div>
  );
}
