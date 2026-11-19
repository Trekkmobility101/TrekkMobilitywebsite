"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  Code2,
  Cpu,
  CreditCard,
  LayoutDashboard,
  LineChart,
  Smartphone,
  Wrench,
} from "lucide-react";
import { useTranslation } from "@src/hooks/useTranslation";
import { cn } from "@src/lib/utils";

type ServiceTab = {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  points: string[];
  image: string;
};

const SERVICE_TABS: ServiceTab[] = [
  {
    id: "rider-app",
    icon: Smartphone,
    title: "Rider App",
    desc: "Your riders get a beautiful, intuitive, and native mobility experience on iOS and Android — completely branded with your logo, colors, and identity.",
    points: [
      "Real-time GPS map discovery & reserve nearby vehicles",
      "Scan QR code to immediately unlock and initiate ride",
      "In-app wallet top-ups via Cards, Bank Transfer, and Mobile Money",
      "Trip history, route summaries, speed metrics, and automated receipts",
    ],
    image: "/images/Trekk-011.png",
  },
  {
    id: "operator-dashboard",
    icon: LayoutDashboard,
    title: "Operator Dashboard",
    desc: "Gain complete situational awareness of your entire fleet in real-time. Manage pricing models, geo-zones, staff roles, and financials from a single web browser.",
    points: [
      "Real-time vehicle map tracking, telemetry, battery levels, and fault codes",
      "Configurable geofences: speed limit zones, slow-ride corridors, and no-parking areas",
      "Dynamic pricing: per-minute rates, unlock fees, day passes, and subscriptions",
      "Rider management: verify IDs, issue ride credits, and review dispute logs",
    ],
    image: "/images/trekk-dashboard.png",
  },
  {
    id: "field-operations",
    icon: Wrench,
    title: "Field Operations App",
    desc: "Empower your ground crew with a dedicated operational mobile app for battery swaps, vehicle rebalancing, maintenance work orders, and recovery.",
    points: [
      "Battery swap routing: automated dispatch to vehicles below threshold",
      "Vehicle diagnostics: Bluetooth beacon pairing and physical locking checks",
      "Damage reporting: photo capture and immediate parts inventory ticketing",
      "Vehicle drop-off photo validation and geofenced rebalancing tasks",
    ],
    image: "/images/Trekk-014.png",
  },
  {
    id: "iot-telematics",
    icon: Cpu,
    title: "IoT & Telematics",
    desc: "Hardware-agnostic telematics integration supporting leading IoT box manufacturers (Omni, Queclink, Teltonika) with robust offline cellular fallbacks.",
    points: [
      "Cellular (2G/4G/LTE-M) and BLE dual-connection redundancy",
      "Automated over-the-air (OTA) firmware update distribution",
      "Tamper detection, movement alarms, and remote motor lock triggers",
      "Battery state-of-charge (SoC), voltage health, and temperature monitoring",
    ],
    image: "/images/Trekk-013.png",
  },
  {
    id: "payments",
    icon: CreditCard,
    title: "African Payments Engine",
    desc: "Designed ground-up for African financial realities. Support debit cards, virtual bank transfers, USSD, and regional mobile money operators.",
    points: [
      "Flutterwave, Paystack, and direct telecom mobile money rails",
      "Prepaid digital wallet balances with automated zero-balance pauses",
      "Corporate split-billing and employee mobility expense stipends",
      "Instant automated settlements and multi-currency payouts",
    ],
    image: "/images/Trekk-009.png",
  },
  {
    id: "analytics",
    icon: LineChart,
    title: "Analytics & Fleet Intelligence",
    desc: "Transform ride coordinates and vehicle telematics into high-yield business intelligence with automated utilization and revenue reporting.",
    points: [
      "Heatmaps identifying high-demand ride corridors and pickup hotspots",
      "Fleet utilization ratios (rides per vehicle per day)",
      "Battery cycle health degradation and preventive maintenance alerts",
      "Cohort retention analysis and marketing campaign attribution",
    ],
    image: "/images/Trekk-005.png",
  },
  {
    id: "api",
    icon: Code2,
    title: "Open APIs & Webhooks",
    desc: "Seamlessly integrate Trekk with your ERP, accounting software, third-party dispatch algorithms, or municipal smart-city reporting portals.",
    points: [
      "RESTful JSON APIs with comprehensive OpenAPI documentation",
      "Real-time webhook events for ride start, end, trip payments, and faults",
      "GBFS (General Bikeshare Feed Specification) compliant public feeds",
      "Role-based API tokens with granular rate-limiting controls",
    ],
    image: "/images/api-integrations.jpg",
  },
];

