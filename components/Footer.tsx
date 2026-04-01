import Link from "next/link";

const SOCIALS = [
  { label: "GitHub",   href: "https://github.com/jordanreeves",        abbr: "GH" },
  { label: "LinkedIn", href: "https://linkedin.com/in/jordanreeves",   abbr: "LI" },
  { label: "Twitter",  href: "https://twitter.com/jordanreeves",       abbr: "TW" },
  { label: "Email",    href: "mailto:hello@jordanreeves.dev",          abbr: "@" },
] as const;

const NAV = [
  { label: "About",        href: "#about" },
  { label: "Services",     href: "#services" },
  { label: "Projects",     href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact",      href: "#contact" },
] as const;

export default function Footer() {
  return (
    <footer
      className="bg-(--ink) text-(--cream) relative overflow-hidden"
      aria-label="Site footer"
    >
      {/* Decorative large wordmark */}
      <div
        className="absolute -bottom-10 -right-4 font-display text-[clamp(8rem,20vw,18rem)] leading-none select-none pointer-events-none opacity-[0.04] text-white"
        aria-hidden="true"
      >
        kings.
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-10 relative z-10">
        {/* Top grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="font-display text-2xl text-white hover:text-(--accent-warm) transition-colors">
              kings<span className="text-(--accent-warm)">.</span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Full-stack developer building thoughtful products at the intersection of
              great engineering and great design.
            </p>
            <div className="flex items-center gap-2">
              <span className="block w-2 h-2 rounded-full bg-(--accent-warm) animate-pulse" aria-hidden="true" />
              <span className="text-xs text-white/40">Available for new projects</span>
            </div>
          </div>

          {/* Site nav */}
          <nav aria-label="Footer navigation">
            <p className="text-[0.65rem] font-mono-var tracking-[0.18em] uppercase text-white/30 mb-4">
              Navigate
            </p>
            <ul className="flex flex-col gap-2" role="list">
              {NAV.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/55 hover:text-white transition-colors link-underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div>
            <p className="text-[0.65rem] font-mono-var tracking-[0.18em] uppercase text-white/30 mb-4">
              Connect
            </p>
            <ul className="flex flex-col gap-2" role="list">
              {SOCIALS.map(({ label, href, abbr }) => (
                <li key={href}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 text-sm text-white/55 hover:text-white group transition-colors"
                  >
                    <span className="font-mono-var text-[0.6rem] bg-white/10 group-hover:bg-(--accent-warm) group-hover:text-white text-white/50 rounded px-1.5 py-0.5 transition-all">
                      {abbr}
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between gap-3 items-start sm:items-center">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} kings. All rights reserved.
          </p>
          <p className="text-xs text-white/25">
            Built with{" "}
            <span className="text-white/45">Next.js</span>,{" "}
            <span className="text-white/45">TypeScript</span> &{" "}
            <span className="text-white/45">Tailwind CSS&nbsp;v4</span>
          </p>
        </div>
      </div>
    </footer>
  );
}