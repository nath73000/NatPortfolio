export type Education = {
  period: string;
  degree: string;
  school: string;
  summary: string;
  highlights: string[];
};

export const educationItems: Education[] = [
  {
    period: "2024 - 2026",
    degree: "Master's Degree",
    school: "AI Engineering & Space Systems",
    summary:
      "Advanced curriculum focused on reinforcement learning, autonomous systems, and space mission operations.",
    highlights: [
      "Built and evaluated RL control pipelines for satellite attitude and trajectory optimization.",
      "Designed simulation experiments with benchmark scenarios, reproducibility protocols, and multi-seed validation.",
      "Completed an applied thesis on RL methods for in-orbit operations and mission automation.",
    ],
  },
  {
    period: "2021 - 2024",
    degree: "Bachelor's Degree",
    school: "Computer Science & Data Science",
    summary:
      "Core engineering training in software development, data science, machine learning, and scientific computing.",
    highlights: [
      "Developed full-stack projects and data products with production-style architecture and version control workflows.",
      "Implemented statistical learning, optimization, and model evaluation pipelines on real-world datasets.",
      "Strengthened foundations in algorithms, linear algebra, probability, and system-level programming.",
    ],
  },
  {
    period: "2020 - 2022",
    degree: "Integrated Preparatory Cycle",
    school: "IPSA Toulouse",
    summary:
      "Preparatory aerospace program emphasizing mathematics, physics, mechanics, and engineering methodology.",
    highlights: [
      "Worked on engineering problem-solving methods applied to aerospace and dynamic systems.",
      "Completed practical lab sessions in mechanics, electronics, and scientific instrumentation.",
      "Built strong analytical rigor for later specialization in autonomous and AI-driven systems.",
    ],
  },
];
