"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Users } from "lucide-react";
import Button from "@src/components/ui/button";

export default function CommunityBanner() {
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
              <Users className="size-4" />
              <span>Partner &amp; Campus Network</span>
            </div>

            <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] leading-[1.08]">
              Our Community
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-[#E3EDE8] sm:text-lg">
              Partner with the Trekk Ecosystem: Where Fleet Operators, Universities, and Enterprises Build Sustainable Mobility. See how our B2B partners are transforming campus and urban transit across Africa and beyond.
            </p>

            {/* Operator & Institutional Network */}
            <div className="border-t border-white/10 pt-5 space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#12D18E]">
                <MapPin className="size-3.5" />
                <span>Expanding Operator Footprint</span>
              </div>
              <p className="text-sm sm:text-base text-[#94A89E] leading-relaxed">
                Our network of institutional deployments and local fleet partners grows every quarter.
              </p>
            </div>

            <div className="pt-2">
              <a href="#campuses">
                <Button
                  size="lg"
                  className="bg-[#12D18E] text-[#0B1220] hover:bg-[#0fb87c] font-bold gap-2 rounded-full px-7 shadow-xl shadow-[#12D18E]/20"
                >
                  <span>Explore Campus Deployments</span>
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
                src="/images/com-13.png"
                alt="Trekk Mobility B2B campus and operator deployments"
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
