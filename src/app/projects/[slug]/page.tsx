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

  return (
    <div className="page-stack">
      <header className="page-heading section-line">
        <p className="eyebrow">Project Detail</p>
        <h1>{project.title}</h1>
        <p className="text-muted">{project.description}</p>
        <div className="detail-meta-line">
          <span className="entry-meta">{formatDate(project.date)}</span>
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={`${project.slug}-${tag}`} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <section className="split-section section-line">
        <aside className="section-label">
          <h2>Context</h2>
        </aside>
        <div className="split-content detail-copy">
          <p>{project.context}</p>
          <p>{project.problem}</p>
          <p>{project.approach}</p>
        </div>
      </section>

      <section className="split-section section-line">
        <aside className="section-label">
          <h2>Results</h2>
        </aside>
        <div className="split-content results-grid">
          {project.results.map((result) => (
            <article key={`${project.slug}-${result.label}`} className="panel result-card">
              <p className="entry-meta">{result.label}</p>
              <p className="result-value">{result.value}</p>
              <p className="entry-desc">{result.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section section-line">
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
        </div>
      </section>

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
          <div className="detail-actions">
            <Link href="/projects" className="text-link">
              Back to Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
