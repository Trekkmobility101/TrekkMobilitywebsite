"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";
import { useTranslation } from "@src/hooks/useTranslation";

export default function CurrencyPromise() {
  const { t } = useTranslation();

  return (
    <section
      id="local-currency"
      className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"
    >
      <div className="rounded-3xl border border-border bg-white p-8 shadow-sm dark:bg-[#0E1522] space-y-4">
        <div className="flex items-center gap-2 text-foreground font-display font-bold text-base">
          <ShieldCheck className="size-5 text-[#12D18E]" />
          <span>{t("pricing.currency.h2", "Our Local Currency Promise")}</span>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {t(
            "pricing.currency.p1",
            "We understand the challenges of foreign exchange volatility in Africa and beyond. You are never forced to pay software subscriptions in volatile US Dollars if your riders pay in Naira, Cedis, or CFA Francs. Trekk bills in the local currency of the market where you operate."
          )}
        </p>
      </div>
    </section>
  );
}

