import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const HIGHLIGHTS = [
  {
    emoji: "🎓",
    title: "HND Computer Science",
    sub: "Institution of management and technology Enugu State Nigeria, 2017",
  },
  {
    emoji: "🏢",
    title: "Startup & Freelance Experience",
    sub: "3 yrs building web apps and scaling projects",
  },
  { emoji: "🌍", title: "Remote-first", sub: "Based in Nigeria, WAT (UTC+1)" },
  { emoji: "⚡", title: "MVP in 4-6 weeks", sub: "Design → prod, no fluff" },
] as const;

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-padding bg-[var(--surface)] relative overflow-hidden"
    >
      {/* Subtle diagonal accent */}
      <div
        className="absolute inset-y-0 right-0 w-1/2 pointer-events-none opacity-[0.03]"
        style={{
          background:
            "repeating-linear-gradient(-55deg, var(--ink) 0 1px, transparent 1px 48px)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* ── Image column ─────────────────────────────────── */}
          <div className="relative order-2 lg:order-1">
            {/* Offset border frame */}
            <div
              className="absolute -inset-3 rounded-3xl border border-[var(--border-dark)] opacity-40"
              aria-hidden="true"
              style={{ transform: "rotate(-1.5deg)" }}
            />
            {/* Second frame */}
            <div
              className="absolute -inset-1.5 rounded-3xl border border-[var(--border)]"
              aria-hidden="true"
              style={{ transform: "rotate(0.8deg)" }}
            />

            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--cream-dark)]">
              <Image
                src="/kings.png"
                alt="Jordan Reeves — smiling at camera in a studio setting"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
              {/* Bottom gradient scrim */}
              <div
                className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(26,24,20,0.45) 0%, transparent 100%)",
                }}
                aria-hidden="true"
              />
              {/* Year chip */}
              <span className="absolute bottom-4 left-4 font-mono-var text-white/70 text-xs tracking-widest uppercase">
                Since 2017
              </span>
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-[var(--ink)] text-white rounded-2xl px-5 py-4 shadow-2xl animate-float">
              <p className="font-display text-3xl leading-none">5</p>
              <p className="text-xs text-white/50 mt-1 font-mono-var tracking-wider uppercase">
                Projects shipped
              </p>
            </div>
          </div>

          {/* ── Text column ──────────────────────────────────── */}
          <div className="order-1 lg:order-2 flex flex-col gap-8">
            <SectionHeading
              eyebrow="About me"
              heading="I think before I type."
              subheading="Too many projects fail because someone started coding before understanding the problem. I spend time on the hard questions — so the answers in code are clean."
            />

            <div className="flex flex-col gap-4 text-[var(--ink-muted)] leading-relaxed">
              <p>
                I&apos;ve spent three years building products — from internal
                tools at early-stage startups to customer-facing SaaS platforms
                at companies like
                <strong className="text-[var(--ink)] font-medium">
                  {" "}
                  Stripe
                </strong>{" "}
                and
                <strong className="text-[var(--ink)] font-medium">
                  {" "}
                  Netlify
                </strong>
                . I&apos;ve worked across the entire stack: database design, API
                architecture, React frontends, and the DevOps glue in between.
              </p>
              <p>
                I went independent in 2022 because I wanted to work directly
                with founders and product teams — cutting through the layers of
                abstraction and shipping things that actually matter to real
                users.
              </p>
            </div>

            {/* Highlight grid */}
            <ul
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2"
              role="list"
              aria-label="Quick facts"
            >
              {HIGHLIGHTS.map(({ emoji, title, sub }) => (
                <li
                  key={title}
                  className="flex items-start gap-3 p-4 rounded-xl border border-[var(--border)] bg-[var(--cream)] hover:border-[var(--border-dark)] transition-colors"
                >
                  <span
                    className="text-xl leading-none mt-0.5"
                    role="img"
                    aria-hidden="true"
                  >
                    {emoji}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[var(--ink)] leading-tight">
                      {title}
                    </p>
                    <p className="text-xs text-[var(--ink-faint)] mt-0.5">
                      {sub}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 mt-2">
              <Button href="/Kingsley-Frontend-developer-resume.pdf" download="Kingsley-Frontend-developer-resume.pdf" variant="secondary" size="md">
                Download CV
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M7 1v7m0 0-3-3m3 3 3-3M1 10v1a2 2 0 002 2h8a2 2 0 002-2v-1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
              <Button
                href="https://github.com/kingstech001"
                external
                variant="ghost"
                size="md"
              >
                GitHub profile ↗
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
