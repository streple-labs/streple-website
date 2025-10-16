import { anton } from "@/app/fonts";
import NextReads from "@/components/courses/NextReads";
import Navbar from "@/components/navbar/Navbar";
import api from "@/utils/axios";
import { estimateReadingMinutes } from "@/utils/utils";
import { Metadata, ResolvingMetadata } from "next";
import { unstable_cache } from "next/cache";
import Image from "next/image";

type CoursesResponse = {
  data: {
    data: Course;
  };
};

const getCourse = unstable_cache(
  async (course_slug: string): Promise<Course> => {
    const response: CoursesResponse = await api.get(
      `/learning?slug=${course_slug}`
    );
    return response.data.data;
  },
  ["course"],
  {
    revalidate: 60,
    tags: ["course"],
  }
);

export async function generateMetadata(
  {
    params,
  }: {
    params: Promise<{ course_slug: string }>;
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { course_slug } = await params;
  const course = await getCourse(course_slug);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: course.title,
    description: course.description.slice(0, 150),
    openGraph: {
      title: course.title,
      description: course.description.slice(0, 150),
      images: [course.thumbnail, ...previousImages],
      type: "article",
      siteName: course.title,
      url: "https://streple.com/learn/" + course.slug,
    },
    twitter: {
      card: "summary_large_image",
      title: course.title,
      description: course.description.slice(0, 150),
      images: [course.thumbnail, ...previousImages],
    },
  };
}

export default async function page({
  params,
}: {
  params: Promise<{ course_slug: string }>;
}) {
  const { course_slug } = await params;
  const course = await getCourse(course_slug);

  return (
    <main>
      <section className="flex flex-col px-4 sm:px-[6.4%] items-center">
        <div className="mw relative overflow-hidden">
          <Navbar />
        </div>

        <div className="space-y-16 my-16">
          <div className="w-full space-y-16">
            <div className="w-full space-y-10">
              <p className="font-semibold text-sm leading-[150%] tracking-[2px] uppercase">
                {new Date(course.createdAt).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>
              <h1
                className={`justify-center items-center font-normal leading-[150%] tracking-[2%] text-2xl xs:text-[27px] sm:text-3xl md:text-5xl lg:text-[52px] lg:max-w-[862px] text-gradient-copy-top-traders ${anton.className}`}
              >
                {course.title}
              </h1>
              <div className="flex flex-wrap justify-between items-center gap-4">
                <p className="flex gap-1.5 items-center font-semibold text-sm leading-[150%] tracking-[2px]">
                  <span>
                    {course.contents &&
                      estimateReadingMinutes(course.contents || "")}{" "}
                    min
                  </span>
                </p>
                <div className="flex gap-2">
                  <span className="rounded-[21px] border-[#FDF9FF99] border py-2 px-1 min-w-[90px] flex items-center justify-center text-xs leading-4 tracking-[1px] text-white/50">
                    {course.level}
                  </span>
                </div>
              </div>
            </div>
            <Image
              src={course.thumbnail || "/images/article-cover-img.webp"}
              alt="course cover"
              width={862}
              height={521}
              className="aspect-video w-full max-h-[521px] rounded-[10px] object-cover object-center bg-no-repeat"
            />

            <div
              className="w-full article-content"
              dangerouslySetInnerHTML={{ __html: course.contents || "" }}
            />
          </div>

          <NextReads slug={course_slug} />
        </div>
      </section>
    </main>
  );
}
