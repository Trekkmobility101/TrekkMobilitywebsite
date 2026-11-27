import type { Metadata } from "next";
import BlogSections from "@src/components/Sections/Blog";

export const metadata: Metadata = {
  title: "Newsroom & Press Releases | Trekk Mobility",
  description:
    "Official press releases, launch announcements, and shared mobility insights from Trekk Mobility.",
};

export default function BlogPage() {
  return <BlogSections />;
}

