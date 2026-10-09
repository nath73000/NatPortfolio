import type { Publication } from "@/data/publications";

type PublicationListProps = {
  items: Publication[];
  showSummary?: boolean;
};

export default function PublicationList({
  items,
  showSummary = true,
}: PublicationListProps) {
  return (
    <>
      {items.map((item) => (
        <article key={item.title} className="timeline-item">
          <p className="timeline-period">{item.period}</p>
          <div>
            <p className="entry-meta">{item.kind}</p>
            <h3 className="entry-title">{item.title}</h3>
            <p className="entry-desc">
              {item.authors ? `${item.authors.join(", ")}. ` : null}
              {item.venue}
            </p>
            {showSummary && item.summary ? (
              <>
                <p className="entry-detail-label">Summary</p>
                <p className="entry-note">{item.summary}</p>
              </>
            ) : null}
            {item.links?.length ? (
              <div className="inline-links publication-links">
                {item.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </article>
      ))}
    </>
  );
}
