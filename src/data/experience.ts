export type Experience = {
  period: string;
  title: string;
  description: string;
  details: string;
};

export const experiences: Experience[] = [
  {
    period: "2025 - 2026",
    title: "Research Internship",
    description:
      "Worked on reinforcement learning methods for space systems with experimental benchmarking and robust evaluation.",
    details:
      "Built experiment pipelines to compare RL algorithms under realistic orbital constraints, implemented reproducible evaluation protocols, and documented performance tradeoffs for mission planning scenarios.",
  },
  {
    period: "2023 - 2025",
    title: "Academic Projects",
    description:
      "Built simulation environments, trained RL agents, and designed result visualization workflows.",
    details:
      "Developed end-to-end project workflows from data preparation to model training and analysis, with emphasis on simulation fidelity, experiment tracking, and clear communication of results.",
  },
  {
    period: "2021 - 2023",
    title: "Early Tech Experience",
    description:
      "Focused on web development, scientific data processing, and automation of analytics pipelines.",
    details:
      "Contributed to front-end and back-end features, processed technical datasets, and automated repetitive reporting tasks to improve reliability and save engineering time.",
  },
];
