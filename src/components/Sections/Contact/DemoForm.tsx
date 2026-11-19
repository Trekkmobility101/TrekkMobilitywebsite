"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "@src/hooks/useTranslation";
import Button from "@src/components/ui/button";
import CustomButton from "@src/components/CustomButton";
import Dropdown from "@src/components/Dropdown";
import { Input } from "@src/components/ui/input";
import { toast } from "sonner";
import type { DemoFormData } from "@src/types/forms";

export default function ContactDemoForm() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState<DemoFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneCountry: "+234",
    phone: "",
    company: "",
    fleetSize: "1-50",
    vehicleType: "Electric Scooters",
    heardAbout: "",
    message: "",
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
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        toast.success("Demo request submitted! We will contact you within 24 hours.");
      } else {
        toast.error(data.message || "Failed to submit request.");
      }
    } catch {
      toast.error("An error occurred while submitting your request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="lg:col-span-7 rounded-3xl border border-border bg-white p-8 sm:p-10 shadow-md dark:bg-[#0E1522] space-y-6"
      id="demo-form"
    >
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-[#12D18E]">
          {t("services.eyebrow", "Platform")}
        </span>
        <h2 className="text-2xl font-bold font-display text-foreground mt-1">
          {t("contact.form.title", "Book a Demo")}
        </h2>
        <p className="text-xs text-muted-foreground mt-1">
          {t(
            "contact.form.lede",
            "Tell us about your proposed mobility operation and vehicle needs."
          )}
        </p>
      </div>

      {submitted ? (
        <div className="rounded-2xl border border-[#12D18E]/30 bg-[#F0FBF5] p-8 text-center space-y-4 dark:bg-[#102A23]/30">
          <CheckCircle2 className="size-12 text-[#12D18E] mx-auto" />
          <h3 className="font-display text-xl font-bold text-foreground">
            Demo Request Received!
          </h3>
          <p className="text-xs text-muted-foreground max-w-md mx-auto">
            Thank you, {formData.firstName}. One of our African mobility specialists will reach out to schedule a live video demonstration for{" "}
            <strong>{formData.company}</strong> within one business day.
          </p>
          <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
            Submit Another Request
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot field for anti-bot */}
          <input
            type="text"
            name="_honey"
            value={formData._honey}
            onChange={handleChange}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold mb-1 text-foreground">
                {t("contact.form.firstName", "First Name")} *
              </label>
              <Input
                name="firstName"
                required
                placeholder="Jane"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1 text-foreground">
                {t("contact.form.lastName", "Last Name")} *
              </label>
              <Input
                name="lastName"
                required
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold mb-1 text-foreground">
                {t("contact.form.workEmail", "Business Email")} *
              </label>
              <Input
                type="email"
                name="email"
                required
                placeholder="jane@company.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1 text-foreground">
                {t("contact.form.phone", "Phone Number")} *
              </label>
              <Input
                type="tel"
                name="phone"
                required
                placeholder="+234 814 123 4567"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold mb-1 text-foreground">
                {t("contact.form.company", "Company / Organization")} *
              </label>
              <Input
                name="company"
                required
                placeholder="Mobility Venture Ltd"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1 text-foreground">
                {t("contact.form.fleetSize", "Target Fleet Size")} *
              </label>
              <Dropdown
                options={[
                  { value: "1-50", label: "1 – 50" },
                  { value: "51-200", label: "51 – 200" },
                  { value: "201-500", label: "201 – 500" },
                  { value: "500+", label: "500+" },
                ]}
                value={formData.fleetSize}
                onChange={(val) =>
                  setFormData((prev) => ({ ...prev, fleetSize: val }))
                }
                triggerClassName="h-11 w-full"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1 text-foreground">
              {t("contact.form.vehicleType", "Primary Vehicle Type")} *
            </label>
            <Dropdown
              options={[
                {
                  value: "Electric Scooters",
                  label: t("contact.form.vehicleScooters", "Scooters"),
                },
                {
                  value: "Electric Bicycles",
                  label: t("contact.form.vehicleEbikes", "E-Bikes"),
                },
                {
                  value: "Electric Mopeds",
                  label: t("contact.form.vehicleMopeds", "Mopeds"),
                },
                {
                  value: "Golf Carts & LSVs",
                  label: t("contact.form.vehicleGolfCarts", "Golf Carts & LSVs"),
                },
                {
                  value: "Multi-Modal Mix",
                  label: t("contact.form.vehicleMultiple", "Multiple / Other"),
                },
              ]}
              value={formData.vehicleType}
              onChange={(val) =>
                setFormData((prev) => ({ ...prev, vehicleType: val }))
              }
              triggerClassName="h-11 w-full"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1 text-foreground">
              {t("contact.form.message", "How Can We Help You?")} *
            </label>
            <textarea
              name="message"
              rows={4}
              required
              placeholder="..."
              value={formData.message}
              onChange={handleChange}
              className="flex w-full rounded-xl border border-border bg-background p-3 text-sm text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-[#12D18E]"
            />
          </div>

          <CustomButton
            type="submit"
            loading={loading}
            variant="primary"
            size="md"
            rounded="xl"
            withArrow={!loading}
            className="w-full text-base font-bold shadow-md"
          >
            {loading ? "Submitting..." : t("contact.form.submit", "Book a Platform Demo")}
          </CustomButton>
        </form>
      )}
    </div>
  );
}

