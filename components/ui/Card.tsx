import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article" | "li";
};

export default function Card({
  children,
  className = "",
  hover = false,
  as: Tag = "div",
}: Props) {
  return (
    <Tag
      className={`
        bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden
        ${hover ? "card-lift" : ""}
        ${className}
      `}
    >
      {children}
    </Tag>
  );
}