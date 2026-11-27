"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
} from "lucide-react";
import { BLOG_POSTS } from "@src/constants/blog";

export default function BlogGrid() {
  const [selectedTopic, setSelectedTopic] = useState<string>("All");

  const topics = useMemo(() => {
    const unique = Array.from(new Set(BLOG_POSTS.map((p) => p.topic)));
    return ["All", ...unique];
  }, []);

  const filteredPosts = useMemo(() => {
    if (selectedTopic === "All") return BLOG_POSTS;
    return BLOG_POSTS.filter((p) => p.topic === selectedTopic);
  }, [selectedTopic]);

  const [featuredPost, ...remainingPosts] = filteredPosts;

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
      {/* Topic Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/70 pb-6">
        <div className="flex flex-wrap items-center gap-2">
          {topics.map((topic) => {
            const active = selectedTopic === topic;
            return (
              <button
                key={topic}
                type="button"
                onClick={() => setSelectedTopic(topic)}
                className={`rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  active
                    ? "bg-[#0B1813] text-white shadow-sm"
                    : "border border-border bg-white text-muted-foreground hover:border-[#12D18E] hover:text-foreground"
                }`}
              >
                {topic === "All" ? "All Articles" : topic}
              </button>
            );
          })}
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Showing {filteredPosts.length}{" "}
          {filteredPosts.length === 1 ? "article" : "articles"}
        </p>
      </div>

      {/* Featured Lead Release */}
      {featuredPost && (
        <motion.article
          key={featuredPost.slug}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="group overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition-all duration-300 hover:border-[#12D18E]/60 hover:shadow-xl"
        >
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="grid grid-cols-1 lg:grid-cols-12 items-stretch"
          >
            <div className="relative lg:col-span-6 min-h-[260px] sm:min-h-[340px] overflow-hidden bg-[#0B1813]">
              <Image
                src={featuredPost.coverImage}
                alt={featuredPost.coverAlt}
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-muted-foreground">
                  <span className="rounded-full bg-[#12D18E]/10 px-3 py-1 font-semibold text-[#0B875B]">
                    {featuredPost.topic}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="size-3.5 text-[#12D18E]" />
                    {featuredPost.dateline}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="size-3.5 text-[#12D18E]" />
                    {featuredPost.publishedAt}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="size-3.5 text-[#12D18E]" />
                    {featuredPost.readingTime}
                  </span>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-foreground leading-snug tracking-tight group-hover:text-[#0B875B] transition-colors">
                  {featuredPost.title}
                </h2>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-border/60">
                <span className="inline-flex items-center gap-2 text-sm font-bold text-[#0B1813] group-hover:text-[#0B875B] transition-colors">
                  <span>Read Article</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="text-xs text-muted-foreground">
                  Featured Story
                </span>
              </div>
            </div>
          </Link>
        </motion.article>
      )}

      {/* Remaining Press Releases Grid */}
      {remainingPosts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {remainingPosts.map((post, idx) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: idx * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#12D18E]/60 hover:shadow-xl"
            >
              <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0B1813]">
                  <Image
                    src={post.coverImage}
                    alt={post.coverAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                </div>

                <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2.5 text-xs text-muted-foreground">
                      <span className="rounded-full bg-[#12D18E]/10 px-2.5 py-0.5 font-semibold text-[#0B875B]">
                        {post.topic}
                      </span>
                      <span>·</span>
                      <span>{post.publishedAt}</span>
                      <span>·</span>
                      <span>{post.readingTime}</span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-extrabold text-foreground leading-snug tracking-tight group-hover:text-[#0B875B] transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-[#0B1813] group-hover:text-[#0B875B] transition-colors">
                      <span>Read Article</span>
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">
                      {post.dateline}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      )}
    </section>
  );
}

