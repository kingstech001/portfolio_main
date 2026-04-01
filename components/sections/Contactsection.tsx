"use client";

import { useState, useId, type FormEvent, type ChangeEvent } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

/* ─── Types ─────────────────────────────────────────────────────────── */
type FormFields = {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
};

type FieldError = Partial<Record<keyof FormFields, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const BUDGET_OPTIONS = [
  { value: "",          label: "Select a range…" },
  { value: "1k-5k",     label: "$1,000 - $5,000" },
  { value: "5k-15k",   label: "$5,000 - $15,000" },
  { value: "15k-50k",  label: "$15,000 - $50,000" },
  { value: "50k-plus", label: "$50,000+" },
  { value: "tbd",      label: "Let's discuss" },
];

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "mamahkingsleychukwuebuka@gmail.com",
    href: "mailto:mamahkingsleychukwuebuka@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M2.25 4.5h13.5v10.5H2.25V4.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
        <path d="M2.25 4.5 9 10.125l6.75-5.625" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/kingsley-mamah-830342263",
    href: "https://www.linkedin.com/in/kingsley-mamah-830342263/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M5.5 7.5v5M5.5 5.5v.01M8.5 12.5v-3a1.5 1.5 0 013 0v3M8.5 9.5v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Schedule a call",
    value: "cal.com/kingstech",
    href: "https://cal.com/kingstech",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="2.25" y="3" width="13.5" height="12.75" rx="2" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M2.25 7.5h13.5M6 1.5v3M12 1.5v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
] as const;

/* ─── Validation ─────────────────────────────────────────────────────── */
function validate(fields: FormFields): FieldError {
  const errors: FieldError = {};
  if (!fields.name.trim()) errors.name = "Name is required.";
  if (!fields.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!fields.message.trim()) errors.message = "Message is required.";
  if (fields.message.trim().length < 20)
    errors.message = "Message must be at least 20 characters.";
  return errors;
}

/* ─── Field components ───────────────────────────────────────────────── */
const inputBase =
  "w-full bg-[var(--cream)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-[var(--ink)] placeholder:text-[var(--ink-faint)] outline-none transition-all duration-200 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-glow)]";

const inputError =
  "border-red-400 focus:border-red-400 focus:ring-red-100";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="text-xs text-red-500 mt-1.5" role="alert">
      {message}
    </p>
  );
}

