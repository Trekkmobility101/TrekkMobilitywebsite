// src/env.ts or root env.ts
export const env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY || "",
  MAILCHIMP_AUDIENCE_ID: process.env.MAILCHIMP_AUDIENCE_ID || "",
  MAILCHIMP_SERVER_PREFIX: process.env.MAILCHIMP_SERVER_PREFIX || "us1",
  FORM_RECIPIENT_EMAIL:
    process.env.FORM_RECIPIENT_EMAIL || "directors@trekkmobility.com",
  SMTP_HOST: process.env.SMTP_HOST || "",
  SMTP_PORT: process.env.SMTP_PORT || "465",
  SMTP_USER: process.env.SMTP_USER || "",
  SMTP_PASS: process.env.SMTP_PASS || "",
  SMTP_FROM: process.env.SMTP_FROM || "",
  RESEND_API_KEY: process.env.RESEND_API_KEY || "",
  RESEND_FROM: process.env.RESEND_FROM || "",
};

export default env;
