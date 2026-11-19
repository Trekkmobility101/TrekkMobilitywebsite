"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@src/components/ui/button";

const JOIN_IMAGES = [
  {
    src: "/images/sustainability-11.png",
    alt: "Trekk green mobility movement across Africa",
  },
  {
    src: "/images/sustainability-12.png",
    alt: "Trekk community riders building a cleaner future",
  },
  {
    src: "/images/sustainability-13.png",
    alt: "Sustainable urban transportation with Trekk scooters",
  },
  {
    src: "/images/sustainability-14.png",
    alt: "Empowering African communities with eco-friendly mobility",
  },
];

export default function SustainabilityJoinUs() {
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
              06
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#12D18E]">
              Join the Movement
            </span>
          </div>

          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl leading-[1.12]">
            Join Us in Building a Sustainable Future
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
            We&apos;re more than software — we&apos;re the B2B technology backbone for a greener, more sustainable Africa and beyond. Partner with Trekk to launch zero-emission fleets for your city, university campus, residential estate, or commercial enterprise. Together, we can build cleaner, smarter transit infrastructure for generations to come.
          </p>

          <div className="pt-2">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[#12D18E] text-[#0B1220] hover:bg-[#0fb87c] font-bold gap-2 rounded-full px-8 shadow-lg shadow-[#12D18E]/20"
              >
                <span>Join Us</span>
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
        </motion.div>

        <div className="lg:col-span-7">
          <div className="columns-2 gap-4 space-y-4">
            {JOIN_IMAGES.map((img, idx) => (
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