export default function PlatformComponents() {
  const { t } = useTranslation();
  const [activeTabId, setActiveTabId] = useState<string>("rider-app");

  React.useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;
      const hashMap: Record<string, string> = {
        "rider-app": "rider-app",
        dashboard: "operator-dashboard",
        "operator-dashboard": "operator-dashboard",
        "field-ops": "field-operations",
        "field-operations": "field-operations",
        iot: "iot-telematics",
        telematics: "iot-telematics",
        payments: "payments",
        analytics: "analytics",
        api: "api",
      };
      const targetTab = hashMap[hash];
      if (targetTab) {
        setActiveTabId(targetTab);
        const el = document.getElementById("components");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const translatedTabs = SERVICE_TABS.map((tab) => {
    const keyMap: Record<string, string> = {
      "rider-app": "services.tab1",
      "operator-dashboard": "services.tab2",
      "field-operations": "services.tab3",
      "iot-telematics": "services.tab4",
      payments: "services.tab7",
      analytics: "services.tab8",
      api: "services.tab11",
    };
    const prefix = keyMap[tab.id];
    if (!prefix) return tab;
    const translatedPoints = t(`${prefix}.points`, "");
    return {
      ...tab,
      title: t(`${prefix}.title`, tab.title),
      desc: t(`${prefix}.desc`, tab.desc),
      points: translatedPoints ? translatedPoints.split("|") : tab.points,
    };
  });

  const activeTab =
    translatedTabs.find((tab) => tab.id === activeTabId) || translatedTabs[0];

  return (
    <section
      id="components"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 scroll-mt-24"
    >
      <div className="max-w-3xl mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-[#12D18E]">
          <span className="size-2 rounded-full bg-[#12D18E] inline-block animate-pulse" />
          <span>{t("services.comp.eyebrow", "Modular Architecture")}</span>
        </div>
        <h2 className="text-3xl font-bold font-display sm:text-4xl text-foreground">
          {t("services.comp.h2", "Platform Components")}
        </h2>
        <p className="text-base text-muted-foreground">
          {t(
            "services.comp.lede",
            "A cohesive suite of hardware integrations, rider interfaces, and operator tooling engineered for urban mobility in Africa and beyond."
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-4">
          {translatedTabs.map((tab) => {
            const isSelected = tab.id === activeTabId;
            const IconComp = tab.icon;
            return (
              <div
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={cn(
                  "cursor-pointer rounded-2xl p-5 transition-all duration-200 border text-left",
                  isSelected
                    ? "border-l-4 border-l-[#12D18E] border-t-transparent border-r-transparent border-b-transparent bg-white shadow-md dark:bg-[#0E1522]"
                    : "border-transparent hover:bg-black/[0.02] dark:hover:bg-white/[0.02]"
                )}
              >
                <div className="flex items-center gap-3">
                  <IconComp
                    className={cn(
                      "size-5 shrink-0 transition-colors",
                      isSelected ? "text-[#12D18E]" : "text-[#5B6B72]"
                    )}
                  />
                  <h3
                    className={cn(
                      "font-display text-xl sm:text-2xl font-bold transition-colors",
                      isSelected ? "text-[#0B1220] dark:text-white" : "text-[#5B6B72]"
                    )}
                  >
                    {tab.title}
                  </h3>
                </div>

                {isSelected && (
                  <div className="mt-4 space-y-4 animate-in fade-in duration-200">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tab.desc}
                    </p>

                    <div className="space-y-2 pt-1">
                      {tab.points.map((pt, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <CheckCircle2 className="size-4 shrink-0 text-[#12D18E] mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="lg:col-span-7 flex items-center justify-center">
          <div className="relative aspect-[16/10] w-full max-w-2xl min-h-[380px] sm:min-h-[460px] flex items-center justify-center">
            <Image
              src={activeTab ? activeTab.image : "/images/Trekk-001.png"}
              alt={activeTab ? activeTab.title : "Trekk Platform Component"}
              fill
              className="object-contain transition-all duration-300"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

