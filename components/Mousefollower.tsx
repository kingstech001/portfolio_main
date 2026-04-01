"use client";

import { useEffect, useRef } from "react";

export default function MouseFollower() {
  const dotRef   = useRef<HTMLDivElement>(null);
  const glowRef  = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);

  const mouse    = useRef({ x: -200, y: -200 });
  const dot      = useRef({ x: -200, y: -200 });
  const glow     = useRef({ x: -200, y: -200 });
  const rafId    = useRef<number>(0);
  const lastStar = useRef(0);
  // Tracks whether the mouse has entered the window yet
  const hasEntered = useRef(false);

  useEffect(() => {
    /* ── Star spawner ──────────────────────────────────────────── */
    function spawnStar(x: number, y: number) {
      if (!starsRef.current) return;

      const star   = document.createElement("div");
      const size   = Math.random() * 5 + 3;
      const angle  = Math.random() * 360;
      const dist   = Math.random() * 40 + 20;
      const dur    = Math.random() * 500 + 400;
      const glyphs = ["✦", "✧", "⋆", "·", "✩", "*"];

      star.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];

      Object.assign(star.style, {
        position:      "fixed",
        left:          `${x}px`,
        top:           `${y}px`,
        fontSize:      `${size + 6}px`,
        color:         Math.random() > 0.6
                         ? "rgba(255,255,255,0.95)"
                         : "rgba(201,98,47,0.85)",
        pointerEvents: "none",
        zIndex:        "9998",
        transform:     "translate(-50%,-50%) scale(1)",
        transition:    `transform ${dur}ms cubic-bezier(0.22,1,0.36,1),
                        opacity   ${dur}ms ease`,
        opacity:       "1",
        lineHeight:    "1",
        userSelect:    "none",
      });

      starsRef.current.appendChild(star);

      requestAnimationFrame(() => {
        const dx = Math.cos((angle * Math.PI) / 180) * dist;
        const dy = Math.sin((angle * Math.PI) / 180) * dist;
        star.style.transform =
          `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(0)`;
        star.style.opacity = "0";
      });

      setTimeout(() => star.remove(), dur + 50);
    }

    /* ── Mouse move handler ────────────────────────────────────── */
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      // Reveal cursors on first real mouse movement — no setState needed,
      // just a direct DOM opacity write so React never re-renders.
      if (!hasEntered.current) {
        hasEntered.current = true;
        if (dotRef.current)  dotRef.current.style.opacity  = "1";
        if (glowRef.current) glowRef.current.style.opacity = "1";
      }

      const now = performance.now();
      if (now - lastStar.current > 80) {
        spawnStar(e.clientX, e.clientY);
        lastStar.current = now;
      }
    };

    /* ── rAF loop ──────────────────────────────────────────────── */
    const loop = () => {
      dot.current.x  += (mouse.current.x - dot.current.x)  * 0.28;
      dot.current.y  += (mouse.current.y - dot.current.y)  * 0.28;
      glow.current.x += (mouse.current.x - glow.current.x) * 0.10;
      glow.current.y += (mouse.current.y - glow.current.y) * 0.10;

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${dot.current.x - 4}px, ${dot.current.y - 4}px)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform =
          `translate(${glow.current.x - 20}px, ${glow.current.y - 20}px)`;
      }

      rafId.current = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    rafId.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []); // empty deps — runs once after mount, no setState anywhere

  return (
    <>
      {/* Star particle container */}
      <div
        ref={starsRef}
        className="fixed inset-0 pointer-events-none z-[9998] overflow-hidden"
        aria-hidden="true"
      />

      {/* Outer glow ring — slow lag, starts invisible */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 pointer-events-none z-[9997] will-change-transform"
        style={{
          width:        40,
          height:       40,
          borderRadius: "50%",
          background:   "radial-gradient(circle, rgba(201,98,47,0.18) 0%, transparent 70%)",
          filter:       "blur(4px)",
          opacity:      0,   // revealed via direct DOM write on first mousemove
          transition:   "opacity 0.3s ease",
        }}
        aria-hidden="true"
      />

      {/* Inner crisp dot — fast snap, starts invisible */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
        style={{
          width:        8,
          height:       8,
          borderRadius: "50%",
          background:   "rgba(255,255,255,0.9)",
          boxShadow:    "0 0 6px rgba(255,255,255,0.6), 0 0 12px rgba(201,98,47,0.4)",
          opacity:      0,   // revealed via direct DOM write on first mousemove
          transition:   "opacity 0.3s ease",
        }}
        aria-hidden="true"
      />
    </>
  );
}