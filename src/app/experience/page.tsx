import { experiences } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <div className="page-stack">
      <header className="page-heading section-line">
        <p className="eyebrow">Timeline</p>
        <h1>Experience</h1>
        <p className="text-muted">
          Professional and academic experiences focused on machine learning,
          simulation, and data-heavy engineering workflows.
        </p>
      </header>

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
        </div>
      </section>
    </div>
  );
}
