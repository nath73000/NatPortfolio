import Link from "next/link";
import { educationItems } from "@/data/education";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";

const featuredProjects = [...projects]
  .sort(
    (a, b) =>
      new Date(`${b.date}T00:00:00Z`).getTime() -
      new Date(`${a.date}T00:00:00Z`).getTime(),
  )
  .slice(0, 3);

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(new Date(`${value}T12:00:00`));

export default function Home() {
  return (
    <div className="page-stack">
      <section className="home-screen section-line">
        <h1 className="home-name" aria-label="Nathan Claret">
          <span className="home-name-line">NATHAN</span>
          <span className="home-name-line">CLARET</span>
        </h1>

        <div className="home-bottom">
          <p className="home-bottom-title">Master thesis student</p>
          <div className="home-bottom-copy">
            <p>
              I am a dual-degree student in Computer Science at Concordia University (Montreal, Canada) and
              Aerospace Engineering at ISPA (Paris, France). I am currently working on a thesis focused on applying
              reinforcement learning to in-orbit operations.
            </p>
          </div>
        </div>
      </section>

      <section className="split-section section-line">
        <aside className="section-label">
          <h2>Education</h2>
        </aside>
        <div className="split-content timeline-list">
          {educationItems.map((item) => (
            <article key={item.degree} className="timeline-item">
              <p className="timeline-period">{item.period}</p>
              <div>
                <h3 className="entry-title">{item.degree}</h3>
                <p className="entry-desc">{item.school}</p>
                <p className="entry-note">{item.summary}</p>
                <ul className="education-highlights compact" aria-label={`${item.degree} highlights`}>
                  {item.highlights.slice(0, 2).map((highlight) => (
                    <li key={`${item.degree}-${highlight}`} className="education-highlight">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
          <div className="detail-actions">
            <Link href="/education" className="text-link">
              View Education Page
            </Link>
          </div>
        </div>
      </section>

      <section className="split-section section-line">
        <aside className="section-label">
          <h2>Projects</h2>
        </aside>
        <div className="split-content project-grid">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="panel project-panel project-link"
            >
              <p className="entry-meta">{formatDate(project.date)}</p>
              <h3 className="entry-title">{project.title}</h3>
              <p className="entry-desc">{project.description}</p>
            </Link>
          ))}
          <div className="detail-actions">
            <Link href="/projects" className="text-link">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="split-section">
        <aside className="section-label">
          <h2>Experience</h2>
        </aside>
        <div className="split-content timeline-list">
          {experiences.map((item) => (
            <article key={item.title} className="timeline-item">
              <p className="timeline-period">{item.period}</p>
              <div>
                <h3 className="entry-title">{item.title}</h3>
                <p className="entry-desc">{item.description}</p>
              </div>
            </article>
          ))}
          <div className="detail-actions">
            <Link href="/experience" className="text-link">
              View Experience Page
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
