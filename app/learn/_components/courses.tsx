import { anton } from "@/app/fonts";
import api from "@/utils/axios";
import { estimateReadingMinutes } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

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
  data: {
    data: Course[];
    currentPage: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    totalCount: number;
    totalPages: number;
  };
};

const getPublishedCourses = async (): Promise<CoursesResponse["data"]> => {
  const response: CoursesResponse = await api.get(
    "/learnings?page=1&limit=6&sort=updatedAt&status=Published"
  );

  return response.data;
};

export default async function Courses() {
  const { data: courses, totalCount } = await getPublishedCourses();

  return (
    <section className="bg-[#1D1B1E] flex px-4 sm:px-[6.4%] justify-center relative">
      <div className="relative flex flex-col mw my-16 gap-[40px]">
        <h4
          className={`text-gradient-copy-top-traders ${anton.className} text-2xl lg:text-4xl leading-[150%] tracking-[2px]  font-normal`}
        >
          Beginner guides
        </h4>

        {!courses.length && (
          <div className="flex items-center justify-center size-full">
            <p className="text-white/50 text-sm font-normal">
              No courses uploaded yet.
            </p>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[40px] w-full">
          {courses.map((course, i) => (
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
                    {new Date(course.createdAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
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

        {totalCount > 6 && (
          <Link
            href={"/learn/courses"}
            className="text-[#EBF0D5] w-[200px] mx-auto text-base font-bold leading-[150%] tracking-[2px] flex items-center justify-center gap-3 border border-white/20 py-4 px-3 rounded-[15px]"
          >
            View all
            <GoArrowRight size={16} className="text-[#EBF0D5]" />
          </Link>
        )}
      </div>
    </section>
  );
}
