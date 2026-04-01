type Props = {
  eyebrow: string;
  heading: string;
  subheading?: string;
  /** If true, the eyebrow + heading layout uses the ruled underline style */
  ruled?: boolean;
  /** Alignment defaults to "left" */
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  heading,
  subheading,
  ruled = false,
  align = "left",
  className = "",
}: Props) {
  const isCenter = align === "center";

  return (
    <header
      className={`flex flex-col gap-4 ${isCenter ? "items-center text-center" : ""} ${className}`}
    >
      {/* Eyebrow */}
      <span
        className={`inline-flex items-center gap-2.5 font-mono-var text-xs tracking-[0.18em] uppercase font-medium text-[var(--accent)] ${
          ruled ? "ruled" : ""
        }`}
      >
        <span
          className="block w-5 h-px bg-[var(--accent)]"
          aria-hidden="true"
        />
        {eyebrow}
      </span>

      {/* Heading */}
      <h2
        className={`font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] text-[var(--ink)] ${
          isCenter ? "max-w-2xl" : "max-w-2xl"
        }`}
      >
        {heading}
      </h2>

      {/* Optional subheading */}
      {subheading && (
        <p
          className={`text-[var(--ink-muted)] text-base sm:text-lg leading-relaxed ${
            isCenter ? "max-w-xl" : "max-w-lg"
          }`}
        >
          {subheading}
        </p>
      )}
    </header>
  );
}