export type Education = {
  period: string;
  degree: string;
  school: string;
  details: string;
};

export const educationItems: Education[] = [
  {
    period: "2024 - 2026",
    degree: "Thesis based master - computer science and aerospace",
    school: "Concordia University",
    details:
      "Advanced curriculum focused on reinforcement learning, autonomous systems, and space mission operations. Built and evaluated RL control pipelines for satellite attitude and trajectory optimization, designed reproducible simulation experiments with benchmark scenarios and multi-seed validation, and completed an applied thesis on RL methods for in-orbit operations and mission automation.",
  },
  {
    period: "sep 2023 - feb 2024",
    degree: "Exchange Semester",
    school: "National Taipei University of Technology (NTUT)",
    details:
      "Core engineering training in software development, data science, machine learning, and scientific computing. Developed full-stack projects and data products with production-style architecture and version control workflows, implemented statistical learning and model evaluation pipelines on real-world datasets, and reinforced foundations in algorithms, linear algebra, probability, and system-level programming.",
  },
  {
    period: "sep 2022 - now",
    degree: "Aerospace engineering Degree",
    school: "IPSA toulouse / Paris",
    details:
      "Preparatory aerospace program emphasizing mathematics, physics, mechanics, and engineering methodology. Applied structured engineering problem-solving methods to aerospace and dynamic systems, completed practical lab sessions in mechanics, electronics, and scientific instrumentation, and built analytical rigor for later specialization in autonomous and AI-driven systems.",
  },
  {
    period: "sep 2020 - jul 2022",
    degree: "Integrated Preparatory Cycle",
    school: "IPSA Toulouse",
    details:
      "Preparatory aerospace program emphasizing mathematics, physics, mechanics, and engineering methodology. Applied structured engineering problem-solving methods to aerospace and dynamic systems, completed practical lab sessions in mechanics, electronics, and scientific instrumentation, and built analytical rigor for later specialization in autonomous and AI-driven systems.",
  },
];
