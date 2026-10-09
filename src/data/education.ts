export type Education = {
  period: string;
  degree: string;
  school: string;
  details: string;
};

export const educationItems: Education[] = [
  {
    period: "2024 - 2026",
    degree:
      "Thesis-Based Master of Applied Science (MASc) in Electrical and Computer Engineering",
    school: "Concordia University",
    details:
      "Research master's degree with a thesis on deep reinforcement learning for scheduling on-orbit servicing missions. The scheduling problem is formulated as an event-driven semi-Markov decision process, and a Maskable PPO agent is trained to maximize the net present value of the servicing system for high-thrust and low-thrust servicers, then benchmarked against a greedy heuristic. Coursework in evolutionary algorithms and machine learning, with a reinforcement learning course taken at McGill University.",
  },
  {
    period: "sep 2023 - feb 2024",
    degree: "Exchange Semester",
    school: "National Taipei University of Technology (NTUT)",
    details:
      "Exchange semester combining space systems engineering with computer science and AI. Studied space mission and system design, applied deep learning and computer vision, data storage systems, and advanced programming in C.",
  },
  {
    period: "sep 2022 - now",
    degree: "Aerospace Engineering Degree (Diplôme d'Ingénieur)",
    school: "IPSA Toulouse / Paris",
    details:
      "Engineering degree in aerospace with a specialization in space systems, complemented by a focus on computer science and embedded systems.",
  },
  {
    period: "sep 2020 - jul 2022",
    degree:
      "Intensive Preparatory Program in Mathematics & Physics (Classes Préparatoires)",
    school: "IPSA Toulouse",
    details:
      "Two-year intensive program preparing for French engineering schools (grandes écoles d'ingénieurs). Built a strong foundation in advanced calculus, mechanics, and physics, along with rigor in analytical reasoning and scientific writing.",
  },
];
