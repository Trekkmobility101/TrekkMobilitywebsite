"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Sparkles,
  Wifi,
  Layers,
  MapPin,
  TrendingUp,
  Cpu,
  Lock,
} from "lucide-react";
import { useTranslation } from "@src/hooks/useTranslation";
import CustomButton from "@src/components/CustomButton";
import { cn } from "@src/lib/utils";

type HeroSlide = {
  id: string;
  image: string;
  alt: string;
  card1: {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    sub: string;
  };
  card2: {
    label: string;
    value: string;
    trend: string;
  };
  card3: {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    sub: string;
  };
};

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "fleet-all",
    image: "/images/trekk-home.png",
    alt: "Trekk Mobility Multi-Modal Connected Fleet",
    card1: {
      icon: Wifi,
      title: "MINI-FLEET-01",
      sub: "98.4% uptime · 4G Active",
    },
    card2: {
      label: "Total Trips",
      value: "15,100+",
      trend: "+24.8% vs last month",
    },
    card3: {
      icon: ShieldCheck,
      title: "ID Verification Active",
      sub: "Scan-to-unlock instant clearance",
    },
  },
  {
    id: "scooter",
    image: "/images/trekk-home-1.png",
    alt: "Trekk Electric Scooter Fleet",
    card1: {
      icon: Zap,
      title: "SCOOT-X4 · READY",
      sub: "96% Battery · 45 km Range",
    },
    card2: {
      label: "Unlock Speed",
      value: "< 1.2s",
      trend: "BLE Offline Redundancy",
    },
    card3: {
      icon: Lock,
      title: "Auto Kickstand Lock",
      sub: "Dual anti-theft sensor active",
    },
  },
  {
    id: "trike",
    image: "/images/trekk-home-2.png",
    alt: "Trekk Electric Delivery Tuk-Tuk",
    card1: {
      icon: MapPin,
      title: "E-TRIKE · IN ROUTE",
      sub: "Corral & Speed Corridors",
    },
    card2: {
      label: "Daily Revenue",
      value: "₦48,500",
      trend: "+32% dispatch density",
    },
    card3: {
      icon: Cpu,
      title: "Telematics Diagnostics",
      sub: "Zero active fault codes",
    },
  },
  {
    id: "ev",
    image: "/images/trekk-home-3.png",
    alt: "Trekk High-Performance Electric Vehicle",
    card1: {
      icon: Layers,
      title: "FLEET OS · ONLINE",
      sub: "Sub-second cloud telemetry",
    },
    card2: {
      label: "CO₂ Saved",
      value: "18.2 Tons",
      trend: "100% Zero-emission rides",
    },
    card3: {
      icon: Sparkles,
      title: "Smart Dynamic Pricing",
      sub: "Automated campus tariffs",
    },
  },
];

