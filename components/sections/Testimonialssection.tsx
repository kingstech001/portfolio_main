import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import SectionHeading from "@/components/ui/SectionHeading";

/* ── Star rating ─────────────────────────────────────────────────────── */
function Stars({ count }: { count: number }) {
  return (
    <span className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          aria-hidden="true"
          className={i < count ? "text-[var(--accent)]" : "text-[var(--border-dark)]"}
        >
          <path
            d="M6 1l1.236 2.506L10 3.938l-2 1.949.472 2.752L6 7.25l-2.472 1.39L4 5.887 2 3.938l2.764-.432L6 1z"
            fill="currentColor"
          />
        </svg>
      ))}
    </span>
  );
}

/* ── Quote icon ──────────────────────────────────────────────────────── */
function QuoteIcon() {
  return (
    <svg
      width="36"
      height="28"
      viewBox="0 0 36 28"
      fill="none"
      aria-hidden="true"
      className="text-[var(--accent)] opacity-25"
    >
      <path
        d="M0 28V17.067C0 13.956.7 11.2 2.1 8.8 3.5 6.4 5.6 4.356 8.4 2.667L11.2 6.4C9.333 7.556 7.933 8.8 7 10.133c-.933 1.334-1.4 2.8-1.4 4.4H11.2V28H0zm19.6 0V17.067c0-3.111.7-5.867 2.1-8.267 1.4-2.4 3.5-4.444 6.3-6.133L30.8 6.4C28.933 7.556 27.533 8.8 26.6 10.133c-.933 1.334-1.4 2.8-1.4 4.4H30.8V28H19.6z"
        fill="currentColor"
      />
    </svg>
  );
}

/* ── Testimonial card ────────────────────────────────────────────────── */
function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  /* Alternate card backgrounds for visual rhythm */
  const elevated = index === 1;

  return (
    <article
      className={`flex flex-col gap-6 p-8 rounded-2xl border ${
        elevated
          ? "bg-[var(--ink)] border-[var(--ink)] text-white"
          : "bg-[var(--surface)] border-[var(--border)] text-[var(--ink)]"
      }`}
    >
      {/* Quote icon + stars row */}
      <div className="flex items-start justify-between">
        <QuoteIcon />
        <Stars count={testimonial.rating} />
      </div>

      {/* Quote */}
      <blockquote
        className={`flex-1 text-sm leading-relaxed ${
          elevated ? "text-white/75" : "text-[var(--ink-muted)]"
        }`}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <footer
        className={`flex items-center gap-3.5 pt-5 border-t ${
          elevated ? "border-white/10" : "border-[var(--border)]"
        }`}
      >
        <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 bg-[var(--cream-dark)]">
          <Image
            src={testimonial.avatarSrc}
            alt={`${testimonial.name} profile photo`}
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>
        <div>
          <p
            className={`text-sm font-semibold leading-tight ${
              elevated ? "text-white" : "text-[var(--ink)]"
            }`}
          >
            {testimonial.name}
          </p>
          <p
            className={`text-xs mt-0.5 ${
              elevated ? "text-white/45" : "text-[var(--ink-faint)]"
            }`}
          >
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </footer>
    </article>
  );
}

/* ── Section ──────────────────────────────────────────────────────────── */
const LOGOS = ["Stripe", "Netlify", "Attio", "Linear", "Vercel", "Loom"];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="section-padding bg-[var(--cream-dark)] relative overflow-hidden"
    >
      {/* Decorative circle */}
      <div
        className="pointer-events-none absolute -right-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[var(--border-dark)] opacity-30"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 top-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-[var(--border-dark)] opacity-20"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <SectionHeading
            eyebrow="Testimonials"
            heading="Straight from the source."
            subheading="What the people I've worked with actually say — not cherry-picked marketing copy."
            align="center"
          />
        </div>

        {/* Cards — middle card is visually elevated (dark) */}
        <div className="grid md:grid-cols-3 gap-5 items-start">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>

        {/* Company logos strip */}
        <div className="mt-16 pt-12 border-t border-[var(--border-dark)]">
          <p className="text-center text-[0.65rem] font-mono-var tracking-[0.2em] uppercase text-[var(--ink-faint)] mb-8">
            Companies I&apos;ve worked with
          </p>
          <div
            className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4"
            aria-label="Logos of companies Jordan has worked with"
          >
            {LOGOS.map((name) => (
              <span
                key={name}
                className="font-display text-xl text-[var(--ink-faint)] hover:text-[var(--ink-muted)] transition-colors select-none"
                aria-label={name}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}