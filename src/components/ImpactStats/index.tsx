"use client";

import React from "react";
import { motion } from "framer-motion";

const IMPACT_METRICS: {
  value: string;
  label: string;
  sublabel?: string;
}[] = [
  {
    value: "70,000+",
    label: "Rides Delivered",
    sublabel: "Through Trekk Scooters",
  },
  {
    value: "6 Countries",
    label: "Founder Presence",
    sublabel: "Across 4 continents",
  },
  {
    value: "17/day",
    label: "Average Trips per Vehicle",
    sublabel: "",
  },
  {
    value: "500,000+",
    label: "Community Population",
    sublabel: "",
  },
];

export default function ImpactStats() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="relative overflow-hidden rounded-3xl bg-[#0B1813] text-white border border-white/10 p-8 sm:p-12 lg:p-14 shadow-2xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl space-y-2.5"
        >
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#12D18E]">
            Global Traction
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Impact in Numbers
          </h2>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed">
            Built on real operating experience, community partnerships, and global expertise.
          </p>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8 sm:my-10" />

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 sm:gap-x-10 lg:gap-x-12 gap-y-8 sm:gap-y-10">
          {IMPACT_METRICS.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: idx * 0.08 }}
              className="flex flex-col"
            >
              <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#12D18E] tracking-tight tabular-nums">
                {metric.value}
              </span>
              <span className="font-display text-base sm:text-lg lg:text-xl font-bold text-white mt-2 sm:mt-3 leading-snug">
                {metric.label}
              </span>
              {metric.sublabel ? (
                <span className="text-xs sm:text-sm text-white/60 leading-relaxed mt-1 sm:mt-1.5">
                  {metric.sublabel}
                </span>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

