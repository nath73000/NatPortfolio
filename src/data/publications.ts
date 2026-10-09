export type PublicationLink = {
  label: string;
  href: string;
};

export type Publication = {
  period: string;
  kind: string;
  title: string;
  authors?: string[];
  venue: string;
  summary?: string;
  links?: PublicationLink[];
};

export const publications: Publication[] = [
  {
    period: "2026",
    kind: "Master's Thesis",
    title:
      "Deep Reinforcement Learning for On-Orbit Servicing Scheduling for Low and High Thrust Propulsion",
    authors: ["Nathan Claret"],
    venue:
      "Master of Applied Science thesis, Department of Electrical and Computer Engineering, Concordia University, Montreal, Canada.",
    summary:
      "Presents IOOSSO, a deep reinforcement learning framework for dynamically scheduling on-orbit servicing missions in multi-orbit environments. The problem is formulated as an event-driven semi-Markov decision process with stochastic service needs, orbital refueling depots, and fuel, time, and orbital-transfer constraints, and a Maskable PPO agent learns servicing policies that maximize net present value for high-thrust and low-thrust servicers. Medium Earth Orbit case studies show that profitability depends strongly on mission horizon and demand: neither architecture recovers its infrastructure cost over one year, while both break even within the first year of a five-year campaign and create about $500M of value relative to a replace-on-failure baseline.",
    links: [
      {
        label: "Read the Thesis (PDF)",
        href: "/papers/claret-2026-masc-thesis.pdf",
      },
      {
        label: "Concordia Spectrum",
        href: "https://spectrum.library.concordia.ca/id/eprint/997656/",
      },
    ],
  },
  {
    period: "2025",
    kind: "Conference Paper",
    title:
      "Enhancing Space Resilience: An Integrated Maintenance and Routing Optimization Framework for On-Orbit Servicing Missions",
    authors: ["Nathan Claret", "Adam Abdin"],
    venue:
      "18th International Conference on Space Operations (SpaceOps 2025), Montreal, Canada, May 2025.",
    summary:
      "Introduces IMROOS, a mixed-integer linear program that jointly schedules on-orbit maintenance tasks and optimizes the routing of refuelable servicing spacecraft. The orbital environment is modeled as a time-expanded network that captures the motion of satellites, service vehicles, and refueling depots across multiple orbital regimes, and the model distinguishes preventive from corrective maintenance. In the case study, optimized maintenance scheduling lowers total system cost by up to 37% compared with a no-maintenance baseline.",
    links: [
      {
        label: "Read the Paper (PDF)",
        href: "/papers/claret-abdin-2025-spaceops.pdf",
      },
      {
        label: "SpaceOps Proceedings",
        href: "https://doi.org/10.82217/spaceops2025_474",
      },
    ],
  },
  {
    period: "Under review",
    kind: "Journal Article",
    title:
      "Learning-Based Mission Planning and Techno-Economic Analysis of On-Orbit Servicing under High- and Low-Thrust Propulsion",
    venue: "Submitted to Advances in Space Research.",
  },
];
