import { educationItems } from "@/data/education";

export default function EducationPage() {
  return (
    <div className="page-stack">
      <header className="page-heading section-line">
        <p className="eyebrow">Academic</p>
        <h1>Education</h1>
        <p className="text-muted">
          Degree programs and research-oriented training in computer science,
          data science, and AI systems engineering.
        </p>
      </header>

      <section className="split-section">
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
                <ul className="education-highlights" aria-label={`${item.degree} highlights`}>
                  {item.highlights.map((highlight) => (
                    <li key={`${item.degree}-${highlight}`} className="education-highlight">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
