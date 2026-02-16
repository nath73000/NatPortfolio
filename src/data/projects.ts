export type ProjectResult = {
  label: string;
  value: string;
  detail: string;
};

export type Project = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
  context: string;
  problem: string;
  approach: string;
  stack: string[];
  results: ProjectResult[];
  outcomes: string[];
};

export const projects: Project[] = [
  {
    slug: "ppo-satellite-attitude-control",
    title: "PPO for Satellite Attitude Control",
    date: "2026-01-10",
    tags: ["RL", "Space", "PPO"],
    description:
      "Designed a robust PPO agent with reward shaping, multi-seed training, and evaluation on diverse orbital scenarios.",
    context:
      "The project focused on autonomous satellite attitude stabilization in a simulated orbital environment with actuator constraints.",
    problem:
      "Classical controllers were stable in nominal conditions but degraded under disturbances, sensor noise, and changing inertia parameters.",
    approach:
      "I implemented a PPO policy with constrained action scaling, curriculum learning, and recurrent state features to improve robustness across mission phases.",
    stack: ["Python", "PyTorch", "Gymnasium", "NumPy", "Weights & Biases"],
    results: [
      {
        label: "Settling Time",
        value: "-28%",
        detail:
          "Average stabilization time improved against the tuned PID baseline across 200 test episodes.",
      },
      {
        label: "Pointing Error",
        value: "0.42 deg",
        detail:
          "Mean absolute pointing error at steady state under nominal and noisy sensor conditions.",
      },
      {
        label: "Policy Stability",
        value: "94%",
        detail:
          "Episodes completed without saturation-induced failure under randomized disturbance profiles.",
      },
    ],
    outcomes: [
      "Delivered a reusable RL control benchmark with deterministic evaluation scripts.",
      "Documented hyperparameter sensitivities and failure regions for mission engineering review.",
      "Prepared experiment artifacts for direct comparison with model-based controllers.",
    ],
  },
  {
    slug: "offline-rl-trajectory-optimization",
    title: "Offline RL for Trajectory Optimization",
    date: "2025-06-20",
    tags: ["RL", "Offline RL", "Space"],
    description:
      "Built an offline RL pipeline from simulated datasets and compared performance against classical control methods.",
    context:
      "Trajectory optimization was performed from a fixed historical dataset generated with mixed-quality expert and heuristic policies.",
    problem:
      "Online exploration was costly in simulation time and unsafe in edge trajectories, making offline learning mandatory.",
    approach:
      "I developed an offline RL training stack with conservative value regularization, dataset curation, and policy validation against held-out trajectory clusters.",
    stack: ["Python", "PyTorch", "D4RL", "Pandas", "Matplotlib"],
    results: [
      {
        label: "Fuel Usage",
        value: "-14%",
        detail:
          "Average propellant consumption reduced relative to behavior-cloned trajectory baselines.",
      },
      {
        label: "Constraint Violations",
        value: "-37%",
        detail:
          "Violations on dynamic envelope constraints dropped in offline policy rollout tests.",
      },
      {
        label: "Dataset Efficiency",
        value: "1.8x",
        detail:
          "Achieved target return with significantly fewer high-quality expert samples.",
      },
    ],
    outcomes: [
      "Built reproducible offline training jobs with dataset versioning and validation reports.",
      "Identified data quality thresholds where conservative methods outperform BC baselines.",
      "Produced policy scorecards for engineering handoff and ablation tracking.",
    ],
  },
  {
    slug: "telemetry-anomaly-detection",
    title: "Telemetry Anomaly Detection",
    date: "2024-11-03",
    tags: ["ML", "Space", "Data"],
    description:
      "Developed an early-warning anomaly detection module on telemetry streams with alert visualization.",
    context:
      "Mission telemetry channels were monitored in near real time to detect drifts before operational incidents occurred.",
    problem:
      "Rule-based thresholds generated too many false positives and missed multi-signal weak anomalies.",
    approach:
      "I trained a hybrid pipeline combining reconstruction-based anomaly scoring with temporal feature engineering and alert ranking.",
    stack: ["Python", "Scikit-learn", "FastAPI", "PostgreSQL", "Plotly"],
    results: [
      {
        label: "Detection Lead Time",
        value: "+2.1 h",
        detail:
          "Anomalies were detected earlier than legacy threshold alerts on average.",
      },
      {
        label: "False Positives",
        value: "-41%",
        detail:
          "Daily operator-facing false alarms were reduced while preserving high recall.",
      },
      {
        label: "AUC",
        value: "0.93",
        detail:
          "Validation AUC on labeled historical events with temporal cross-validation.",
      },
    ],
    outcomes: [
      "Shipped alert explanations with contributing signal traces for faster triage.",
      "Introduced severity buckets to prioritize intervention workflows.",
      "Reduced monitoring fatigue for mission operations teams.",
    ],
  },
  {
    slug: "mission-simulation-dashboard",
    title: "Mission Simulation Dashboard",
    date: "2024-03-12",
    tags: ["Web", "Data", "Simulation"],
    description:
      "Created an interactive dashboard to monitor mission simulation performance and generate automated reports.",
    context:
      "Simulation teams needed a shared interface to inspect scenario runs, compare KPIs, and export summary reports.",
    problem:
      "Run results were scattered across notebooks and logs, slowing cross-team decision making.",
    approach:
      "I designed a web dashboard with synchronized charts, filterable run metadata, and scheduled report generation.",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Chart.js"],
    results: [
      {
        label: "Analysis Time",
        value: "-52%",
        detail:
          "Average time to review a full simulation batch dropped from hours to minutes.",
      },
      {
        label: "Report Throughput",
        value: "3.4x",
        detail:
          "Automated report pipelines increased weekly reporting output with fewer manual steps.",
      },
      {
        label: "Adoption",
        value: "26 users",
        detail:
          "Cross-functional engineering and research users actively used the dashboard each week.",
      },
    ],
    outcomes: [
      "Standardized KPI definitions across simulation, controls, and mission analysis groups.",
      "Enabled run-to-run comparison in one interface for faster iteration loops.",
      "Set up exportable artifacts for program review meetings.",
    ],
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
