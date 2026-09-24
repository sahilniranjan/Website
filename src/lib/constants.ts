export const siteConfig = {
  name: "Sahil Niranjan",
  initials: "SN",
  title: "Sahil Niranjan — AI/ML Engineer",
  description:
    "AI/ML engineer building LLM retrieval systems and the evaluation harnesses that gate them. Production ML across financial services, healthcare, and higher education. MS Analytics @ Northeastern University.",
  url: "https://sahilniranjan.dev",
  email: "niranjan.sa@northeastern.edu",
  phone: "857-424-6060",
  location: "Boston, MA",
  linkedin: "https://www.linkedin.com/in/sahil-niranjan-234917176/",
  github: "https://github.com/sahilniranjan",
  resumeUrl: "/assets/resume.pdf",
};

export const roles = [
  "AI/ML Engineer",
  "LLM Systems Engineer",
  "Evaluation & Reliability",
  "Production ML",
];

export const stats = [
  { label: "Years of Experience", value: 3.5, suffix: "", prefix: "", decimals: 1 },
  { label: "Patent Published", value: 1, suffix: "", prefix: "" },
  { label: "Published Paper", value: 1, suffix: "", prefix: "" },
  { label: "GPA — MS Analytics", value: 3.81, suffix: "", prefix: "", decimals: 2 },
];

export const experiences = [
  {
    id: 1,
    role: "AI/ML Engineer Intern",
    company: "Bank of New York (BNY)",
    period: "Jan 2026 – Apr 2026",
    location: "Boston, MA",
    summary:
      "LLM retrieval over financial and compliance documents, and the evaluation harness that decided what shipped.",
    description: [
      "Cut response latency 18% and improved retrieval speed 35% across 120k+ business-critical financial and compliance documents by reworking the search strategy inside a Python retrieval-augmented generation system built on LangChain, LangGraph, embeddings, and vector search",
      "Settled which retrieval configuration shipped to production by building the evaluation harness that scored every candidate on context relevancy, faithfulness, and answer relevancy against a fixed question set",
      "Kept confident wrong answers out of a regulated workflow by routing low-confidence outputs to human review and mapping which question types it handled poorly, through failure analysis with the compliance and operations users",
    ],
    tech: [
      "LangChain",
      "LangGraph",
      "Embeddings",
      "Vector Search",
      "RAG",
      "Eval Harness",
      "Python",
    ],
  },
  {
    id: 2,
    role: "Graduate Senior Data Analyst",
    company: "Northeastern University School of Law",
    period: "Aug 2025 – Jun 2026",
    location: "Boston, MA",
    summary:
      "First technical hire — built the department's analytics function from nothing and made it survive handoff.",
    description: [
      "Built the department's analytics function from nothing as its first technical hire and moved roughly 80% of recommendations to implementation by gathering requirements face to face and defining the metrics with administrators first",
      "Recovered close to 8 staff hours per week and cut reporting cycle time about 18% by migrating recurring manual reporting onto automated SQL and Python pipelines over confidential student records",
      "Made the tooling survive handoff, still in daily use by staff who did not build it, by putting access controls in the code rather than the process and training non-technical users to run it themselves",
    ],
    tech: ["Python", "SQL", "PostgreSQL", "Power BI", "PII Handling"],
  },
  {
    id: 3,
    role: "Associate Analyst",
    company: "Wipro | Alight Solutions account",
    period: "May 2023 – Aug 2024",
    location: "India (US shift)",
    summary:
      "Ran the JPMorgan Chase delivery stream on z/OS, then moved into production modeling on the same pipelines.",
    description: [
      "Ran the day-to-day JPMorgan Chase delivery stream under the account manager, holding multi-million-row payroll and benefits extracts of sensitive employee and claims data to schedule through Annual Enrollment peaks with JCL on z/OS, SQL, and SAS",
      "Cut recurring data discrepancies 38% and turnaround 33%, from 12 days to 8, by reconciling full-file against change-only files, generating EDI 834 enrollment extracts, and tracing failures to the source record through job logs and SQL before the delivery window closed",
      "Moved into modeling after the first few months and put anomaly detection and risk models into production on pipelines carrying roughly 1.5M records per month, using XGBoost and ensembles in Python, Spark, and Kafka with MLflow tracking",
      "Caught temporal leakage from random train/test splits that was inflating reported model performance, and rebuilt evaluation around time-based validation and precision-recall metrics suited to imbalanced labels, so reported performance matched what the system actually did in production",
    ],
    tech: [
      "JCL (z/OS)",
      "SAS",
      "SQL",
      "Python",
      "Apache Spark",
      "Kafka",
      "XGBoost",
      "MLflow",
    ],
  },
  {
    id: 4,
    role: "Data Engineer",
    company: "Capgemini",
    period: "Jan 2022 – Apr 2023",
    location: "India",
    summary:
      "Pipelines and models on clinical records and utilization data, under HIPAA constraints.",
    description: [
      "Built and maintained the Python and SQL data-processing pipelines behind ML applications on clinical records and utilization data, preparing structured datasets, implementing validation checks, and resolving data issues ahead of model training and batch inference",
      "Developed and evaluated classification and forecasting models with scikit-learn, pandas, and NumPy, covering feature engineering, model comparison, hyperparameter tuning, and performance analysis under senior guidance",
      "Integrated model outputs with backend services and scheduled workflows and investigated production defects through logs and root-cause analysis",
    ],
    tech: [
      "Python",
      "SQL",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "PHI Handling",
      "HIPAA",
    ],
  },
];

