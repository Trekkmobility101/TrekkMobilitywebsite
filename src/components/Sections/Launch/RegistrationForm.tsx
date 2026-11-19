"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import Button from "@src/components/ui/button";
import { Input } from "@src/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@src/components/ui/select";
import { toast } from "sonner";
import type { RegisterFormData } from "@src/types/forms";

export default function LaunchRegistrationForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const [formData, setFormData] = useState<RegisterFormData>({
    firstName: "",
    lastName: "",
    email: "",
    organisation: "",
    country: "Nigeria",
    joiningAs: "Prospective operator / partner",
    interest: "",
    _honey: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        toast.success("Registration confirmed! We've sent details to your email.");
      } else {
        toast.error(data.message || "Registration failed.");
      }
    } catch {
      toast.error("An error occurred during registration.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24" id="register">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: 03 — You're Invited */}
        <div className="lg:col-span-5 space-y-6">
          <span className="eyebrow">03 &mdash; You&apos;re Invited</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
            Your next move could start right here.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Join the official Trekk Mobility launch and digital press conference. Bring your ambition. Bring your questions.
          </p>

          <div className="space-y-4 border-y border-border/60 py-6 text-sm">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block">
                When
              </span>
              <p className="font-bold text-foreground">
                November 24, 2026 &middot; 2:00 PM WAT (UTC+1)
              </p>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block">
                Where
              </span>
              <p className="font-bold text-foreground">Online &middot; Worldwide</p>
              <p className="text-xs text-muted-foreground">
                Joining details will be provided separately
              </p>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block">
                Admission
              </span>
              <p className="font-bold text-foreground">Complimentary registration</p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#12D18E] hover:underline"
          >
            <span>Media enquiries? Let&apos;s talk</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        {/* Right: Save Your Place Form */}
        <div className="lg:col-span-7 rounded-3xl border border-border bg-white p-8 sm:p-10 shadow-lg dark:bg-[#0E1522] space-y-6">
          <div>
            <span className="eyebrow">Save Your Place</span>
            <h3 className="text-2xl font-bold font-display sm:text-3xl text-foreground mt-1">
              Be there for what&apos;s next.
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              A few details, and you&apos;re on the list.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-2xl border border-[#12D18E]/30 bg-[#F0FBF5] p-8 text-center space-y-4 dark:bg-[#102A23]/30">
              <CheckCircle2 className="size-12 text-[#12D18E] mx-auto" />
              <h4 className="font-display text-xl font-bold text-foreground">
                You&apos;re Confirmed!
              </h4>
              <p className="text-xs text-muted-foreground max-w-md mx-auto">
                Thank you, {formData.firstName}. We&apos;ve reserved your place for the Trekk Mobility Official Launch representing{" "}
                <strong>{formData.organisation}</strong>. Details will be sent to {formData.email}.
              </p>
              <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                Register Another Attendee
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="_honey"
                value={formData._honey}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label className="block text-xs font-semibold mb-1 text-foreground">
                  I&apos;m joining as *
                </label>
                <Select
                  value={formData.joiningAs}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, joiningAs: value }))
                  }
                >
                  <SelectTrigger className="h-11 w-full bg-background">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Prospective operator / partner">
                      Prospective operator / partner
                    </SelectItem>
                    <SelectItem value="Existing fleet / business">
                      Existing fleet / business
                    </SelectItem>
                    <SelectItem value="Media / journalist">
                      Media / journalist
                    </SelectItem>
                    <SelectItem value="Investor / ecosystem stakeholder">
                      Investor / ecosystem stakeholder
                    </SelectItem>
                    <SelectItem value="Other interested attendee">
                      Other interested attendee
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1 text-foreground">
                    First name *
                  </label>
                  <Input
                    name="firstName"
                    required
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1 text-foreground">
                    Last name *
                  </label>
                  <Input
                    name="lastName"
                    required
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1 text-foreground">
                  Email address *
                </label>
                <Input
                  type="email"
                  name="email"
                  required
                  placeholder="name@organization.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1 text-foreground">
                    Organisation *
                  </label>
                  <Input
                    name="organisation"
                    required
                    placeholder="Company or institution"
                    value={formData.organisation}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1 text-foreground">
                    Country *
                  </label>
                  <Input
                    name="country"
                    required
                    placeholder="Nigeria, Ghana, Kenya, etc."
                    value={formData.country}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1 text-foreground">
                  What would you like to explore? (optional)
                </label>
                <textarea
                  name="interest"
                  rows={3}
                  placeholder="Share any questions or topics you'd like covered..."
                  value={formData.interest}
                  onChange={handleChange}
                  className="flex w-full rounded-xl border border-border bg-background p-3 text-sm text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-[#12D18E]"
                />
              </div>

              <label className="flex items-start gap-2.5 text-xs text-muted-foreground cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 rounded border-border accent-[#12D18E]"
                />
                <span>
                  I agree that Trekk Mobility may use these details to manage my registration and contact me about this event.
                </span>
              </label>

              <Button
                type="submit"
                loading={loading}
                disabled={!agreed || loading}
                className="w-full h-12 bg-[#12D18E] text-[#0B1220] font-bold text-base hover:bg-[#0fb87c] shadow-md gap-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Reserve my place</span>
                    <ArrowRight className="size-4" />
                  </>
                )}
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Free to attend. No payment details required.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
