"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ENGAGEMENT_IMAGES = [
  {
    src: "/images/Trekk-006.png",
    alt: "Trekk campus outreach and rider engagement",
  },
  {
    src: "/images/sustainability-06.png",
    alt: "Trekk sustainability workshop and community program",
  },
  {
    src: "/images/sustainability-07.png",
    alt: "University students riding Trekk electric scooters",
  },
  {
    src: "/images/sustainability-08.png",
    alt: "Trekk residential and industrial hub mobility",
  },
  {
    src: "/images/sustainability-09.png",
    alt: "Community environmental awareness event with Trekk",
  },
];

export default function CommunityEngagement() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 border-t border-border/60 py-14">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-5 space-y-5"
        >
          <div className="flex items-center gap-3">
            <span className="font-display text-4xl sm:text-5xl font-black tracking-tighter text-[#12D18E]/30 select-none">
              04
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#12D18E]">
              People &amp; Campuses
            </span>
          </div>

          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Community Engagement
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
            Trekk isn&apos;t just a transportation service; it&apos;s a catalyst for community engagement and empowerment. By partnering with universities, residential estates, and industrial hubs across Africa and beyond, we&apos;re providing accessible and sustainable transportation solutions tailored to the unique needs of each community. Through initiatives such as campus outreach programs, educational workshops, and community events, we&apos;re fostering a culture of environmental awareness and sustainability among our users.
          </p>
        </motion.div>

        <div className="lg:col-span-7">
          <div className="columns-2 sm:columns-3 gap-4 space-y-4">
            {ENGAGEMENT_IMAGES.map((img, idx) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.08 }}
                whileHover={{ scale: 1.03 }}
                className="break-inside-avoid overflow-hidden rounded-md"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={900}
                  className="w-full h-auto rounded-md object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

