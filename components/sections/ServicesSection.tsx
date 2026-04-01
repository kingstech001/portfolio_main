import SectionHeading from "@/components/ui/SectionHeading";

type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  offerings: string[];
  accent: string;
};

const SERVICES: Service[] = [
  {
    id: "fullstack",
    number: "01",
    title: "Full-Stack Development",
    description:
      "End-to-end product engineering. I take ownership from the database schema to the last CSS transition — no hand-offs, no silos.",
    offerings: [
      "React, Next.js & Tanstack stack frontends",
      "Python / App router backends with tRPC or REST",
      "PostgreSQL, Redis data layer",
      "Auth, billing, notifications",
    ],
    accent: "#c9622f",
  },
  {
    id: "architecture",
    number: "02",
    title: "Technical Architecture",
    description:
      "Upfront architecture decisions save months. I design systems that grow with your business without requiring a rewrite at scale.",
    offerings: [
      "System design & ADRs",
      "Database modelling",
      "API contract design",
      "Cloud infrastructure (AWS, Fly.io)",
    ],
    accent: "#b89a5a",
  },
  {
    id: "performance",
    number: "03",
    title: "Performance Engineering",
    description:
      "Speed is a product feature. I audit, profile, and optimise applications so they stay snappy as traffic and complexity grow.",
    offerings: [
      "Core Web Vitals optimisation",
      "Query & index tuning",
      "CDN & caching strategy",
      "Load testing & alerting",
    ],
    accent: "#3d7a56",
  },
  {
    id: "devex",
    number: "04",
    title: "Developer Experience",
    description:
      "Better internal tooling, cleaner component APIs, and CI/CD pipelines that make your whole team faster — not just you.",
    offerings: [
      "Component library development",
      "Codebase audits & refactors",
      "CI/CD & deployment pipelines",
      "Documentation & knowledge base",
    ],
    accent: "#7c5cbf",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-padding bg-[var(--cream)]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="Services"
            heading="What I can do for you."
          />
          <p className="text-[var(--ink-muted)] max-w-sm leading-relaxed lg:text-right text-sm">
            I work best as a technical partner who understands the product, not just
            a contractor executing tickets.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 gap-px bg-[var(--border)] rounded-2xl overflow-hidden border border-[var(--border)]">
          {SERVICES.map((s, i) => (
            <article
              key={s.id}
              className="bg-[var(--surface)] p-8 flex flex-col gap-6 group hover:bg-[var(--cream)] transition-colors duration-200 relative overflow-hidden"
            >
              {/* Top accent bar */}
              <span
                className="absolute top-0 left-8 w-10 h-[3px] rounded-b-full transition-all duration-300 group-hover:w-20"
                style={{ background: s.accent }}
                aria-hidden="true"
              />

              {/* Number */}
              <span
                className="font-mono-var text-[0.65rem] tracking-[0.18em] uppercase"
                style={{ color: s.accent }}
                aria-hidden="true"
              >
                {s.number}
              </span>

              {/* Title + desc */}
              <div className="flex flex-col gap-3">
                <h3 className="font-display text-2xl text-[var(--ink)] leading-snug">
                  {s.title}
                </h3>
                <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
                  {s.description}
                </p>
              </div>

              {/* Offering list */}
              <ul className="flex flex-col gap-2 mt-auto" role="list">
                {s.offerings.map((o) => (
                  <li
                    key={o}
                    className="flex items-center gap-2.5 text-sm text-[var(--ink-muted)]"
                  >
                    <span
                      className="shrink-0 w-1 h-1 rounded-full"
                      style={{ background: s.accent }}
                      aria-hidden="true"
                    />
                    {o}
                  </li>
                ))}
              </ul>

              {/* Index watermark */}
              <span
                className="absolute bottom-5 right-6 font-display text-7xl leading-none select-none pointer-events-none opacity-[0.04] transition-opacity group-hover:opacity-[0.06]"
                aria-hidden="true"
              >
                {i + 1}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}