export const caseStudy = {
  eyebrow: "Bank of New York · Jan – Apr 2026",
  kicker: "Case study",
  title: "The eval harness that decided what shipped",
  problem:
    "A retrieval-augmented system was going into a regulated compliance workflow at a custodian bank, reading across 120k+ business-critical financial and compliance documents. Several retrieval configurations looked plausible. Nobody could say which one was actually better, and in that workflow a confident wrong answer is worse than no answer.",
  approach: [
    {
      label: "Fixed the question set first",
      body: "Scored every candidate configuration against the same set of questions, so the comparison measured retrieval and not the prompt of the day.",
    },
    {
      label: "Scored three axes, not one",
      body: "Context relevancy, faithfulness, and answer relevancy — a config that retrieves the right documents but paraphrases them loosely fails differently than one that retrieves the wrong documents confidently.",
    },
    {
      label: "Reworked the search strategy",
      body: "Rebuilt the retrieval path in Python on LangChain, LangGraph, embeddings, and vector search, then let the harness decide whether it was actually an improvement.",
    },
    {
      label: "Mapped the failures, then routed them",
      body: "Sat with the compliance and operations users to find which question types it handled poorly, and routed low-confidence outputs to human review instead of letting them through.",
    },
  ],
  metrics: [
    { value: "18%", label: "lower response latency" },
    { value: "35%", label: "faster retrieval" },
    { value: "120k+", label: "documents in scope" },
  ],
  outcome:
    "The harness, not an opinion, settled which configuration reached production — and the failure analysis defined where a person still has to sign off.",
  tech: ["LangChain", "LangGraph", "Embeddings", "Vector Search", "Python"],
};

export const principles = [
  {
    n: "01",
    title: "Measure before shipping",
    body: "An eval harness is not paperwork you write after the demo works. It is the thing that decides whether the demo was real.",
    evidence: "BNY — scored every retrieval candidate on relevancy and faithfulness before one reached production.",
  },
  {
    n: "02",
    title: "Fail closed on ambiguity",
    body: "In a regulated workflow, the system's job on an unclear case is to stop and say so, not to produce its best guess with a confident tone.",
    evidence: "S.T.A.R. Toolbox — deterministic rules, every conclusion traceable, ambiguity halts the screen.",
  },
  {
    n: "03",
    title: "Distrust your own metrics",
    body: "The most expensive bugs are the ones that make your numbers look better. Reported performance and production performance are different claims until you prove otherwise.",
    evidence: "Wipro | Alight — caught temporal leakage from random splits that was inflating reported model performance, and rebuilt evaluation around time-based validation.",
  },
];

