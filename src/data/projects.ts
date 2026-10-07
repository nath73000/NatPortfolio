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
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "dreamer-v1-reproduction",
    title: "Dreamer V1 Reproduction: World Model RL from Pixels",
    date: "2026-05-02",
    tags: ["RL", "World Models", "Deep Learning"],
    description:
      "Reimplemented Dreamer V1 in PyTorch, a model-based RL agent that learns a latent world model from images and trains its actor and critic on imagined trajectories, and reproduced its learning on cartpole swing-up.",
    context:
      "Final project for the COMP 579 reinforcement learning course at McGill University, carried out on my own: a reproduction of Dreamer V1 (Hafner et al., 2020), an agent that learns behaviors by latent imagination.",
    problem:
      "Model-free algorithms such as PPO and SAC often need millions of environment interactions, which is prohibitive when data collection is costly or risky. Dreamer instead learns a world model and optimizes its policy inside it, and the goal was to rebuild its main components and check experimentally that behaviors learned in imagination transfer to the real environment.",
    approach:
      "I implemented the Recurrent State-Space Model as seven jointly trained modules: a CNN encoder, a GRU recurrent model, an MLP prior and posterior over a Gaussian stochastic state, a transposed-CNN decoder, a reward model, and a continue model (disabled for this task). The world model is trained on sequences drawn from a replay buffer with reconstruction, reward, and KL losses with free nats. An actor and a critic are then trained on trajectories imagined in latent space, using λ-returns and analytic gradients backpropagated through the learned dynamics. The agent was trained for 145,000 gradient steps on cartpole-swingup from the DeepMind Control Suite, with 64×64 RGB observations.",
    stack: ["Python", "PyTorch", "DeepMind Control Suite", "NumPy", "Plotly", "LaTeX"],
    outcomes: [
      "Reached an average score of about 550 on cartpole-swingup, with the best model swinging the pole up and keeping it nearly vertical for almost the whole episode; the original paper reports roughly 700 on the same task.",
      "Verified that the reward predicted in imagination closely tracks the reward actually obtained throughout training, evidence that the policy optimized in latent space transfers to the real environment.",
      "Diagnosed a stalled run: with a free nats threshold of 3.0 the KL regularizer was inactive, and lowering it to 1.0 around 90,000 gradient steps triggered a second phase of improvement from a plateau near 200.",
      "Documented the architecture, hyperparameters, and training diagnostics in a 12-page report, with the code available on GitHub.",
    ],
    reportUrl: "/reports/comp579-dreamer-v1-reproduction-report.pdf",
    repoUrl: "https://github.com/nath73000/Dreamer_v1_ByNath",
  },
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
    slug: "newton-fractals-kernel-svm-uzawa",
    title: "Newton Fractals & Kernel SVM with Uzawa's Algorithm",
    date: "2023-05-11",
    tags: ["Optimization", "Machine Learning", "Numerical Methods"],
    description:
      "Generated Newton fractals with a vectorized solver over the complex plane, then implemented Uzawa's algorithm from scratch to train linear and kernel support vector machines on MNIST handwritten digits.",
    context:
      "Differentiable optimization study project (Ma324) carried out in a team of four during my third year at IPSA, in two parts: drawing fractals with Newton's method and classifying handwritten digits with kernel support vector machines.",
    problem:
      "The root that Newton's method converges to depends on the starting point, and mapping that dependence means running the iteration on millions of points of the complex plane. On the learning side, training a support vector machine requires solving a constrained quadratic minimization problem.",
    approach:
      "We derived the Newton iteration for a parametrized cubic polynomial and applied it to a matrix representing the complex plane, coloring each pixel by the root it ends up closest to and marking the points that do not converge, then extended the renderer to a degree-6 polynomial and to the Mandelbrot iteration z² + c, with zoom sequences exported as GIFs. For classification, we rewrote the SVM constraints with a kernel function and its Gram matrix, wrote Uzawa's algorithm with projection for the soft-margin problem, and implemented it in NumPy with polynomial and Gaussian kernels, training one detector per digit and combining them into a multi-class predictor tested on MNIST and Fashion-MNIST.",
    stack: ["Python", "NumPy", "Matplotlib", "imageio", "LaTeX"],
    outcomes: [
      "Rendered Newton fractals on grids of several million points, including a parameter value where a non-convergence region shaped like the Douady rabbit appears.",
      "Replaced a pixel-by-pixel double loop with matrix operations over the whole complex plane, which greatly reduced rendering time.",
      "Trained one-vs-rest digit detectors on 1,000 MNIST samples and evaluated them on the 10,000-image test set with confusion matrices, sensitivity, and error rate.",
      "Found the classifiers highly dependent on the margin bound and kernel settings: the linear detectors traded sensitivity against false positives, while the kernel versions ended up predicting a single class with the settings and training size we could afford.",
      "Documented the derivations, Python code, and experiments in a 27-page report (in French).",
    ],
    reportUrl: "/reports/ma324-newton-fractals-kernel-svm-report.pdf",
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
