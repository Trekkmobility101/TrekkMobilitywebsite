"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react";
import { FOOTER_SECTIONS } from "@src/constants/navigation";
import { SITE_METADATA } from "@src/constants/siteContent";
import { useTranslation } from "@src/hooks/useTranslation";
import LanguageSwitcher from "@src/components/LanguageSwitcher";
import Newsletter from "@src/components/Newsletter";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border bg-[#0B1220] text-white">
      {/* Top Section with Newsletter */}
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-16">
          <Newsletter />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Brand Column (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block">
              <div className="relative h-12 w-32">
                <Image
                  src="/images/logo-main.png"
                  alt="Trekk Mobility"
                  fill
                  className="object-contain object-left brightness-0 invert"
                />
              </div>
            </Link>

            <p className="max-w-sm text-sm text-[#8A98A0] leading-relaxed">
              {t("common.footer.tagline", "Powering the next generation of African mobility.")}
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-[#8A98A0]">
              <div className="flex items-start gap-2.5">
                <MapPin className="size-4 shrink-0 text-[#12D18E] mt-0.5" />
                <span>{SITE_METADATA.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-[#12D18E]" />
                <a
                  href={`tel:${SITE_METADATA.phone.replace(/\s+/g, "")}`}
                  className="hover:text-white transition"
                >
                  {SITE_METADATA.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Links Columns (3 cols) */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-3">
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.titleKey} className="space-y-4">
                <h4 className="font-display text-sm font-bold tracking-wider uppercase text-white">
                  {t(section.titleKey, section.defaultTitle)}
                </h4>
                <ul className="space-y-2.5 text-xs text-[#8A98A0]">
                  {section.links.map((link) => (
                    <li key={link.href + link.labelKey}>
                      <Link
                        href={link.href}
                        className="transition hover:text-[#12D18E]"
                      >
                        {t(link.labelKey, link.defaultLabel)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-[#8A98A0] text-center sm:text-left">
            {t(
              "common.footer.legal",
              "© 2026 Trekk Mobility. All rights reserved. — Mobility technology built for Africa and beyond."
            )}
          </p>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
}

