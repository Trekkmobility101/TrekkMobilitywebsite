"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  wrap,
} from "framer-motion";

type PartnerLogo = {
  id: string;
  name: string;
  src: string;
  alt: string;
  containerWidthClass?: string;
  imageClass?: string;
};

const BASE_PARTNERS: PartnerLogo[] = [
  {
    id: "brand-1",
    name: "Omni IoT",
    src: "/images/brand-1.png",
    alt: "Omni IoT Telematics & Smart Locks",
    containerWidthClass: "w-36 sm:w-48 md:w-56 lg:w-64",
  },
  {
    id: "brand-2",
    name: "Teltonika",
    src: "/images/brand-2.png",
    alt: "Teltonika Telematics Fleet Partner",
    containerWidthClass: "w-32 sm:w-44 md:w-52 lg:w-60",
  },
  {
    id: "brand-3",
    name: "ABUAD Mobility",
    src: "/images/brand-3.png",
    alt: "ABUAD Campus Mobility Partner",
    containerWidthClass: "w-36 sm:w-48 md:w-56 lg:w-64",
  },
  {
    id: "brand-4",
    name: "Swiftmile",
    src: "/images/brand-4.png",
    alt: "Swiftmile Micromobility Charging Infrastructure",
    containerWidthClass: "w-44 sm:w-60 md:w-72 lg:w-80",
  },
  {
    id: "brand-5",
    name: "Queclink",
    src: "/images/brand-5.png",
    alt: "Queclink Wireless Solutions",
    containerWidthClass: "w-32 sm:w-44 md:w-52 lg:w-60",
    imageClass: "scale-[1.5] sm:scale-[1.7]",
  },
  {
    id: "brand-6",
    name: "OKAI",
    src: "/images/brand-okai.svg",
    alt: "OKAI Global Micromobility Vehicles",
    containerWidthClass: "w-32 sm:w-40 md:w-48 lg:w-52",
  },
  {
    id: "brand-7",
    name: "Segway-Ninebot",
    src: "/images/brand-segway.svg",
    alt: "Segway-Ninebot Commercial Electric Mobility",
    containerWidthClass: "w-40 sm:w-52 md:w-60 lg:w-68",
  },
];

// Repeat 4 times to ensure seamless infinite looping on all screen sizes
const MARQUEE_LOGOS: PartnerLogo[] = [
  ...BASE_PARTNERS,
  ...BASE_PARTNERS,
  ...BASE_PARTNERS,
  ...BASE_PARTNERS,
];

export default function BrandMarquee() {
  const [isPaused, setIsPaused] = useState(false);

  // baseX holds percentage offset from -50 to 0
  const baseX = useMotionValue(-50);

  // Speed in percentage per millisecond (takes ~24s for a 50% loop cycle)
  const speed = 50 / (24 * 1000);

  useAnimationFrame((_, delta) => {
    if (isPaused) return;
    // Moving from left to right: increment baseX
    const moveBy = speed * delta;
    baseX.set(baseX.get() + moveBy);
  });

  // Transform into a wrapped percentage string between -50% and 0%
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  return (
    <div
      className="relative w-full overflow-hidden py-6 sm:py-8 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      aria-label="Partner Brand Logos"
    >
      {/* Left Gradient Edge Mask for Smooth Fade-In */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-36 md:w-52 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />

      {/* Right Gradient Edge Mask for Smooth Fade-Out */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-36 md:w-52 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />

      {/* Animated Marquee Track */}
      <motion.div
        className="flex w-max items-center gap-10 sm:gap-16 md:gap-20 lg:gap-24"
        style={{ x }}
      >
        {MARQUEE_LOGOS.map((partner, index) => (
          <motion.div
            key={`${partner.id}-${index}`}
            whileHover={{ scale: 1.08, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="group relative flex shrink-0 items-center justify-center cursor-pointer py-2 px-3"
          >
            <div
              className={`relative h-12 sm:h-16 md:h-18 lg:h-20 ${partner.containerWidthClass || "w-36"} flex items-center justify-center opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:drop-shadow-md dark:brightness-125`}
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                fill
                className={`object-contain transition-transform duration-300 ${partner.imageClass || ""}`}
                sizes="(max-width: 640px) 160px, (max-width: 1024px) 240px, 320px"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

