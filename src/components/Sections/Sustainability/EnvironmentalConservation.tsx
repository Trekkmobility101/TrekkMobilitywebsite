"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function EnvironmentalConservation() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 border-t border-border/60 py-14">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-6 space-y-5"
        >
          <div className="flex items-center gap-3">
            <span className="font-display text-4xl sm:text-5xl font-black tracking-tighter text-[#12D18E]/30 select-none">
              05
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#12D18E]">
              Ecological Heritage
            </span>
          </div>

          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Environmental Conservation
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
            We believe in giving back to the planet that sustains us. That&apos;s why we&apos;re committed to supporting environmental conservation initiatives in Nigeria, across Africa, and beyond. Whether it&apos;s tree planting exercises, clearing of refuse dump sites, beach cleanups, or wildlife conservation efforts, we&apos;re actively involved in initiatives that promote biodiversity, protect natural habitats, and preserve the rich ecological heritage of the continent.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          className="lg:col-span-6 flex items-center justify-center lg:justify-end"
        >
          <div className="w-full max-w-[560px]">
            <Image
              src="/images/sustainability-10.png"
              alt="Trekk environmental conservation and tree planting initiatives"
              width={1100}
              height={820}
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

