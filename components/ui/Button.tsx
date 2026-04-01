import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
    href?: undefined;
    external?: undefined;
    download?: undefined;
  };

type ButtonAsLink = BaseProps & {
  href: string;
  external?: boolean;
  /** Pass a filename string to trigger a file download, e.g. download="cv.pdf" */
  download?: string | boolean;
  onClick?: never;
  type?: never;
  disabled?: never;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-[var(--ink)] text-[var(--cream)] hover:bg-[var(--accent)] active:scale-[0.97]",
  secondary:
    "bg-[var(--cream-deeper)] text-[var(--ink)] border border-[var(--border-dark)] hover:border-[var(--accent)] hover:text-[var(--accent)] active:scale-[0.97]",
  ghost:
    "text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--cream-dark)] active:scale-[0.97]",
  outline:
    "border border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--cream)] active:scale-[0.97]",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-8 px-4 text-sm gap-1.5",
  md: "h-10 px-6 text-sm gap-2",
  lg: "h-12 px-8 text-base gap-2.5",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  href,
  external,
  download,
  ...rest
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 cursor-pointer select-none shrink-0 tracking-tight focus-visible:outline-2 focus-visible:outline-offset-2";

  const classes = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href !== undefined) {
    // download attr forces the browser to save the file instead of navigating.
    // When truthy, we never open in a new tab — download happens in the same context.
    if (download) {
      return (
        <a
          href={href}
          download={download}
          className={classes}
        >
          {children}
        </a>
      );
    }

    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">)}
    >
      {children}
    </button>
  );
}