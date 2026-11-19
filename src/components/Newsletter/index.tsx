"use client";

import React, { useState } from "react";
import { Mail, Sparkles, CheckCircle2, Loader2 } from "lucide-react";
import { Input } from "@src/components/ui/input";
import Button from "@src/components/ui/button";
import { toast } from "sonner";
import { useTranslation } from "@src/hooks/useTranslation";

export default function Newsletter() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setSubscribed(true);
        toast.success(data.message || "Thank you for subscribing to Trekk Mobility!");
        setEmail("");
      } else {
        toast.error(data.message || "Subscription failed. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (subscribed) {
    return (
      <div className="mx-auto w-full max-w-2xl rounded-3xl border border-[#12D18E]/30 bg-[#F0FBF5]/80 p-8 text-center shadow-lg backdrop-blur-sm animate-in fade-in zoom-in duration-300">
        <div className="mb-3 inline-flex items-center justify-center rounded-full bg-[#12D18E]/20 p-3 text-[#12D18E]">
          <CheckCircle2 className="size-8" />
        </div>
        <h3 className="text-xl font-bold font-display text-foreground">You&apos;re on the list!</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Watch your inbox for the latest African mobility insights, product updates, and platform news from Trekk Mobility.
        </p>
      </div>
    );
  }

  return (
    <section className="relative isolate mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-border bg-white shadow-xl dark:bg-[#0E1522]">
      {/* Background Soft Glows */}
      <div className="pointer-events-none absolute -left-20 -top-20 size-60 rounded-full bg-[#12D18E]/15 blur-[90px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 size-60 rounded-full bg-[#2E6BFF]/15 blur-[90px]" />

      <div className="relative z-10 flex flex-col items-center justify-between gap-8 p-8 md:flex-row md:p-12">
        {/* Content */}
        <div className="flex-1 space-y-3 text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#12D18E]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#102A23] dark:text-[#12D18E]">
            <Mail className="size-3.5" />
            <span>Newsletter</span>
          </div>
          <h2 className="text-2xl font-bold font-display tracking-tight text-foreground md:text-3xl">
            Powering the Future of <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#12D18E] to-[#2E6BFF] bg-clip-text text-transparent">
              African Mobility
            </span>
          </h2>
          <p className="max-w-md text-sm text-muted-foreground">
            Get expert insights on EV fleet operations, micro-mobility rollouts, IoT telematics, and platform updates delivered straight to your inbox.
          </p>
        </div>

        {/* Subscribe Form */}
        <div className="w-full min-w-[280px] max-w-md md:w-auto">
          <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
            <div className="relative">
              <Input
                type="email"
                placeholder={t("common.footer.emailPlaceholder", "your email address")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 rounded-xl border border-border bg-background px-4 text-sm shadow-sm transition placeholder:text-muted-foreground/60 focus-visible:ring-2 focus-visible:ring-[#12D18E]"
              />
            </div>
            <Button
              type="submit"
              loading={loading}
              className="h-12 w-full rounded-xl bg-[#12D18E] text-[#0B1220] font-bold shadow-md hover:bg-[#0fb87c] active:scale-[0.98]"
            >
              {loading ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Sparkles className="size-4" />
                  <span>{t("common.footer.subscribe", "Subscribe")}</span>
                </>
              )}
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              No spam. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

