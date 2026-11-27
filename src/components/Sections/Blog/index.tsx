import React from "react";
import BlogBanner from "./BlogBanner";
import BlogGrid from "./BlogGrid";

export default function BlogSections() {
  return (
    <div className="pb-16">
      <BlogBanner />
      <BlogGrid />
    </div>
  );
}

