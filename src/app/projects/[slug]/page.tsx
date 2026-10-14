import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(new Date(`${value}T12:00:00`));

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const hasOutcomes = project.outcomes.length > 0;
  const backLink = (
    <div className="detail-actions">
      <Link href="/projects" className="text-link">
        Back to Projects
      </Link>
    </div>
  );

  return (
    <div className="page-stack">
      <header className="page-heading section-line">
        <p className="eyebrow">Project Detail</p>
        <h1>{project.title}</h1>
        <p className="text-muted">{project.description}</p>
        <div className="detail-meta-line">
          <span className="entry-meta">
            {formatDate(project.date)}
            {project.inProgress ? " · In progress" : null}
          </span>
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={`${project.slug}-${tag}`} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        {project.reportUrl || project.repoUrl ? (
          <div className="inline-links">
            {project.reportUrl ? (
              <a
                href={project.reportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Read the Report (PDF)
              </a>
            ) : null}
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                View the Code (GitHub)
              </a>
            ) : null}
          </div>
        ) : null}
      </header>

      <section className="split-section section-line">
        <aside className="section-label">
          <h2>Context</h2>
        </aside>
        <div className="split-content detail-copy">
          <p>{project.context}</p>
          {project.problem ? <p>{project.problem}</p> : null}
          {project.approach ? <p>{project.approach}</p> : null}
        </div>
      </section>

      <section
        className={hasOutcomes ? "split-section section-line" : "split-section"}
      >
        <aside className="section-label">
          <h2>Stack</h2>
        </aside>
        <div className="split-content">
          <div className="project-tags">
            {project.stack.map((item) => (
              <span key={`${project.slug}-stack-${item}`} className="tag">
                {item}
              </span>
            ))}
          </div>
          {hasOutcomes ? null : backLink}
        </div>
      </section>

      {hasOutcomes ? (
        <section className="split-section">
          <aside className="section-label">
            <h2>Outcomes</h2>
          </aside>
          <div className="split-content detail-list">
            {project.outcomes.map((outcome) => (
              <p key={`${project.slug}-${outcome}`} className="detail-list-item">
                {outcome}
              </p>
            ))}
            {backLink}
          </div>
        </section>
      ) : null}
    </div>
  );
}
