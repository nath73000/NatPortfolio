export type Project = {
  title: string;
  date: string;
  tags: string[];
  description: string;
};

export const projects: Project[] = [
  {
    title: "PPO for Satellite Attitude Control",
    date: "2026-01-10",
    tags: ["RL", "Space", "PPO"],
    description:
      "Designed a robust PPO agent with reward shaping, multi-seed training, and evaluation on diverse orbital scenarios.",
  },
  {
    title: "Offline RL for Trajectory Optimization",
    date: "2025-06-20",
    tags: ["RL", "Offline RL", "Space"],
    description:
      "Built an offline RL pipeline from simulated datasets and compared performance against classical control methods.",
  },
  {
    title: "Telemetry Anomaly Detection",
    date: "2024-11-03",
    tags: ["ML", "Space", "Data"],
    description:
      "Developed an early-warning anomaly detection module on telemetry streams with alert visualization.",
  },
  {
    title: "Mission Simulation Dashboard",
    date: "2024-03-12",
    tags: ["Web", "Data", "Simulation"],
    description:
      "Created an interactive dashboard to monitor mission simulation performance and generate automated reports.",
  },
];
