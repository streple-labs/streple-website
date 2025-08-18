import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQS",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
