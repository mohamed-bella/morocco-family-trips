"use client";

import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/site";

export default function EmailContact({ subject = "Morocco family trip enquiry" }: { subject?: string }) {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "unavailable">("idle");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("unavailable");
    }
  }

  return (
    <div className="email-contact">
      <h2>Send us an email</h2>
      <p>Tell us your travel dates, how many adults are coming, and the children’s ages. If you have a route in mind, include it in your message.</p>
      <div className="email-contact-actions">
        <a className="email-contact-address" href={"mailto:" + CONTACT_EMAIL + "?subject=" + encodeURIComponent(subject)}>
          <Mail size={19} aria-hidden="true" />
          <span>{CONTACT_EMAIL}</span>
        </a>
        <button className="button button-outline" type="button" onClick={copyEmail}>
          {copyStatus === "copied" ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
          Copy email
        </button>
      </div>
      <p className="email-copy-status" role="status">
        {copyStatus === "copied" && "Email address copied."}
        {copyStatus === "unavailable" && "Copying is unavailable in this browser. Select the address above to copy it, or click it to open your email app."}
      </p>
    </div>
  );
}
