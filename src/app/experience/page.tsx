import { experiences } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 space-y-8">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
          Portfolio
        </p>
        <h1 className="text-3xl font-semibold text-slate-100 sm:text-4xl">
          Experience
        </h1>
      </header>

      <div className="grid gap-4">
        {experiences.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6 shadow-sm shadow-black/50"
          >
            <p className="text-sm font-medium text-slate-400">{item.period}</p>
            <h2 className="mt-2 text-xl font-semibold text-slate-100">
              {item.title}
            </h2>
            <p className="mt-3 text-sm text-slate-300">{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
