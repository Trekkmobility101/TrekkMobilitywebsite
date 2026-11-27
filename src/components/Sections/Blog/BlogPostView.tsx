"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  Link2,
  Mail,
  MapPin,
  Phone,
  Printer,
  Quote,
} from "lucide-react";
import type { BlogPost } from "@src/constants/blog";
import Button from "@src/components/ui/button";

type BlogPostViewProps = {
  post: BlogPost;
  relatedPosts: BlogPost[];
};

export default function BlogPostView({
  post,
  relatedPosts,
}: BlogPostViewProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback ignored if clipboard is unavailable
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  // Insert body image roughly mid-article for balanced editorial pacing
  const midPointIndex = Math.max(3, Math.floor(post.blocks.length * 0.45));

  return (
    <article className="pb-20">
      {/* Dark Editorial Press Header */}
      <header className="relative overflow-hidden bg-[#0B1813] text-white pt-24 pb-16 lg:pt-28 lg:pb-24">
        <div className="pointer-events-none absolute -top-32 right-0 size-[540px] rounded-full bg-[#12D18E]/15 blur-[150px]" />
        <div className="pointer-events-none absolute bottom-0 -left-24 size-[380px] rounded-full bg-[#2E6BFF]/10 blur-[140px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#C8DBD2] hover:text-[#12D18E] transition-colors"
            >
              <ArrowLeft className="size-4" />
              <span>Back to Newsroom</span>
            </Link>

            <div className="flex items-center gap-2 print:hidden">
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white hover:border-[#12D18E]/60 hover:text-[#12D18E] transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="size-3.5 text-[#12D18E]" />
                    <span>Link Copied</span>
                  </>
                ) : (
                  <>
                    <Link2 className="size-3.5" />
                    <span>Share Release</span>
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white hover:border-[#12D18E]/60 hover:text-[#12D18E] transition-colors cursor-pointer"
              >
                <Printer className="size-3.5" />
                <span>Print</span>
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-4xl space-y-5"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-[#12D18E] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#0B1220]">
                {post.category}
              </span>
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold text-[#E3EDE8]">
                {post.topic}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold tracking-tight text-white leading-[1.12]">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#94A89E] pt-1">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-4 text-[#12D18E]" />
                <span>{post.dateline}</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="size-4 text-[#12D18E]" />
                <span>{post.publishedAt}</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-4 text-[#12D18E]" />
                <span>{post.readingTime}</span>
              </span>
            </div>
          </motion.div>

          {/* Featured Cover Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
            className="relative aspect-[16/9] max-h-[520px] w-full overflow-hidden rounded-3xl border border-white/15 bg-[#07110D] shadow-2xl"
          >
            <Image
              src={post.coverImage}
              alt={post.coverAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
          </motion.div>
        </div>
      </header>

      {/* Main 2-Column Editorial Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Article Body */}
          <div className="lg:col-span-8 space-y-6">
            {post.blocks.map((block, index) => {
              const showBodyImage = index === midPointIndex;

              return (
                <React.Fragment key={index}>
                  {showBodyImage && (
                    <figure className="my-10 overflow-hidden rounded-2xl border border-border bg-white shadow-md">
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                        <Image
                          src={post.bodyImage}
                          alt={post.bodyImageAlt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 780px"
                        />
                      </div>
                      <figcaption className="px-5 py-3.5 text-xs sm:text-sm text-muted-foreground border-t border-border/60 bg-[#FAFDFB]">
                        {post.bodyImageCaption}
                      </figcaption>
                    </figure>
                  )}

                  {block.type === "quote" ? (
                    <blockquote className="my-8 rounded-r-2xl border-l-4 border-[#12D18E] bg-[#F3FBF7] px-6 py-5 sm:px-8 sm:py-6">
                      <Quote className="size-5 text-[#12D18E] mb-2" />
                      <p className="font-display text-lg sm:text-xl font-bold text-[#0B1813] leading-relaxed">
                        &ldquo;{block.text}&rdquo;
                      </p>
                      {(block.speaker || block.role) && (
                        <footer className="mt-3 text-xs sm:text-sm font-medium text-muted-foreground">
                          <span className="font-bold text-[#0B1813]">
                            {block.speaker}
                          </span>
                          {block.role ? ` — ${block.role}` : ""}
                        </footer>
                      )}
                    </blockquote>
                  ) : (
                    <p
                      className={`leading-[1.85] text-slate-700 ${
                        block.isLead
                          ? "text-lg sm:text-[19px] font-medium text-slate-900"
                          : "text-base sm:text-[17px]"
                      }`}
                    >
                      {block.isLead && block.text.includes(":") ? (
                        <>
                          <span className="font-extrabold text-[#0B1813]">
                            {block.text.slice(0, block.text.indexOf(":") + 1)}
                          </span>
                          {block.text.slice(block.text.indexOf(":") + 1)}
                        </>
                      ) : (
                        block.text
                      )}
                    </p>
                  )}
                </React.Fragment>
              );
            })}

            {/* About Trekk Mobility Boilerplate */}
            <div className="mt-12 rounded-2xl border border-[#12D18E]/25 bg-[#F4FBF7] p-6 sm:p-8 space-y-3">
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#0B875B]">
                About Trekk Mobility
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {post.aboutBoilerplate}
              </p>
            </div>
          </div>

          {/* Sticky Press Sidebar */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* Key Highlights */}
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm space-y-4">
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#0B875B]">
                At a Glance
              </p>
              <ul className="space-y-3">
                {post.keyHighlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed"
                  >
                    <CheckCircle2 className="size-4 text-[#12D18E] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Media Contact */}
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm space-y-4">
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#0B875B]">
                Media Contact
              </p>
              <div className="space-y-1">
                <p className="font-display text-base font-bold text-foreground">
                  {post.mediaContact.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {post.mediaContact.role}
                </p>
              </div>
              <div className="space-y-2.5 pt-1 text-sm">
                <a
                  href={`tel:${post.mediaContact.telephone}`}
                  className="flex items-center gap-2 text-slate-700 hover:text-[#0B875B] transition-colors"
                >
                  <Phone className="size-4 text-[#12D18E] shrink-0" />
                  <span>{post.mediaContact.telephone}</span>
                </a>
                <a
                  href={`mailto:${post.mediaContact.email}`}
                  className="flex items-center gap-2 text-slate-700 hover:text-[#0B875B] transition-colors break-all"
                >
                  <Mail className="size-4 text-[#12D18E] shrink-0" />
                  <span>{post.mediaContact.email}</span>
                </a>
                <a
                  href={`mailto:${post.mediaContact.generalEmail}`}
                  className="flex items-center gap-2 text-slate-700 hover:text-[#0B875B] transition-colors"
                >
                  <Mail className="size-4 text-[#12D18E] shrink-0" />
                  <span>General: {post.mediaContact.generalEmail}</span>
                </a>
              </div>
            </div>

            {/* Founding Partner CTA */}
            <div className="relative overflow-hidden rounded-2xl bg-[#0B1813] text-white p-6 shadow-xl border border-white/10 space-y-4">
              <div className="pointer-events-none absolute -top-12 -right-12 size-36 rounded-full bg-[#12D18E]/20 blur-2xl" />
              <div className="relative z-10 space-y-3">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#12D18E]">
                  Founding Partner Programme
                </p>
                <h3 className="font-display text-xl font-extrabold text-white leading-snug">
                  Ready to launch your own shared mobility fleet?
                </h3>
                <p className="text-xs sm:text-sm text-[#C8DBD2] leading-relaxed">
                  Join our first 10 founding partners with a 12-month fee lock,
                  priority support, and a tailored fleet strategy session.
                </p>
                <div className="pt-1">
                  <Link href="/contact">
                    <Button className="w-full bg-[#12D18E] text-[#0B1220] hover:bg-[#0fb87c] font-bold gap-2 rounded-full">
                      <span>Book a Discovery Call</span>
                      <ArrowRight className="size-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* More Press Releases */}
        {relatedPosts.length > 0 && (
          <section className="mt-20 pt-12 border-t border-border/70 space-y-8 print:hidden">
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-xs font-bold uppercase tracking-widest text-[#12D18E]">
                  More From Newsroom
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                  Related Press Releases
                </h2>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B875B] hover:underline"
              >
                <span>View all</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#12D18E]/60 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0B1813]">
                    <Image
                      src={related.coverImage}
                      alt={related.coverAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-[#12D18E] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0B1220]">
                      {related.category}
                    </span>
                  </div>
                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-muted-foreground">
                        {related.topic} · {related.publishedAt}
                      </p>
                      <h3 className="font-display text-lg sm:text-xl font-extrabold text-foreground leading-snug group-hover:text-[#0B875B] transition-colors">
                        {related.title}
                      </h3>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B1813] group-hover:text-[#0B875B] pt-2">
                      <span>Read Release</span>
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}

