import { anton } from "@/app/fonts";
import api from "@/utils/axios";
import { estimateReadingMinutes } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

type Blog = {
  id: string;
  title: string;
  content: string;
  description: string;
  thumbnail: string;
  createdAt: string;
  view: number;
  slug: string;
};

type BlogResponse = {
  data: {
    data: Blog[];
    totalCount: number;
    currentPage: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
};

const getPublishedBlogs = async (): Promise<BlogResponse["data"]> => {
  const response: BlogResponse = await api.get("/blogs", {
    params: {
      limit: 3,
      status: "Published",
    },
  });

  return response.data;
};

export default async function Blogs() {
  const { data: blogs, totalCount } = await getPublishedBlogs();

  return (
    <section className="bg-[#1D1B1E] flex px-4 sm:px-[6.4%] justify-center">
      <div className="relative flex flex-col mw my-16 md:my-24 gap-[40px]">
        <h4
          className={`${anton.className} text-2xl xs:text-[27px] sm:text-3xl md:text-4xl lg:text-[52px] text-gradient-copy-top-traders leading-[150%] tracking-[2px]`}
        >
          Blogs
        </h4>

        {!blogs.length && (
          <div className="flex items-center justify-center size-full">
            <p className="text-white/50 text-sm font-normal">
              No blogs uploaded yet.
            </p>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-[40px]">
          {blogs.map((blog, i) => (
            <Link
              href={"/learn/blogs/" + blog.id}
              className="space-y-5"
              key={i}
            >
              <Image
                alt="blog thumbnail"
                src={blog.thumbnail || "/guide-1.png"}
                width={401}
                height={237}
                className={`w-full h-[237px] object-cover object-center bg-no-repeat rounded-[14px]`}
              />
              <div className="space-y-2">
                <p className="flex gap-2 items-center text-xs leading-4 tracking-[1px] text-white/50">
                  <span>{estimateReadingMinutes(blog.content)} min</span>
                  <span className="size-0.5 bg-white/50" />
                  <span>
                    {new Date(blog.createdAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span className="size-0.5 bg-white/50" />
                  <span>{blog.view} views</span>
                </p>
                <p
                  className={`${anton.className} text-xl leading-[150%] tracking-[2%] font-normal text-gradient-copy-top-traders max-w-[400px] whitespace-nowrap text-ellipsis overflow-hidden`}
                >
                  {blog.title}
                </p>
                <p className="text-sm font-normal leading-[25px] tracking-[1px] text-white/70 max-w-[312px] whitespace-nowrap text-ellipsis overflow-hidden">
                  {blog.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {totalCount > 3 && (
          <Link
            href={"/learn/blogs"}
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
