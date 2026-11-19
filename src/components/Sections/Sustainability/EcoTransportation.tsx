"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function EcoTransportation() {
  return (
    <section
      id="eco-transportation"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-24"
    >
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
              01
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#12D18E]">
              Zero-Emission Mobility
            </span>
          </div>

          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Eco-friendly Transportation
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
            By equipping commercial operators, universities, and enterprises with electric fleet infrastructure across Africa and beyond, Trekk significantly reduces the carbon footprint associated with traditional gasoline-powered shuttles and vehicles. Our connected e-scooter and EV platform enables zero-emission transit networks that combat air pollution without compromising operational reliability.
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
              src="/images/sustainability-02.png"
              alt="Eco-friendly zero-emission Trekk electric scooters"
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