/* ─── Main section ───────────────────────────────────────────────────── */
export default function ContactSection() {
  const uid = useId();

  const [fields, setFields] = useState<FormFields>({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors]   = useState<FieldError>({});
  const [status, setStatus]   = useState<Status>("idle");
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>({});

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    // Clear error on change if field was already touched
    if (touched[name as keyof FormFields]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleBlur(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldErrors = validate(fields);
    setErrors((prev) => ({ ...prev, [name]: fieldErrors[name as keyof FormFields] }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // Validate all
    const allErrors = validate(fields);
    setErrors(allErrors);
    setTouched({ name: true, email: true, message: true, budget: true, company: true });

    if (Object.keys(allErrors).length > 0) return;

    setStatus("submitting");

    try {
      // Replace with your API route or service (Resend, Formspree, etc.)
      await new Promise((resolve) => setTimeout(resolve, 1800));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  /* ── Success state ─────────────────────────────────────────────────── */
  if (status === "success") {
    return (
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="section-padding bg-[var(--surface)]"
      >
        <div className="max-w-xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-[var(--green)]/10 border border-[var(--green)]/20 flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path d="M6 14.5l5.5 5.5L22 9" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-display text-4xl text-[var(--ink)]">Message sent.</h2>
            <p className="text-[var(--ink-muted)] text-base">
              Thanks for reaching out! I&apos;ll get back to you within 1-2 business days.
            </p>
          </div>
          <button
            onClick={() => {
              setStatus("idle");
              setFields({ name: "", email: "", company: "", budget: "", message: "" });
              setTouched({});
              setErrors({});
            }}
            className="text-sm text-[var(--accent)] link-underline hover:text-[var(--accent)] cursor-pointer"
          >
            Send another message
          </button>
        </div>
      </section>
    );
  }

  /* ── Main form ─────────────────────────────────────────────────────── */
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-padding bg-[var(--surface)] relative overflow-hidden"
    >
      {/* Decorative ink background blob */}
      <div
        className="pointer-events-none absolute -left-32 bottom-0 w-96 h-96 rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 xl:gap-20 items-start">

          {/* ── Left column ──────────────────────────────────────── */}
          <div className="flex flex-col gap-10">
            <SectionHeading
              eyebrow="Contact"
              heading="Let's work together."
              subheading="Tell me about your project. I'll respond with honest thoughts and, if we're a fit, a proposed next step."
            />

            {/* Contact links */}
            <ul className="flex flex-col gap-3" role="list" aria-label="Contact options">
              {CONTACT_LINKS.map(({ label, value, href, icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--cream)] hover:border-[var(--accent)] hover:bg-[var(--cream-dark)] transition-all duration-200 group"
                  >
                    <span className="w-9 h-9 rounded-lg bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--ink-muted)] group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] transition-all duration-200 shrink-0">
                      {icon}
                    </span>
                    <div>
                      <p className="text-[0.65rem] font-mono-var tracking-widest uppercase text-[var(--ink-faint)] mb-0.5">
                        {label}
                      </p>
                      <p className="text-sm text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">
                        {value}
                      </p>
                    </div>
                    <span className="ml-auto text-[var(--ink-faint)] group-hover:text-[var(--accent)] transition-colors" aria-hidden="true">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Availability note */}
            <div className="flex items-start gap-3 p-4 rounded-xl border border-[var(--green)]/20 bg-[var(--green)]/5">
              <span
                className="block w-2 h-2 rounded-full bg-[var(--green)] mt-1.5 shrink-0"
                style={{ boxShadow: "0 0 0 3px rgba(61,122,86,0.2)" }}
                aria-hidden="true"
              />
              <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
                <span className="font-medium text-[var(--green)]">Currently available</span> for new
                projects starting{" "}
                <span className="text-[var(--ink)]">immediately</span>. Typical response time is{" "}
                <span className="text-[var(--ink)]">under 24 hours</span>.
              </p>
            </div>
          </div>

          {/* ── Form ─────────────────────────────────────────────── */}
          <form
            onSubmit={handleSubmit}
            noValidate
            aria-label="Contact form"
            className="bg-[var(--cream)] border border-[var(--border)] rounded-2xl p-7 sm:p-9 flex flex-col gap-5"
          >
            {/* Name + Email */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor={`${uid}-name`}
                  className="text-[0.65rem] font-mono-var tracking-[0.16em] uppercase text-[var(--ink-muted)]"
                >
                  Name <span className="text-[var(--accent)]" aria-hidden="true">*</span>
                </label>
                <input
                  id={`${uid}-name`}
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Jane Smith"
                  value={fields.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? `${uid}-name-error` : undefined}
                  className={`${inputBase} ${errors.name ? inputError : ""}`}
                />
                <FieldError message={errors.name} />
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor={`${uid}-email`}
                  className="text-[0.65rem] font-mono-var tracking-[0.16em] uppercase text-[var(--ink-muted)]"
                >
                  Email <span className="text-[var(--accent)]" aria-hidden="true">*</span>
                </label>
                <input
                  id={`${uid}-email`}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="jane@company.com"
                  value={fields.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? `${uid}-email-error` : undefined}
                  className={`${inputBase} ${errors.email ? inputError : ""}`}
                />
                <FieldError message={errors.email} />
              </div>
            </div>

            {/* Company + Budget */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor={`${uid}-company`}
                  className="text-[0.65rem] font-mono-var tracking-[0.16em] uppercase text-[var(--ink-muted)]"
                >
                  Company <span className="text-[var(--ink-faint)]">(optional)</span>
                </label>
                <input
                  id={`${uid}-company`}
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Acme Inc."
                  value={fields.company}
                  onChange={handleChange}
                  className={inputBase}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor={`${uid}-budget`}
                  className="text-[0.65rem] font-mono-var tracking-[0.16em] uppercase text-[var(--ink-muted)]"
                >
                  Budget range
                </label>
                <select
                  id={`${uid}-budget`}
                  name="budget"
                  value={fields.budget}
                  onChange={handleChange}
                  className={`${inputBase} cursor-pointer`}
                >
                  {BUDGET_OPTIONS.map(({ value, label }) => (
                    <option key={value} value={value} disabled={value === ""}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor={`${uid}-message`}
                className="text-[0.65rem] font-mono-var tracking-[0.16em] uppercase text-[var(--ink-muted)]"
              >
                Message <span className="text-[var(--accent)]" aria-hidden="true">*</span>
              </label>
              <textarea
                id={`${uid}-message`}
                name="message"
                required
                rows={5}
                placeholder="Tell me what you're building, where you are in the process, and what kind of help you're looking for…"
                value={fields.message}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? `${uid}-message-error` : undefined}
                className={`${inputBase} resize-none leading-relaxed ${errors.message ? inputError : ""}`}
              />
              <div className="flex items-start justify-between">
                <FieldError message={errors.message} />
                <span className="text-xs text-[var(--ink-faint)] ml-auto tabular-nums">
                  {fields.message.length} / 1000
                </span>
              </div>
            </div>

            {/* Error banner */}
            {status === "error" && (
              <p
                role="alert"
                className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3"
              >
                Something went wrong. Please try again or email me directly at{" "}
                <a
                  href="mailto:hello@jordanreeves.dev"
                  className="underline font-medium"
                >
                  mamahkingsleychukwuebuka@gmail.com
                </a>
                .
              </p>
            )}

            {/* Submit */}
            <div className="flex flex-col gap-3 mt-1">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={status === "submitting"}
                aria-disabled={status === "submitting"}
              >
                {status === "submitting" ? (
                  <>
                    <svg
                      className="animate-spin w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle
                        cx="12" cy="12" r="10"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="opacity-25"
                      />
                      <path
                        d="M4 12a8 8 0 018-8"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                    Sending…
                  </>
                ) : (
                  "Send message →"
                )}
              </Button>

              <p className="text-center text-xs text-(--ink-faint)">
                No spam, no newsletters. Just a direct reply from me.
              </p>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}