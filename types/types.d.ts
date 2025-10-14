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
  data: Blog[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

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
  slug: string;
};

type CoursesResponse = {
  data: Course[];
  currentPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  totalCount: number;
  totalPages: number;
};
