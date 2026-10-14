import { contactItems } from "@/data/contact";

export default function ContactPage() {
  return (
    <div className="page-stack">
      <header className="page-heading section-line">
        <p className="eyebrow">Get in Touch</p>
        <h1>Contact</h1>
        <p className="text-muted">
          Reach me by email or phone, or find me on GitHub and LinkedIn.
        </p>
      </header>

      <section className="split-section">
        <aside className="section-label">
          <h2>Contact</h2>
        </aside>
        <dl className="split-content timeline-list">
          {contactItems.map((item) => {
            const isExternal = item.href?.startsWith("http");

            return (
              <div key={item.label} className="timeline-item">
                <dt className="timeline-period">{item.label}</dt>
                <dd className="contact-value">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="contact-link"
                      {...(isExternal
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            );
          })}
        </dl>
      </section>
    </div>
  );
}
