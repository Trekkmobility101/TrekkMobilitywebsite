import nodemailer from "nodemailer";
import * as XLSX from "xlsx";
import { escapeHtml, renderEmailShell } from "@src/utils/mailHelpers";

export const OFFICIAL_SUBMISSION_EMAIL =
  process.env.FORM_RECIPIENT_EMAIL || "directors@trekkmobility.com";

export type FormSubmissionPayload = {
  formId: string;
  formTitle: string;
  replyTo?: string;
  fields: Record<string, string>;
  confirmationHtml?: string;
  confirmationSubject?: string;
};

export type FormSubmissionResult = {
  delivered: boolean;
  provider: "smtp" | "resend" | "mock";
  submissionId: string;
  recipient: string;
};

function createSubmissionId(): string {
  const datePart = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const randPart = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `SUB-${datePart}-${randPart}`;
}

export function buildSubmissionExcelBuffer(params: {
  formId: string;
  formTitle: string;
  submissionId: string;
  submittedAt: string;
  fields: Record<string, string>;
}): Buffer {
  const row: Record<string, string> = {
    "Form ID": params.formId,
    "Form Title": params.formTitle,
    "Submission ID": params.submissionId,
    "Submitted At (UTC)": params.submittedAt,
    ...params.fields,
  };

  const worksheet = XLSX.utils.json_to_sheet([row]);
  const colWidths = Object.keys(row).map((key) => ({
    wch: Math.max(key.length + 4, String(row[key] ?? "").length + 4, 18),
  }));
  worksheet["!cols"] = colWidths;

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, params.formId.slice(0, 31));

  return XLSX.write(workbook, { type: "buffer", bookType: "xlsx" }) as Buffer;
}

function buildAdminNotificationHtml(params: {
  formId: string;
  formTitle: string;
  submissionId: string;
  submittedAt: string;
  fields: Record<string, string>;
}): string {
  const rowsHtml = Object.entries(params.fields)
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 14px;border-bottom:1px solid #E6ECE8;font-size:13px;font-weight:700;color:#102A23;width:36%;">${escapeHtml(label)}</td>
          <td style="padding:10px 14px;border-bottom:1px solid #E6ECE8;font-size:13px;color:#3A4440;">${escapeHtml(value || "—")}</td>
        </tr>`
    )
    .join("");

  const body = `
    <tr>
      <td style="padding:28px 32px 12px;">
        <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#12D18E;">
          ${escapeHtml(params.formId)} &middot; ${escapeHtml(params.submissionId)}
        </p>
        <p style="margin:0 0 8px;font-size:20px;line-height:1.3;color:#0B1220;font-weight:700;">
          New ${escapeHtml(params.formTitle)} Submission
        </p>
        <p style="margin:0 0 18px;font-size:13px;color:#5C6B64;">
          Submitted at ${escapeHtml(params.submittedAt)}. An Excel (.xlsx) copy is attached to this email.
        </p>
      </td>
    </tr>
    <tr>
      <td style="padding:0 32px 28px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #D7E8DD;border-radius:6px;overflow:hidden;background:#FAFDFB;">
          ${rowsHtml}
        </table>
      </td>
    </tr>
  `;

  return renderEmailShell(body);
}

export async function sendFormSubmissionEmail(
  payload: FormSubmissionPayload
): Promise<FormSubmissionResult> {
  const submissionId = createSubmissionId();
  const submittedAt = new Date().toISOString();
  const recipient = OFFICIAL_SUBMISSION_EMAIL;

  const excelBuffer = buildSubmissionExcelBuffer({
    formId: payload.formId,
    formTitle: payload.formTitle,
    submissionId,
    submittedAt,
    fields: payload.fields,
  });

  const slug = payload.formTitle
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  const filename = `${payload.formId}_${slug}_${submissionId}.xlsx`;
  const subject = `[${payload.formId}] ${payload.formTitle} (${submissionId})`;
  const adminHtml = buildAdminNotificationHtml({
    formId: payload.formId,
    formTitle: payload.formTitle,
    submissionId,
    submittedAt,
    fields: payload.fields,
  });

  // 1. SMTP Transport (Nodemailer)
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (smtpHost && smtpUser && smtpPass) {
    const port = Number(process.env.SMTP_PORT || 465);
    const secure = process.env.SMTP_SECURE
      ? process.env.SMTP_SECURE === "true"
      : port === 465;
    const fromAddress =
      process.env.SMTP_FROM || `Trekk Mobility <${smtpUser}>`;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port,
      secure,
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from: fromAddress,
      to: recipient,
      replyTo: payload.replyTo,
      subject,
      html: adminHtml,
      attachments: [
        {
          filename,
          content: excelBuffer,
          contentType:
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        },
      ],
    });

    if (payload.replyTo && payload.confirmationHtml && payload.confirmationSubject) {
      await transporter.sendMail({
        from: fromAddress,
        to: payload.replyTo,
        replyTo: recipient,
        subject: payload.confirmationSubject,
        html: payload.confirmationHtml,
      });
    }

    return { delivered: true, provider: "smtp", submissionId, recipient };
  }

  // 2. Resend REST API fallback
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    const fromAddress =
      process.env.RESEND_FROM || "Trekk Mobility <onboarding@resend.dev>";

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [recipient],
        reply_to: payload.replyTo,
        subject,
        html: adminHtml,
        attachments: [
          {
            filename,
            content: excelBuffer.toString("base64"),
          },
        ],
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Resend API error: ${errText}`);
    }

    return { delivered: true, provider: "resend", submissionId, recipient };
  }

  // 3. Graceful mock/log mode when email credentials are not yet configured
  console.log(
    `[Form Submission Mock -> ${recipient}] ${subject} | Attachment: ${filename} (${excelBuffer.byteLength} bytes)`
  );
  return { delivered: false, provider: "mock", submissionId, recipient };
}