export const projects = [
  {
    id: 1,
    title: "LOB Predictor",
    subtitle: "Latency-Optimized ML Inference Engine",
    description:
      "Held end-to-end p99 latency under 0.7 ms on commodity CPU by exporting an 18-feature L2 order-book model to a flat weight file scored by a hand-written C++17 engine as a single dot product — no ONNX, no BLAS.",
    tags: ["C++17", "Python", "Scikit-learn", "CMake", "Low-Latency"],
    github: "https://github.com/sahilniranjan/lob-latency-project",
    live: "https://lob-latency.streamlit.app/",
    highlight: "< 0.7 ms p99",
    featured: true,
  },
  {
    id: 2,
    title: "S.T.A.R. Toolbox",
    subtitle: "Regulated Screening System — Capstone",
    description:
      "Delivered a regulated-environment screening system end to end against real client deadlines, encoding the governing rules as deterministic logic so every conclusion traces to the rule that produced it — and it fails closed on ambiguity. Code under NDA.",
    tags: ["Python", "Rules Engine", "Regulatory Data", "Deterministic Logic"],
    github: null,
    live: null,
    highlight: "Fails closed on ambiguity",
    featured: true,
  },
  {
    id: 3,
    title: "Real-Time 3D Pose Classification",
    subtitle: "Patent — Indian Application No. 202211030731",
    description:
      "Real-time 3D pose classification system, filed as Indian Patent Application No. 202211030731 (2022, published application). Uses computer-vision body-landmark detection to classify and correct posture with live feedback.",
    tags: ["Python", "OpenCV", "MediaPipe", "Computer Vision", "Patent"],
    github: null,
    live: "https://drive.google.com/drive/folders/1W032h3Su-seW4cDe0DOIbOAbbDqL8xL4?usp=sharing",
    highlight: "Published application",
    featured: true,
  },
  {
    id: 4,
    title: "Emotion Recognition System",
    subtitle: "Peer-Reviewed — IJEAST Vol. 6 No. 7",
    description:
      "Multi-modal deep learning system for emotion classification combining facial-expression analysis with speech signals. Published in the International Journal of Engineering Applied Sciences and Technology (2021).",
    tags: ["Python", "Deep Learning", "Speech", "Computer Vision", "Research"],
    github:
      "https://github.com/sahilniranjan/EMOTIONAL-RECOGNITION-USING-FACIAL-EXPRESSIONS-AND-SPEECH-ANALYSIS",
    live: "https://www.ijeast.com/papers/176-180%2Ctesma607%2CIJEAST.pdf",
    highlight: "Peer-reviewed",
    featured: true,
  },
];

export const skillCategories = [
  {
    name: "Languages",
    color: "#8B5CF6",
    skills: ["Python", "SQL", "C++17", "SAS", "JCL (z/OS)", "Bash"],
  },
  {
    name: "LLM & GenAI",
    color: "#22D3EE",
    skills: [
      "RAG",
      "LangChain",
      "LangGraph",
      "Embeddings",
      "Vector Search",
      "MCP Servers",
      "Prompt Engineering",
      "Human-in-the-Loop Routing",
    ],
  },
  {
    name: "Evaluation & Reliability",
    color: "#EC4899",
    skills: [
      "Eval Harness Design",
      "Context Relevancy",
      "Faithfulness",
      "Answer Relevancy",
      "Temporal Validation",
      "Precision-Recall (Imbalanced)",
      "Leakage & Drift Detection",
      "Failure Analysis",
    ],
  },
  {
    name: "Machine Learning",
    color: "#F59E0B",
    skills: [
      "Scikit-learn",
      "XGBoost",
      "Pandas",
      "NumPy",
      "Classification",
      "Forecasting",
      "Time Series",
      "Imbalanced Learning",
      "Feature Engineering",
      "Hyperparameter Tuning",
    ],
  },
  {
    name: "Data & MLOps",
    color: "#34D399",
    skills: [
      "Apache Spark",
      "Kafka",
      "MLflow",
      "Git",
      "Docker",
      "PostgreSQL",
      "Power BI",
      "PII/PHI Handling",
      "HIPAA",
    ],
  },
];

