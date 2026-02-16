import Link from "next/link";
import { projects } from "@/data/projects";

const sortedProjects = [...projects].sort(
  (a, b) =>
    new Date(`${b.date}T00:00:00Z`).getTime() -
    new Date(`${a.date}T00:00:00Z`).getTime(),
);

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(new Date(`${value}T12:00:00`));

export default function ProjectsPage() {
  return (
    <div className="page-stack">
      <header className="page-heading section-line">
        <p className="eyebrow">Portfolio</p>
        <h1>Projects</h1>
        <p className="text-muted">
          Selected work sorted by date, focused on reinforcement learning,
          simulation pipelines, and mission-oriented data products.
        </p>
      </header>

      <section className="split-section">
        <aside className="section-label">
          <h2>Archive</h2>
        </aside>
        <div className="split-content project-grid">
          {sortedProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="panel project-panel project-link"
            >
              <p className="entry-meta">{formatDate(project.date)}</p>
              <h3 className="entry-title">{project.title}</h3>
              <p className="entry-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={`${project.slug}-${tag}`} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
