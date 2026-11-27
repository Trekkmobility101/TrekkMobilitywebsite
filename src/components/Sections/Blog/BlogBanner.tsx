"use client";

import React from "react";
import { motion } from "framer-motion";
import { Newspaper, Calendar, MapPin } from "lucide-react";

export default function BlogBanner() {
  return (
    <section className="relative overflow-hidden bg-[#0B1813] text-white pt-24 pb-16 lg:pt-28 lg:pb-20">
      {/* Soft Ambient Radial Glows */}
      <div className="pointer-events-none absolute -top-32 right-0 size-[540px] rounded-full bg-[#12D18E]/15 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 -left-24 size-[400px] rounded-full bg-[#2E6BFF]/10 blur-[140px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-3xl space-y-5"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#12D18E] backdrop-blur-md">
            <Newspaper className="size-3.5" />
            <span>Trekk Newsroom &amp; Press</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-white leading-[1.08]">
            Press Releases &amp;{" "}
            <span className="text-[#12D18E]">Mobility Insights</span>
          </h1>

          <p className="text-base sm:text-lg text-[#E3EDE8] leading-relaxed max-w-2xl">
            Official announcements, product showcase coverage, and perspectives
            from Trekk Mobility&apos;s launch and digital press briefing.
          </p>

          {/* <div className="flex flex-wrap items-center gap-5 pt-2 text-xs sm:text-sm text-[#94A89E]">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="size-4 text-[#12D18E]" />
              <span>Official Launch Briefing · 24 November 2026</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-4 text-[#12D18E]" />
              <span>Lagos, Nigeria · Global</span>
            </span>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}

