"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { experiences } from "@/data/experience";
import { educationItems } from "@/data/education";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const parallaxOffset = Math.min(scrollY * 0.26, 240);
  const scale = 1 + Math.min(scrollY / 3500, 0.12);

  return (
    <div className="bg-black text-slate-100">
      <section className="relative isolate min-h-[78vh] overflow-hidden">
        <div
          className="absolute inset-0 hero-space will-change-transform"
          style={{
            transform: `translateY(${parallaxOffset}px) scale(${scale})`,
          }}
        >
          <div className="satellite-sky" aria-hidden="true">
            <span className="satellite-fly sat-a" />
            <span className="satellite-fly sat-b" />
            <span className="satellite-fly sat-c" />
            <span className="satellite-fly sat-d" />
            <span className="satellite-fly sat-e" />
            <span className="satellite-fly sat-f" />
          </div>
          <div className="earth-shadow" aria-hidden="true" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/24 via-black/48 to-black/62" />

        <div className="relative mx-auto max-w-5xl px-4 pt-32 pb-20 text-white">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-300">
            Welcome
          </p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-6xl">
            Nathan Claret
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-200 sm:text-xl">
            I build projects at the intersection of artificial intelligence,
            space systems, and data visualization.
          </p>
          <div className="mt-8">
            <div className="flex flex-wrap gap-3">
              <Link
                href="/experience"
                className="inline-flex rounded-full bg-cyan-300 px-5 py-2 text-sm font-medium text-slate-950 hover:bg-cyan-200"
              >
                Experience
              </Link>
              <Link
                href="/education"
                className="inline-flex rounded-full border border-slate-300/40 bg-slate-900/30 px-5 py-2 text-sm font-medium text-slate-100 hover:border-cyan-200 hover:text-cyan-200"
              >
                Education
              </Link>
              <Link
                href="/projects"
                className="inline-flex rounded-full border border-slate-300/40 bg-slate-900/30 px-5 py-2 text-sm font-medium text-slate-100 hover:border-cyan-200 hover:text-cyan-200"
              >
                Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 space-y-8 text-slate-100">
        <article className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6 shadow-sm shadow-black/40">
          <h2 className="text-2xl font-semibold">Summary</h2>
          <p className="mt-3 text-slate-300 leading-relaxed">
            I am a student and developer focused on practical AI applications.
            My work combines scientific rigor with clean implementation to build
            systems that are measurable, reliable, and useful.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6 shadow-sm shadow-black/40">
          <h2 className="text-2xl font-semibold">Experience</h2>
          <div className="mt-5 grid gap-4">
            {experiences.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-800 bg-slate-900/70 p-4"
              >
                <p className="text-sm font-medium text-slate-400">{item.period}</p>
                <h3 className="mt-1 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6 shadow-sm shadow-black/40">
          <h2 className="text-2xl font-semibold">Education</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {educationItems.map((item) => (
              <div
                key={item.degree}
                className="rounded-xl border border-slate-800 bg-slate-900/70 p-4"
              >
                <p className="text-sm font-medium text-slate-400">{item.period}</p>
                <h3 className="mt-1 font-semibold">{item.degree}</h3>
                <p className="mt-1 text-sm text-slate-300">{item.school}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
