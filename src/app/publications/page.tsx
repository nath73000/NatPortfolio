import PublicationList from "@/components/PublicationList";
import { publications } from "@/data/publications";

export default function PublicationsPage() {
  return (
    <div className="page-stack">
      <header className="page-heading section-line">
        <p className="eyebrow">Research</p>
        <h1>Publications</h1>
        <p className="text-muted">
          Thesis and papers on mission planning for on-orbit servicing, from
          mathematical optimization to deep reinforcement learning.
        </p>
      </header>

      <section className="split-section">
        <aside className="section-label">
          <h2>Publications</h2>
        </aside>
        <div className="split-content timeline-list">
          <PublicationList items={publications} />
        </div>
      </section>
    </div>
  );
}