export const allSkills = skillCategories.flatMap((cat) =>
  cat.skills.map((skill) => ({ name: skill, color: cat.color }))
);

export const publications = [
  {
    type: "Patent",
    title: "Real-time 3D pose classification",
    detail: "Indian Patent Application No. 202211030731 (2022) — published application",
    url: "https://drive.google.com/drive/folders/1W032h3Su-seW4cDe0DOIbOAbbDqL8xL4?usp=sharing",
  },
  {
    type: "Publication",
    title: "Emotion classification via multi-modal deep learning",
    detail: "IJEAST, Vol. 6, No. 7 (2021) — peer-reviewed",
    url: "https://www.ijeast.com/papers/176-180%2Ctesma607%2CIJEAST.pdf",
  },
];

export const education = [
  {
    degree: "Master of Science in Analytics",
    school: "Northeastern University",
    location: "Boston, MA",
    gpa: "3.81",
    period: "July 2026",
    achievements: [],
    coursework: [
      { name: "Probability Theory and Introductory Statistics", grade: "A", inProgress: false },
      { name: "Collecting, Storing and Retrieving Data", grade: "A-", inProgress: false },
      { name: "Supervised Machine Learning", grade: "A", inProgress: false },
      { name: "Unsupervised Machine Learning", grade: "A-", inProgress: false },
      { name: "Introduction to Data Management and Processing", grade: "A-", inProgress: false },
      { name: "Data Science Engineering Methods", grade: "A", inProgress: false },
      { name: "Computation and Visualization", grade: "A-", inProgress: false },
      { name: "Intermediate Analytics", grade: "A-", inProgress: false },
      { name: "Financial Analytics", grade: "B+", inProgress: false },
      { name: "Data Mining", grade: "A-", inProgress: false },
      { name: "Deterministic Operations Research", grade: "A", inProgress: false },
      { name: "Experimentation and Causal Inference", grade: "A-", inProgress: false },
      { name: "Natural Language Processing", grade: "A", inProgress: false },
      { name: "Generative Artificial Intelligence", grade: "A-", inProgress: false },
      { name: "Data Visualization", grade: "A", inProgress: false },
      { name: "Deep Learning", grade: "A", inProgress: false },
      { name: "Big Data and Spark", grade: "B+", inProgress: false },
      { name: "Data Architecture", grade: null, inProgress: true },
      { name: "Marketing Analytics", grade: null, inProgress: true },
    ],
  },
  {
    degree: "Advanced Certificate Program in Data Science",
    school: "IIIT Bangalore",
    location: "Bangalore, India",
    gpa: "",
    period: "October 2023",
    achievements: [],
    coursework: [],
  },
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    school: "Guru Gobind Singh Indraprastha University",
    location: "Delhi, India",
    gpa: "",
    period: "2018 – Jun 2022",
    achievements: [
      {
        text: "Patent (published application) — Indian Application No. 202211030731",
        url: "https://drive.google.com/drive/folders/1W032h3Su-seW4cDe0DOIbOAbbDqL8xL4?usp=sharing",
      },
      {
        text: "Published Researcher — IJEAST Vol. 6 No. 7",
        url: "https://www.ijeast.com/papers/176-180%2Ctesma607%2CIJEAST.pdf",
      },
    ],
    coursework: [],
  },
];

export const navLinks = [
  { label: "Case Study", href: "#case-study" },
  { label: "Work", href: "#work" },
  { label: "Approach", href: "#approach" },
  { label: "Experience", href: "#experience" },
  { label: "Background", href: "#background" },
  { label: "Contact", href: "#contact" },
];
