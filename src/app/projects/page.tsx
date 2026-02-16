"use client";

import { useState } from "react";
import { projects } from "@/data/projects";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const tags = ["All", "RL", "Space", "Offline RL", "PPO"];

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(filter));

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Projects</h1>

      <div className="flex gap-2 flex-wrap">
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-3 py-1 rounded-full border text-sm ${
              filter === t ? "bg-black text-white" : ""
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {filtered.map((p) => (
          <div key={p.title} className="border rounded-xl p-4">
            <div className="flex justify-between">
              <h2 className="font-semibold">{p.title}</h2>
              <span className="text-sm text-gray-500">{p.year}</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
