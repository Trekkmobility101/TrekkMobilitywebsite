"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "@src/hooks/useTranslation";
import BrandMarquee from "@src/components/BrandMarquee";

export default function HomeTrustedShowcase() {
  const { t } = useTranslation();

  return (
    <section className="relative bg-[#FAFDFB] pt-0 pb-20">
      {/* Organic Curved Wave Divider Top */}
      <div className="w-full overflow-hidden leading-none -mt-1">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-20 lg:h-28 text-[#0B1813] fill-current"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C360,100 1080,100 1440,0 L1440,0 L0,0 Z" />
        </svg>
      </div>

      {/* Floating Operator Dashboard & Rider App Over Transition */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 lg:-mt-14 relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 lg:gap-6 max-w-4xl mx-auto">
          {/* Rider App (Trekk-011): Equal size & prominence on desktop, primary on mobile */}
          <div className="relative w-full max-w-[380px] lg:max-w-[430px] aspect-[4/3] flex items-center justify-center">
            <Image
              src="/images/Trekk-011.png"
              alt="Trekk Mobility Rider Mobile App & QR Access"
              fill
              className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.16)]"
              priority
            />
          </div>

          {/* Operator Tablet Dashboard (Trekk-005): Same size & close beside Trekk-011 on desktop, hidden on mobile */}
          <div className="hidden md:flex relative w-full max-w-[380px] lg:max-w-[430px] aspect-[4/3] items-center justify-center">
            <Image
              src="/images/Trekk-005.png"
              alt="Trekk Mobility Full Dashboard & Analytics OS"
              fill
              className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.16)]"
              priority
            />
          </div>
        </div>

        {/* Trusted In / Partner Badges */}
        <div className="pt-16 sm:pt-20 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#5B6B72]">
            {t("home.trustedBy", "TRUSTED BY INNOVATIVE OPERATORS & PARTNERS ACROSS AFRICA AND BEYOND")}
          </span>

          <BrandMarquee />
        </div>
      </div>
    </section>
  );
}

