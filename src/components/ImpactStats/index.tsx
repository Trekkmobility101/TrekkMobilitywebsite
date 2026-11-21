"use client";

import React from "react";
import { motion } from "framer-motion";

const IMPACT_METRICS: {
  value: string;
  label: string;
  sublabel?: string;
}[] = [
  {
    value: "500+",
    label: "Vehicles Supported",
  },
  {
    value: "10",
    label: "Countries",
    sublabel: "Across 4 continents",
  },
  {
    value: "17/day",
    label: "Average Trips per Vehicle",
  },
  {
    value: "8,500/day",
    label: "Fleet Trip Capacity",
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
            Powering smarter fleet operations and mobility businesses across borders.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {IMPACT_METRICS.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: idx * 0.08 }}
              className="border-l-2 border-[#12D18E]/40 pl-5 space-y-1.5"
            >
              <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
                {metric.value}
              </p>
              <div className="space-y-0.5">
                <p className="text-xs sm:text-sm font-medium text-muted-foreground">
                  {metric.label}
                </p>
                {metric.sublabel ? (
                  <p className="text-xs text-muted-foreground/80">
                    {metric.sublabel}
                  </p>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

