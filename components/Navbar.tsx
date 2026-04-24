"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { IoIosFolderOpen } from "react-icons/io";
import { LuSparkles } from "react-icons/lu";
import { FaUserSecret } from "react-icons/fa";

const NAV_LINKS = [
  { label: "About", href: "#about", icons: <FaUserSecret /> },
  { label: "Skills", href: "#stack", icons: <LuSparkles /> },
  { label: "Projects", href: "#projects", icons: <IoIosFolderOpen /> },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = () => {
      if (mq.matches) closeMenu();
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [closeMenu]);

  return (
    <>
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[var(--accent)] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to main content
      </a>

      {/* ── Outer header — full width, fixed ──────────────────────────── */}
      <header
        role="banner"
        className="fixed top-0 inset-x-0 z-50 flex justify-center pointer-events-none"
        style={{
          paddingTop: scrolled ? "0.75rem" : "1.25rem",
          transition: "padding 0.35s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {/* ── The pill ──────────────────────────────────────────────────── */}
        <div
          className={`
            pointer-events-auto w-full mx-4 sm:mx-8 max-w-6xl
            rounded-2xl border
            transition-all duration-350
            ${
              scrolled
                ? "border-[var(--border-dark)] shadow-[0_8px_32px_rgba(26,24,20,0.12),0_1px_0_rgba(255,255,255,0.6)_inset]"
                : "border-[var(--border)] shadow-[0_2px_12px_rgba(26,24,20,0.06)]"
            }
          `}
          style={{
            background: scrolled
              ? "rgba(245,242,235,0.82)"
              : "rgba(245,242,235,0.72)",
            backdropFilter: "blur(16px) saturate(1.6)",
            WebkitBackdropFilter: "blur(16px) saturate(1.6)",
          }}
        >
          <nav
            className="flex items-center justify-between px-4 sm:px-5 h-13"
            aria-label="Main navigation"
          >
            {/* Wordmark */}
            <Link
              href="/"
              onClick={closeMenu}
              className="font-display text-lg text-[var(--ink)] hover:text-[var(--accent)] transition-colors duration-200 shrink-0"
              aria-label="Kings — home"
            >
              kings<span className="text-[var(--accent)]">.</span>
            </Link>

            {/* ── Desktop centre links ─────────────────────────────────── */}
            <ul
              className="hidden md:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2"
              role="list"
            >
              {NAV_LINKS.map(({ label, href, icons }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="flex items-center relative px-3.5 py-1.5 text-sm font-medium text-[var(--ink-muted)] hover:text-[var(--ink)] rounded-xl transition-colors duration-200 group"
                  >
                    {icons && (
                      <span className="relative z-50 mr-2 text-xl">
                        {icons}
                      </span>
                    )}
                    {/* Hover pill bg */}
                    <span
                      className="absolute inset-0 rounded-xl bg-[var(--cream-dark)] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      aria-hidden="true"
                    />
                    <span className="relative">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* ── Desktop right CTA ────────────────────────────────────── */}
            <div className="hidden md:flex items-center gap-2 shrink-0">
              <a
                href="/Kingsley-Frontend-developer-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--ink-muted)] hover:text-[var(--ink)] link-underline transition-colors"
              >
                CV
              </a>

              {/* Divider */}
              <span
                className="block w-px h-4 bg-[var(--border-dark)] opacity-60"
                aria-hidden="true"
              />

              <Button href="#contact" size="sm" variant="primary">
                Hire me
              </Button>
            </div>

            {/* ── Mobile hamburger ─────────────────────────────────────── */}
            <button
              className="md:hidden flex flex-col justify-center gap-[5px] w-9 h-9 rounded-xl hover:bg-[var(--cream-dark)] transition-colors duration-200 cursor-pointer shrink-0"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span
                className={`block mx-auto w-4.5 h-[1.5px] bg-[var(--ink)] origin-center transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3.25px]" : ""}`}
              />
              <span
                className={`block mx-auto w-4.5 h-[1.5px] bg-[var(--ink)] transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
              />
              <span
                className={`block mx-auto w-4.5 h-[1.5px] bg-[var(--ink)] origin-center transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3.25px]" : ""}`}
              />
            </button>
          </nav>

          {/* ── Mobile dropdown (inside the pill) ───────────────────────── */}
          <div
            id="mobile-menu"
            aria-hidden={!menuOpen}
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {/* Inner border separator */}
            <div className="mx-4 border-t border-[var(--border)]" />

            <div className="px-3 pt-2 pb-3 flex flex-col gap-0.5">
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="block px-3 py-2.5 text-sm font-medium text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--cream-dark)] rounded-xl transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}

              <div
                className="mt-1 pt-2 border-t border-[var(--border)]"
                onClick={closeMenu}
              >
                <Button
                  href="#contact"
                  size="md"
                  variant="primary"
                  className="w-full"
                >
                  Hire me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
