export type Experience = {
  period: string;
  title: string;
  description: string;
  details: string;
};

export const experiences: Experience[] = [
  {
    period: "jun 2024 - aug 2024",
    title: "Research Internship at CentraleSupélec",
    description:
      "Developed an optimization framework that jointly schedules satellite maintenance and routes refuelable servicing spacecraft for on-orbit servicing missions.",
    details:
      "Modeled the orbital environment as a time-expanded network whose arcs represent orbital maneuvers (phasing, Hohmann transfers, and inclination changes) with their duration and propellant cost, and formulated the planning problem as a mixed-integer linear program covering preventive and corrective maintenance, propellant limits, and refueling depots. In the case study, optimized maintenance scheduling lowered total system cost by up to 37% compared with a no-maintenance baseline. The work led to a paper at the SpaceOps 2025 conference.",
  },
];
