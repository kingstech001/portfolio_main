import SectionHeading from "@/components/ui/SectionHeading";

type Skill = { name: string; level: 1 | 2 | 3 };
type Category = { label: string; color: string; skills: Skill[] };

const CATEGORIES: Category[] = [
  {
    label: "Frontend",
    color: "#c9622f",
    skills: [
      { name: "React", level: 3 },
      { name: "Next.js", level: 3 },
      { name: "TypeScript", level: 3 },
      { name: "Tailwind CSS", level: 3 },
      { name: "Framer Motion", level: 3 },
      { name: "shadcn/ui", level: 3 },
      { name: "Zustand", level: 2 },
    ],
  },
  {
    label: "Backend",
    color: "#b89a5a",
    skills: [
      { name: "Python", level: 2 },
      { name: "Next.js App Router", level: 3 },
      { name: "tRPC", level: 2 },
      { name: "REST APIs", level: 2 },
      { name: "WebSockets", level: 1 },
    ],
  },
  {
    label: "Data",
    color: "#3d7a56",
    skills: [
      { name: "PostgreSQL", level: 3 },
      { name: "Redis", level: 2 },
      { name: "Prisma", level: 3 },
      { name: "Drizzle ORM", level: 3 },
      { name: "MongoDB", level: 2 },
      { name: "ClickHouse", level: 1 },
      { name: "SQLite", level: 2 },
    ],
  },
  {
    label: "Infra & Tooling",
    color: "#7c5cbf",
    skills: [
      { name: "Vercel /Netlify", level: 3 },
      { name: "GitHub Actions", level: 3 },
    ],
  },
];

const LEVEL_LABELS: Record<1 | 2 | 3, string> = {
  3: "Expert",
  2: "Proficient",
  1: "Familiar",
};

export default function TechStackSection() {
  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="section-padding bg-[var(--cream-dark)] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <SectionHeading eyebrow="Tech stack" heading="Tools of the trade." />
          {/* Legend */}
          <div className="flex items-center gap-5 shrink-0">
            {([3, 2, 1] as const).map((lvl) => (
              <div key={lvl} className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {[1, 2, 3].map((dot) => (
                    <span
                      key={dot}
                      className="block w-1.5 h-1.5 rounded-full"
                      style={{
                        background:
                          dot <= lvl
                            ? "var(--ink-muted)"
                            : "var(--border-dark)",
                      }}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <span className="text-xs text-[var(--ink-faint)] font-mono-var">
                  {LEVEL_LABELS[lvl]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Category grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.label}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 flex flex-col gap-5"
            >
              {/* Category header */}
              <div className="flex items-center gap-2.5">
                <span
                  className="block w-2.5 h-2.5 rounded-full"
                  style={{ background: cat.color }}
                  aria-hidden="true"
                />
                <h3 className="font-mono-var text-xs tracking-[0.14em] uppercase text-[var(--ink-muted)]">
                  {cat.label}
                </h3>
              </div>

              {/* Skill list */}
              <ul className="flex flex-col gap-3" role="list">
                {cat.skills.map(({ name, level }) => (
                  <li
                    key={name}
                    className="flex items-center justify-between gap-2"
                  >
                    <span className="text-sm text-[var(--ink)]">{name}</span>
                    <span
                      className="flex gap-0.5 shrink-0"
                      aria-label={`${name}: ${LEVEL_LABELS[level]}`}
                    >
                      {([1, 2, 3] as const).map((dot) => (
                        <span
                          key={dot}
                          className="block w-1.5 h-1.5 rounded-full transition-colors"
                          style={{
                            background:
                              dot <= level ? cat.color : "var(--border-dark)",
                          }}
                          aria-hidden="true"
                        />
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-center text-xs text-[var(--ink-faint)] mt-10 font-mono-var">
          Stack evolves constantly — these reflect my current primary tools.
        </p>
      </div>
    </section>
  );
}
