import type { ReactNode } from "react";

type Variant = "default" | "accent" | "green" | "gold";

type Props = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

const styles: Record<Variant, string> = {
  default: "bg-[var(--cream-deeper)] text-[var(--ink-muted)] border-[var(--border)]",
  accent:  "bg-[var(--accent-muted)] text-[var(--accent)] border-[rgba(201,98,47,0.2)]",
  green:   "bg-[rgba(61,122,86,0.1)] text-[var(--green)] border-[rgba(61,122,86,0.2)]",
  gold:    "bg-[rgba(184,154,90,0.12)] text-[var(--gold)] border-[rgba(184,154,90,0.25)]",
};

export default function Badge({ children, variant = "default", className = "" }: Props) {
  return (
    <span
      className={`
        inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full
        text-[0.7rem] font-mono-var font-medium tracking-wide
        border whitespace-nowrap
        ${styles[variant]} ${className}
      `}
    >
      {children}
    </span>
  );
}