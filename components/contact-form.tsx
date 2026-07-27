"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

type Fields = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const EMPTY: Fields = { firstName: "", lastName: "", email: "", phone: "", message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(f: Fields): Partial<Record<keyof Fields, string>> {
  const e: Partial<Record<keyof Fields, string>> = {};
  if (!f.firstName.trim()) e.firstName = "First name is required.";
  if (!f.lastName.trim()) e.lastName = "Last name is required.";
  if (!f.email.trim()) e.email = "Email is required.";
  else if (!EMAIL_RE.test(f.email.trim())) e.email = "Enter a valid email.";
  if (!f.message.trim()) e.message = "Please tell us how we can help.";
  return e;
}

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formError, setFormError] = useState<string | null>(null);

  const set = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((prev) => ({ ...prev, [key]: e.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    const clientErrors = validate(fields);
    if (Object.keys(clientErrors).length) {
      setErrors(clientErrors);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.ok) {
        setStatus("success");
        setFields(EMPTY);
        return;
      }
      if (res.status === 422 && data.errors) {
        setErrors(data.errors);
        setStatus("idle");
        return;
      }
      throw new Error(data.error || "Something went wrong.");
    } catch (err) {
      setStatus("error");
      setFormError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  if (status === "success") {
    return (
      <div
        className="flex flex-col items-start gap-4 border p-8"
        style={{ borderColor: "var(--color-forest)", background: "var(--color-paper)" }}
      >
        <span
          className="inline-flex h-11 w-11 items-center justify-center rounded-full"
          style={{ background: "var(--color-forest)", color: "var(--color-linen)" }}
        >
          <Check size={20} />
        </span>
        <h3 className="font-serif text-[1.6rem] leading-tight">Thank you — we've got it.</h3>
        <p className="text-[0.98rem] leading-relaxed text-[var(--color-ink-soft)] max-w-[46ch]">
          Megha personally reads incoming messages and will get back to you within
          one business day. If it&apos;s urgent, call{" "}
          <a href="tel:+12406763079" className="underline underline-offset-2 hover:text-[var(--color-forest)]">
            240-676-3079
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn btn-ghost mt-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <Field
        id="firstName"
        label="First name"
        value={fields.firstName}
        onChange={set("firstName")}
        error={errors.firstName}
        autoComplete="given-name"
        required
      />
      <Field
        id="lastName"
        label="Last name"
        value={fields.lastName}
        onChange={set("lastName")}
        error={errors.lastName}
        autoComplete="family-name"
        required
      />
      <Field
        id="email"
        label="Email"
        type="email"
        value={fields.email}
        onChange={set("email")}
        error={errors.email}
        autoComplete="email"
        required
        className="sm:col-span-2"
      />
      <Field
        id="phone"
        label="Phone"
        type="tel"
        value={fields.phone}
        onChange={set("phone")}
        error={errors.phone}
        autoComplete="tel"
        optional
        className="sm:col-span-2"
      />

      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-2 block text-[0.88rem] font-medium">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={fields.message}
          onChange={set("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="input resize-y"
          placeholder="Tell us a little about what's going on and what you're hoping to find."
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-[0.82rem] text-[#a8382e]">
            {errors.message}
          </p>
        )}
      </div>

      <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" disabled={status === "submitting"} className="btn btn-primary disabled:opacity-60">
          {status === "submitting" ? "Sending…" : "Send message"}
          {status !== "submitting" && <ArrowRight size={16} />}
        </button>
        {formError && (
          <p role="alert" className="text-[0.86rem] text-[#a8382e]">
            {formError}
          </p>
        )}
        <p className="text-[0.78rem] text-[var(--color-ink-muted)] sm:ml-auto">
          We reply within one business day.
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
  required,
  optional,
  className,
}: {
  id: keyof Fields;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  optional?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-[0.88rem] font-medium">
        {label}
        {optional && <span className="ml-1.5 text-[0.78rem] text-[var(--color-ink-muted)]">(optional)</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className="input"
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-[0.82rem] text-[#a8382e]">
          {error}
        </p>
      )}
    </div>
  );
}
