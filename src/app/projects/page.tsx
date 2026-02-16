"use client";

import { useState } from "react";
import { projects } from "@/data/projects";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const tags = ["All", ...new Set(projects.flatMap((project) => project.tags))];
  const sortedProjects = [...projects].sort(
    (a, b) =>
      new Date(`${b.date}T00:00:00Z`).getTime() -
      new Date(`${a.date}T00:00:00Z`).getTime(),
  );
  const filtered =
    filter === "All"
      ? sortedProjects
      : sortedProjects.filter((project) => project.tags.includes(filter));

  const formatDate = (value: string) =>
    new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
    }).format(new Date(`${value}T12:00:00`));

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 space-y-8">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
          Portfolio
        </p>
        <h1 className="text-3xl font-semibold text-slate-100 sm:text-4xl">
          All Projects Sorted by Date
        </h1>
      </header>

      <div className="flex gap-2 flex-wrap">
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-3 py-1 rounded-full border text-sm transition-colors ${
              filter === t
                ? "bg-cyan-300 text-slate-950 border-cyan-300"
                : "text-slate-300 border-slate-700 hover:border-cyan-300 hover:text-cyan-200"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {filtered.map((p) => (
          <article
            key={p.title}
            className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 shadow-sm shadow-black/50"
          >
            <div className="flex justify-between gap-4">
              <h2 className="font-semibold text-slate-100">{p.title}</h2>
              <span className="text-sm text-slate-400 whitespace-nowrap">
                {formatDate(p.date)}
              </span>
            </div>
            <p className="text-sm text-slate-300 mt-3">{p.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
