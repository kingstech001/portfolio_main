import Image from "next/image";
import Button from "@/components/ui/Button";
import {
  MdOutlineDoubleArrow,
  MdOutlineKeyboardDoubleArrowDown,
} from "react-icons/md";

const STATS = [
  { value: "3+", label: "years experience" },
  { value: "5+", label: "projects shipped" },
  { value: "5+", label: "happy clients" },
  { value: "99%", label: "on-time delivery" },
] as const;

const MARQUEE_ITEMS = [
  "Next.js",
  "TypeScript",
  "React",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Tailwind",
];

export default function HeroSection() {
  return (
    <section
      id="main-content"
      aria-label="Hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* ── Background image (z-0) ────────────────────────────────── */}
      <Image
        src="/kings2.png"
        alt=""
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden="true"
      />

      {/* ── Overlay stack (z-10 → z-30) ──────────────────────────── */}
      {/* Base dark wash */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: "rgba(10, 9, 7, 0.80)" }}
        aria-hidden="true"
      />
      {/* Top vignette */}
      <div
        className="absolute inset-x-0 top-0 h-40 z-20"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,9,7,0.5) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      {/* Bottom fade into next section */}
      <div
        className="absolute inset-x-0 bottom-0 h-48 z-20"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(10,9,7,0.55) 55%, var(--cream) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Accent radial glow */}
      <div
        className="pointer-events-none absolute top-1/3 right-[-6vw] w-[min(560px,55vw)] aspect-square rounded-full z-20 opacity-20"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 68%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />

      {/* ── All content lives at z-30+ so it's above every overlay ── */}
      <div className="relative z-30 max-w-6xl mx-auto px-5 sm:px-8 pt-36 pb-24 w-full">
        {/* Availability chip */}
        <div className="inline-flex items-center gap-2.5 mb-10 px-4 py-2 rounded-full border border-white/15 bg-white/8 backdrop-blur-sm text-sm text-white/75 animate-fade-up">
          <span
            className="block w-2 h-2 rounded-full bg-[var(--green)]"
            style={{ boxShadow: "0 0 0 3px rgba(61,122,86,0.35)" }}
            aria-hidden="true"
          />
          Open to freelance &amp; contract roles
        </div>

        {/* Headline */}
        <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[1.03] tracking-tight text-white max-w-4xl animate-fade-up delay-75">
          I build software
          <br />
          <em className="not-italic text-[var(--accent-warm)]">
            people love
          </em>{" "}
          to use.
        </h1>

        {/* Sub-copy */}
        <p className="mt-7 text-lg sm:text-xl text-white/60 max-w-xl leading-relaxed animate-fade-up delay-150">
          Hi, I&apos;m{" "}
          <strong className="font-medium text-white">Kings Tech</strong> — a
          software developer who cares about clean architecture, fast
          interfaces, and products that actually ship.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-3 animate-fade-up delay-225">
          <Button href="#projects" size="lg" variant="primary">
            View projects
            <MdOutlineDoubleArrow />
          </Button>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 h-12 px-8 text-base font-medium rounded-full border border-white/25 text-white/85 hover:bg-white/10 hover:border-white/40 hover:text-white transition-all duration-200 cursor-pointer"
          >
            Start a project
            <MdOutlineKeyboardDoubleArrowDown className="animate-bounce" />
          </a>
        </div>

        {/* Stats row */}
        <dl className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 animate-fade-up delay-300">
          {STATS.map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <dt className="font-display text-4xl sm:text-5xl text-white leading-none text-center sm:text-left">
                {value}
              </dt>
              <dd className="text-xs sm:text-sm text-white/40 uppercase tracking-widest font-mono-var text-center sm:text-left">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* ── Marquee strip — z-30 so it's above all overlays ─────── */}
      <div
        className="relative z-30 border-t border-white/15 bg-black/40 backdrop-blur-sm py-3 overflow-hidden"
        aria-hidden="true"
      >
        <div className="flex animate-marquee gap-8 whitespace-nowrap w-max">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-8 font-mono-var text-xs tracking-widest uppercase text-white/80"
            >
              {item}
              <span className="text-[var(--accent-warm)] text-base leading-none">
                ·
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