export default function HomeHero() {
  const { t } = useTranslation();
  const [heroSlide, setHeroSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const currentHeroSlide: HeroSlide =
    HERO_SLIDES[heroSlide] ?? (HERO_SLIDES[0] as HeroSlide);
  const Card1Icon = currentHeroSlide.card1.icon;
  const Card3Icon = currentHeroSlide.card3.icon;

  return (
    <section className="relative overflow-hidden bg-[#0B1813] text-white pt-10 pb-28 lg:pt-16 lg:pb-36">
      {/* Soft Ambient Radial Glows */}
      <div className="pointer-events-none absolute -top-40 right-0 size-[650px] rounded-full bg-[#12D18E]/15 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-0 -left-20 size-[500px] rounded-full bg-[#2E6BFF]/10 blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 lg:pr-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-white backdrop-blur-md">
              <span className="size-2 rounded-full bg-[#12D18E] inline-block animate-pulse" />
              <span>{t("home.eyebrow", "The Mobility Operating System Built for Africa and Beyond")}</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              {t("home.hero.titlePart1", "Mobility that")} <br />
              <span className="text-[#12D18E]">{t("home.hero.titlePart2", "connects.")}</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#A0B0A8] font-medium leading-relaxed max-w-xl">
              {t(
                "home.hero.sub1",
                "Trekk is the OS for lightweight vehicles, connecting African fleets to intelligence and mobility entrepreneurs to a profitable future."
              )}
            </p>

            <p className="text-sm sm:text-base text-[#7B8F84] leading-relaxed max-w-lg">
              {t(
                "home.hero.sub2",
                "From IoT telematics and automated fleet operations to rider apps and African mobile money, manage and scale your mobility business on one fully integrated operating system."
              )}
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link href="/contact">
                <CustomButton
                  variant="primary"
                  size="lg"
                  rounded="full"
                  withArrow
                  className="px-8 text-base font-bold shadow-xl shadow-[#12D18E]/25 hover:shadow-2xl hover:shadow-[#12D18E]/40"
                >
                  <span>{t("common.nav.bookDemo", "Request a Demo")}</span>
                </CustomButton>
              </Link>

              <Link href="/calculator">
                <CustomButton
                  variant="outline-light"
                  size="lg"
                  rounded="full"
                  className="px-8 text-base font-semibold border-white/20 text-white hover:bg-white/10"
                >
                  <span>{t("home.hero.exploreRoi", "Explore Fleet ROI")} &rarr;</span>
                </CustomButton>
              </Link>
            </div>
          </div>

          {/* Right Column: Floating Slideshow with Framer Motion */}
          <div
            className="lg:col-span-5 relative flex flex-col items-center justify-center min-h-[420px] sm:min-h-[480px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative w-full aspect-[4/3] max-w-[500px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentHeroSlide.id}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <Image
                    src={currentHeroSlide.image}
                    alt={currentHeroSlide.alt}
                    fill
                    className="object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)]"
                    priority
                  />

                  {/* Floating Live Card 1 (Top Left Status) */}
                  <motion.div
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.35 }}
                    className="absolute top-2 left-0 sm:left-4 rounded-2xl border border-white/20 bg-[#0B1510]/85 backdrop-blur-md px-3.5 py-2 shadow-2xl flex items-center gap-2.5 z-20 pointer-events-none"
                  >
                    <div className="flex size-7 items-center justify-center rounded-full bg-[#12D18E]/20 text-[#12D18E]">
                      <Card1Icon className="size-3.5" />
                    </div>
                    <div className="text-left">
                      <div className="text-[11px] font-bold text-white flex items-center gap-1.5">
                        <span>{currentHeroSlide.card1.title}</span>
                        <span className="size-1.5 rounded-full bg-[#12D18E] animate-pulse" />
                      </div>
                      <p className="text-[10px] text-[#A0B0A8]">{currentHeroSlide.card1.sub}</p>
                    </div>
                  </motion.div>

                  {/* Floating Live Card 2 (Top Right Metrics) */}
                  <motion.div
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.35 }}
                    className="absolute -top-4 right-0 sm:right-2 rounded-2xl border border-white/15 bg-white text-[#0B1220] p-3.5 shadow-2xl space-y-1 z-20 pointer-events-none"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
                      {currentHeroSlide.card2.label}
                    </span>
                    <p className="font-display text-2xl font-extrabold text-[#0B1220]">
                      {currentHeroSlide.card2.value}
                    </p>
                    <div className="inline-flex items-center gap-1 text-[10px] font-bold text-[#12D18E]">
                      <TrendingUp className="size-3" />
                      <span>{currentHeroSlide.card2.trend}</span>
                    </div>
                  </motion.div>

                  {/* Floating Live Card 3 (Bottom Center Status) */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.35 }}
                    className="absolute -bottom-4 left-6 sm:left-12 rounded-2xl border border-white/20 bg-white text-[#0B1220] px-4 py-2.5 shadow-2xl flex items-center gap-3 z-20 pointer-events-none"
                  >
                    <div className="flex size-7 items-center justify-center rounded-full bg-[#12D18E]/20 text-[#12D18E]">
                      <Card3Icon className="size-4" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-bold text-[#0B1220]">{currentHeroSlide.card3.title}</p>
                      <p className="text-[10px] text-muted-foreground">{currentHeroSlide.card3.sub}</p>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Indicators / Dots */}
            <div className="flex items-center gap-2 pt-8 z-30">
              {HERO_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setHeroSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    idx === heroSlide
                      ? "w-8 bg-[#12D18E]"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

