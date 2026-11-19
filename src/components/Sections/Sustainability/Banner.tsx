"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";
import Button from "@src/components/ui/button";

export default function SustainabilityBanner() {
  return (
    <section className="relative overflow-hidden bg-[#0B1813] text-white pt-24 pb-20 lg:pt-28 lg:pb-24">
      {/* Soft Ambient Radial Glows */}
      <div className="pointer-events-none absolute -top-32 right-0 size-[560px] rounded-full bg-[#12D18E]/15 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 -left-24 size-[420px] rounded-full bg-[#2E6BFF]/10 blur-[140px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#12D18E] backdrop-blur-md">
              <Leaf className="size-4" />
              <span>Environmental Stewardship</span>
            </div>

            <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] leading-[1.08]">
              Sustainability at Trekk
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-[#E3EDE8] sm:text-lg">
              At Trekk, we are committed to not only revolutionizing urban mobility but also empowering businesses, campuses, and municipalities to champion environmental stewardship across Nigeria, Africa, and beyond. As a premier B2B micromobility technology platform, we help fleet operators cut carbon emissions, alleviate congestion, and build cleaner, greener communities.
            </p>

            <div className="pt-2">
              <a href="#eco-transportation">
                <Button
                  size="lg"
                  className="bg-[#12D18E] text-[#0B1220] hover:bg-[#0fb87c] font-bold gap-2 rounded-full px-7 shadow-xl shadow-[#12D18E]/20"
                >
                  <span>Explore Our Impact</span>
                  <ArrowRight className="size-4" />
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-6 flex items-center justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.02 }}
              className="w-full max-w-[560px]"
            >
              <Image
                src="/images/sustainability-01.png"
                alt="Sustainability at Trekk Mobility"
                width={1200}
                height={900}
                className="w-full h-auto rounded-md object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

