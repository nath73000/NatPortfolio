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
  outcomes: string[];
  reportUrl?: string;
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
    outcomes: [
      "Delivered a reusable RL control benchmark with deterministic evaluation scripts.",
      "Documented hyperparameter sensitivities and failure regions for mission engineering review.",
      "Prepared experiment artifacts for direct comparison with model-based controllers.",
    ],
  },
  {
    slug: "differential-equation-solvers-n-body-image-diffusion",
    title: "Differential Equation Solvers: N-Body Orbits & Image Diffusion",
    date: "2023-04-28",
    tags: ["Numerical Methods", "Simulation", "Space", "Image Processing"],
    description:
      "Implemented Verlet and Runge-Kutta 4 integrators in Python to simulate Solar System orbits, then reused RK4 with finite differences to run heat and anisotropic diffusion on images.",
    context:
      "Numerical analysis study project (Ma322) carried out in a team of three during my third year at IPSA, covering the numerical resolution of differential equations through two applications: planetary motion and 2D diffusion.",
    problem:
      "Explicit Euler does not conserve the total energy of a mechanical system, which rules it out for long orbital simulations, and diffusion equations with Neumann boundary conditions have to be discretized in space before a time integrator can be applied to an image.",
    approach:
      "We proved that the explicit Euler scheme gains energy at every step, derived the Verlet scheme and its second-order initialization from Taylor expansions, then implemented Verlet and RK4 for the Sun-Earth-Mars problem and for an 8-body Solar System initialized from IMCCE ephemerides, comparing trajectories and kinetic, potential, and total energies. For diffusion, we discretized the 2D heat equation with centered finite differences in matrix form, integrated it with RK4 on each color channel, and extended the solver to gradient-norm and Laplacian-norm variants and to anisotropic diffusion with a gradient-dependent coefficient.",
    stack: ["Python", "NumPy", "Matplotlib", "OpenCV", "LaTeX"],
    outcomes: [
      "Showed analytically that explicit Euler gains energy at every step, and numerically that Verlet and RK4 stay in close agreement on the Sun-Earth-Mars system over 15,000 steps.",
      "On the 8-body Solar System over 25,000 steps, the two integrators' trajectories and total energies drift apart, showing how sensitive long-horizon orbital simulation is to the choice of scheme.",
      "Obtained image blurring, contour accentuation, and anisotropic smoothing from the same RK4 scheme by changing only the right-hand side of the diffusion equation.",
      "Documented the derivations, Python code, and experiments in a 40-page report (in French).",
    ],
    reportUrl: "/reports/ma322-differential-equations-report.pdf",
  },
  {
    slug: "image-restoration-matrix-conjugate-gradient",
    title: "Image Restoration with Matrix Conjugate Gradient",
    date: "2023-03-26",
    tags: ["Optimization", "Numerical Methods", "Image Processing"],
    description:
      "Restored damaged photographs in Python by casting the reconstruction of missing pixels as a quadratic minimization problem, derived from the Euler-Lagrange equations and solved with a matrix-form conjugate gradient algorithm.",
    context:
      "Differentiable optimization study project (Ma321) carried out in a team of three during my third year at IPSA, on restoring images whose pixels are damaged or missing.",
    problem:
      "Old or corrupted photographs contain scratches and missing pixels, and the damaged regions have to be rebuilt from the surrounding intact pixels while leaving those intact pixels unchanged.",
    approach:
      "We derived the Euler-Lagrange equation for a two-variable functional and showed that, for the squared gradient norm, the restored image satisfies Laplace's equation with the intact pixels as boundary condition. After discretizing the Laplacian with centered finite differences, we rewrote the problem as a quadratic form in matrix variables with a mask restricting updates to the damaged pixels, proved that the associated operator is linear and symmetric for the trace inner product, computed the gradient of the quadratic form, and adapted the conjugate gradient algorithm to matrices. The solver was implemented with NumPy and OpenCV, applied channel by channel to color images, and its iterations were exported as a video.",
    stack: ["Python", "NumPy", "OpenCV", "LaTeX"],
    outcomes: [
      "Restored a scratched vintage portrait in color and grayscale, and recovered recognizable pictures from test images in which a large number of pixels had been blacked out, typically in 300 to 500 conjugate gradient iterations.",
      "Identified clusters of blue or white pixels that persisted after many iterations, and reduced them with a dedicated mask for color images.",
      "Ran the solver for up to 5,000 iterations on three primary-color discs and observed the colors spreading like waves and mixing additively.",
      "Documented the derivations, Python code, and restoration results in a 20-page report (in French).",
    ],
    reportUrl: "/reports/ma321-image-restoration-report.pdf",
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
