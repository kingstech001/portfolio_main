import Image from "next/image";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

/* ── Status badge ─────────────────────────────────────────────────────── */
function StatusBadge({ status }: { status: Project["status"] }) {
  const config = {
    live:        { label: "Live",        variant: "green" as const },
    "in-progress": { label: "In Progress", variant: "gold" as const },
    archived:    { label: "Archived",    variant: "default" as const },
  };
  const { label, variant } = config[status];
  return (
    <Badge variant={variant}>
      {status === "live" && (
        <span className="block w-1.5 h-1.5 rounded-full bg-[var(--green)] mr-1" aria-hidden="true" />
      )}
      {label}
    </Badge>
  );
}

/* ── Featured project card (large) ───────────────────────────────────── */
function FeaturedCard({ project }: { project: Project }) {
  return (
    <article className="group grid md:grid-cols-2 gap-0 bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden card-lift">
      {/* Image */}
      <div className="relative aspect-[4/3] md:aspect-auto bg-[var(--cream-dark)] overflow-hidden">
        <Image
          src={project.imageSrc}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {/* Accent top stripe */}
        <span
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: project.accentColor }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(26,24,20,0.18) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-6 p-7 sm:p-9">
        {/* Meta row */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <StatusBadge status={project.status} />
          <span className="font-mono-var text-xs text-[var(--ink-faint)]">{project.year}</span>
        </div>

        <div className="flex flex-col gap-3 flex-1">
          <h3 className="font-display text-3xl text-[var(--ink)] leading-tight">
            {project.title}
          </h3>
          <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
            {project.description}
          </p>
          <p className="text-xs text-[var(--ink-faint)] leading-relaxed mt-1 border-l-2 border-[var(--border-dark)] pl-3">
            {project.details}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-2 border-t border-[var(--border)]">
          {project.liveUrl && (
            <Button href={project.liveUrl} external size="sm" variant="primary">
              View live ↗
            </Button>
          )}
          {project.githubUrl && (
            <Button href={project.githubUrl} external size="sm" variant="ghost">
              GitHub →
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}

/* ── Regular project card (smaller) ──────────────────────────────────── */
function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden card-lift">
      {/* Image */}
      <div className="relative aspect-[16/9] bg-[var(--cream-dark)] overflow-hidden">
        <Image
          src={project.imageSrc}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{ background: project.accentColor }}
          aria-hidden="true"
        />
        {/* Year overlay */}
        <span className="absolute top-3 right-3 font-mono-var text-[0.65rem] text-white/70 bg-black/30 backdrop-blur-sm rounded-full px-2.5 py-1">
          {project.year}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-6 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-xl text-[var(--ink)] leading-tight">
            {project.title}
          </h3>
          <StatusBadge status={project.status} />
        </div>

        <p className="text-sm text-[var(--ink-muted)] leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
          {project.tags.length > 4 && (
            <span className="tag">+{project.tags.length - 4}</span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-3 border-t border-[var(--border)] mt-auto">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-[var(--accent)] link-underline hover:text-[var(--accent)]"
            >
              Live site ↗
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[var(--ink-faint)] link-underline hover:text-[var(--ink-muted)]"
            >
              GitHub →
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/* ── Section ──────────────────────────────────────────────────────────── */
export default function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section-padding bg-[var(--cream)]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Projects"
            heading="Selected work."
            subheading="A handful of things I've built — from zero to production."
          />
          <Button
            href="https://github.com/jordanreeves"
            external
            variant="secondary"
            size="md"
            className="shrink-0"
          >
            All repos on GitHub ↗
          </Button>
        </div>

        {/* Featured (large) cards */}
        <div className="flex flex-col gap-6 mb-6">
          {featured.map((project) => (
            <FeaturedCard key={project.id} project={project} />
          ))}
        </div>

        {/* Regular grid */}
        {rest.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}