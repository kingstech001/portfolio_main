import SectionHeading from "@/components/ui/SectionHeading";

type Step = {
  number: string;
  title: string;
  description: string;
  duration: string;
};

const STEPS: Step[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We spend 1–2 hours mapping your goals, constraints, users, and what success looks like. I ask a lot of questions — the uncomfortable ones too.",
    duration: "1–2 days",
  },
  {
    number: "02",
    title: "Scope & proposal",
    description:
      "A clear written document: what we're building, what we're not, timeline, milestones, and pricing. Nothing ambiguous, no hidden upsells.",
    duration: "2–3 days",
  },
  {
    number: "03",
    title: "Design & architecture",
    description:
      "Before touching production code, we align on data models, component structure, API contracts, and UX flows. Cheap to change here; expensive later.",
    duration: "3–7 days",
  },
  {
    number: "04",
    title: "Build",
    description:
      "Iterative development with weekly demos and a shared staging environment. You see real progress every week and can redirect at any point.",
    duration: "2–8 weeks",
  },
  {
    number: "05",
    title: "QA & launch",
    description:
      "End-to-end testing, cross-browser checks, performance audit, and a staged rollout. I don't rush launches.",
    duration: "3–5 days",
  },
  {
    number: "06",
    title: "Handover & support",
    description:
      "Full documentation, recorded walkthroughs, and a 30-day support window. You'll be self-sufficient — or we agree on ongoing retainer terms.",
    duration: "Ongoing",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="section-padding bg-[var(--surface)] relative overflow-hidden"
    >
      {/* Large background text */}
      <div
        className="pointer-events-none absolute -top-6 right-[-2rem] font-display text-[clamp(8rem,18vw,16rem)] leading-none text-[var(--ink)] opacity-[0.025] select-none"
        aria-hidden="true"
      >
        Process
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:gap-16 xl:gap-24 gap-12">

          {/* Sticky left panel */}
          <div className="lg:sticky lg:top-28 lg:self-start lg:w-72 xl:w-80 shrink-0">
            <SectionHeading
              eyebrow="How I work"
              heading="A process built around clarity."
              subheading="No black-box sprints. You'll always know the status, the next step, and why decisions were made."
            />
          </div>

          {/* Steps */}
          <ol className="flex-1 flex flex-col divide-y divide-[var(--border)]" role="list">
            {STEPS.map((step, i) => (
              <li
                key={step.number}
                className="flex flex-col sm:flex-row gap-5 py-8 group"
              >
                {/* Number */}
                <span
                  className="font-mono-var text-[0.65rem] tracking-[0.18em] uppercase text-[var(--accent)] shrink-0 w-10 mt-1"
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                {/* Content */}
                <div className="flex flex-col gap-2 flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl text-[var(--ink)]">
                      {step.title}
                    </h3>
                    <span className="font-mono-var text-xs text-[var(--ink-faint)] bg-[var(--cream)] border border-[var(--border)] px-2.5 py-1 rounded-full shrink-0">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Animated accent line (right edge on hover) */}
                <div
                  className="hidden sm:block w-[2px] self-stretch bg-[var(--border)] rounded-full group-hover:bg-[var(--accent)] transition-colors duration-300"
                  aria-hidden="true"
                />
              </li>
            ))}
          </ol>

        </div>
      </div>
    </section>
  );
}