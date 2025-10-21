import { anton } from "@/app/fonts";
import Navbar from "@/components/navbar/Navbar";
import api from "@/utils/axios";
import { estimateReadingMinutes } from "@/utils/utils";
import { Metadata, ResolvingMetadata } from "next";
import { unstable_cache } from "next/cache";
import Image from "next/image";
import Blogs from "../../../components/blogs/Blogs";

type Blog = {
  id: string;
  title: string;
  content: string;
  thumbnail: string;
  createdAt: string;
  view: number;
  slug: string;
  tags: string[];
};

type BlogResponse = {
  data: {
    data: Blog;
  };
};

const getBlog = unstable_cache(
  async (blog_slug: string): Promise<Blog> => {
    const response: BlogResponse = await api.get(`/blog?slug=${blog_slug}`);
    return response.data.data;
  },
  ["blog"],
  {
    revalidate: 60,
    tags: ["blog"],
  }
);

export async function generateMetadata(
  {
    params,
  }: {
    params: Promise<{ blog_slug: string }>;
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { blog_slug } = await params;
  const blog = await getBlog(blog_slug);

  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: blog.title,
    description: blog.content.slice(0, 150).replace(/<[^>]+>/g, ""),
    openGraph: {
      title: blog.title,
      description: blog.content.slice(0, 150).replace(/<[^>]+>/g, ""),
      images: [
        {
          url: blog.thumbnail,
          alt: blog.title,
          width: 606,
          height: 459,
          type: "image/png",
        },
      ],
      type: "article",
      siteName: blog.title,
      url: "https://streple.com/blog/" + blog.slug,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.content.slice(0, 150).replace(/<[^>]+>/g, ""),
      images: [
        {
          url: blog.thumbnail,
          alt: blog.title,
          width: 606,
          height: 459,
          type: "image/png",
        },
        // ...previousImages,
      ],
    },
    keywords: [...blog.tags, ...((await parent).keywords || [])],
  };
}

export default async function page({
  params,
}: {
  params: Promise<{ blog_slug: string }>;
}) {
  const { blog_slug } = await params;
  const blog = await getBlog(blog_slug);

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
                {new Date(blog.createdAt).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>
              <h1
                className={`justify-center items-center font-normal leading-[150%] tracking-[2%] text-2xl xs:text-[27px] sm:text-3xl md:text-5xl lg:text-[52px] lg:max-w-[862px] text-gradient-copy-top-traders ${anton.className}`}
              >
                {blog.title}
              </h1>
              <div className="flex flex-wrap justify-between items-center gap-4">
                <p className="flex gap-1.5 items-center font-semibold text-sm leading-[150%] tracking-[2px]">
                  <span>{estimateReadingMinutes(blog.content)} min</span>
                  {/* <span>|</span>
                  <span>{blog.view} VIEWS</span> */}
                </p>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-[21px] border-[#FDF9FF99] border py-2 px-1 min-w-[100px] flex items-center justify-center text-xs leading-4 tracking-[1px] text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <Image
              src={blog.thumbnail || "/images/article-cover-img.webp"}
              alt="blog cover"
              width={862}
              height={521}
              className="aspect-video w-full max-h-[521px] rounded-[10px] object-cover object-center bg-no-repeat"
            />

            <div
              className="w-full article-content space-y-5"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </div>
      </section>
      <Blogs title="Next up" />
    </main>
  );
}
