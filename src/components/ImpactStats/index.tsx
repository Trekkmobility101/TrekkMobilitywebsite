"use client";

import React from "react";
import { motion } from "framer-motion";

const IMPACT_METRICS: {
  value: string;
  label: string;
  sublabel: string;
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
    sublabel: "Based on operating experience",
  },
  {
    value: "500,000+",
    label: "Community Population",
    sublabel: "Across communities under signed agreements",
  },
];

export default function ImpactStats() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="border-y border-border/60 py-12 lg:py-16 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl space-y-2.5"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#12D18E]">
            <span className="size-2 rounded-full bg-[#12D18E] animate-pulse" />
            <span>Global Traction</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Our Impact in Numbers
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Built on real operating experience, community partnerships, and global expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
          {IMPACT_METRICS.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: idx * 0.08 }}
              className="group relative rounded-xl border border-border/60 bg-card/60 p-6 flex flex-col justify-between gap-4 transition-colors duration-200 hover:border-[#12D18E]/40"
            >
              <div className="space-y-3">
                <div className="h-0.5 w-8 rounded-full bg-[#12D18E]/70 transition-all duration-300 group-hover:w-12 group-hover:bg-[#12D18E]" />
                <p className="font-display text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight tabular-nums">
                  {metric.value}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-foreground">
                  {metric.label}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {metric.sublabel}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

