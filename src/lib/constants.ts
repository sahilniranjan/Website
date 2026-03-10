export const siteConfig = {
  name: "Sahil Niranjan",
  initials: "SN",
  title: "Sahil Niranjan — Data Scientist & ML Engineer",
  description:
    "MS Analytics @ Northeastern University. Former Data Analyst at Vivma Software supporting JPMorgan Chase & Goldman Sachs. Building predictive models, shipping ML pipelines, and exploring where data meets markets.",
  url: "https://sahilniranjan.dev",
  email: "niranjan.sa@northeastern.edu",
  phone: "857-424-6060",
  linkedin: "https://www.linkedin.com/in/sahil-niranjan-234917176/",
  github: "https://github.com/sahilniranjan",
  resumeUrl: "/assets/resume.pdf",
};

export const roles = [
  "Data Analyst",
  "ML/AI Engineer",
  "Data Scientist",
  "Quant Enthusiast",
];

export const stats = [
  { label: "YOE", value: 2.5, suffix: "+", prefix: "", decimals: 1 },
  { label: "Patent Granted", value: 1, suffix: "", prefix: "" },
  { label: "Published Researcher", value: 1, suffix: "", prefix: "" },
  { label: "GPA", value: 3.83, suffix: "", prefix: "", decimals: 2 },
];

export const experiences = [
  {
    id: 1,
    role: "AI/ML Engineer Intern",
    company: "Eudaimonic Inc. / DeepSpace",
    period: "Jan 2026 – Present",
    location: "Remote",
    description: [
      "Developed widget analytics dashboard tracking user engagement metrics across 50K+ daily active users",
      "Built shared whiteboard feature with real-time collaboration using WebSocket architecture",
      "Implemented health monitoring system with anomaly detection for predictive maintenance",
      "Engineered push notification pipeline with ML-driven personalization increasing engagement by 35%",
    ],
    tech: ["Python", "TensorFlow", "FastAPI", "WebSocket", "Docker"],
  },
  {
    id: 2,
    role: "Graduate Data Analyst",
    company: "Northeastern University School of Law",
    period: "Sep 2025 – Present",
    location: "Boston, MA",
    description: [
      "Analyzing legal data trends and case outcomes using advanced statistical methods",
      "Building automated reporting pipelines for faculty research initiatives",
      "Developing interactive dashboards for legal analytics and policy research",
    ],
    tech: ["Python", "SQL", "Tableau", "R", "Statistical Analysis"],
  },
  {
    id: 3,
    role: "Data Analyst",
    company: "Vivma Software Inc.",
    period: "Jan 2022 – Aug 2024",
    location: "India",
    description: [
      "Supported JPMorgan Chase & Goldman Sachs with predictive analytics models achieving 94-97% accuracy",
      "Processed and analyzed 1.5M+ records/month for financial data pipelines",
      "Built end-to-end ML models for risk assessment and client behavior prediction",
      "Automated ETL workflows reducing manual processing time by 60%",
    ],
    tech: ["Python", "SQL", "Spark", "AWS", "Tableau", "XGBoost"],
  },
];

export const projects = [
  {
    id: 1,
    title: "LOB Predictor",
    subtitle: "ML Inference Engine for Crypto Markets",
    description:
      "Built a high-performance ML inference engine for cryptocurrency order-book mid-price prediction. Achieved sub-millisecond inference with C++ optimization, processing real-time Level 2 order book data. Model trained on 10M+ tick-level observations with feature engineering for microstructure signals.",
    tags: ["Python", "C++", "ML", "Crypto", "Low-Latency"],
    github: "https://github.com/sahilniranjan",
    live: "",
    highlight: "<0.7ms p99 latency",
    featured: true,
  },
  {
    id: 2,
    title: "Customer Behavior Analytics Platform",
    subtitle: "End-to-End ML Pipeline with Streamlit UI",
    description:
      "Designed a full-stack analytics platform combining XGBoost classification with K-Means clustering to segment and predict customer behavior. Achieved 97% prediction accuracy on churn detection. Deployed via Streamlit with interactive visualizations for business stakeholders.",
    tags: ["Python", "XGBoost", "K-Means", "Streamlit", "ML"],
    github: "https://github.com/sahilniranjan",
    live: "",
    highlight: "97% accuracy",
    featured: true,
  },
  {
    id: 3,
    title: "Real-Time Yoga Pose Detection",
    subtitle: "Patented Computer Vision System",
    description:
      "Invented and patented (India Patent 202211030731) a real-time computer vision system for yoga pose detection and correction. Uses MediaPipe and TensorFlow for body landmark detection with 97% accuracy. Provides real-time feedback for posture improvement.",
    tags: ["Python", "OpenCV", "TensorFlow", "MediaPipe", "Patent"],
    github: "https://github.com/sahilniranjan",
    live: "",
    highlight: "Patented — 97% accuracy",
    featured: true,
  },
  {
    id: 4,
    title: "Emotion Recognition System",
    subtitle: "Published Research — IJEAST Vol. 6 No. 7",
    description:
      "Developed a multi-modal emotion recognition system combining facial expression analysis with NLP-based text sentiment detection. Published findings in the International Journal of Engineering Applied Sciences and Technology, demonstrating state-of-the-art accuracy on benchmark datasets.",
    tags: ["Python", "Deep Learning", "NLP", "Computer Vision", "Research"],
    github: "https://github.com/sahilniranjan",
    live: "",
    highlight: "Published Research",
    featured: true,
  },
];

export const skillCategories = [
  {
    name: "Languages",
    color: "#00D4FF",
    skills: ["Python", "SQL", "R", "C++"],
  },
  {
    name: "ML/AI",
    color: "#A855F7",
    skills: [
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "XGBoost",
      "LangChain",
      "OpenAI API",
      "RAG",
      "NLP",
    ],
  },
  {
    name: "Data Engineering",
    color: "#22D3EE",
    skills: ["Spark", "Airflow", "dbt", "Docker", "ETL/ELT"],
  },
  {
    name: "Cloud & Tools",
    color: "#F59E0B",
    skills: ["AWS", "GCP", "Snowflake", "Tableau", "Power BI", "Looker"],
  },
  {
    name: "Other",
    color: "#EC4899",
    skills: ["A/B Testing", "Git", "LaTeX"],
  },
];

export const allSkills = skillCategories.flatMap((cat) =>
  cat.skills.map((skill) => ({ name: skill, color: cat.color }))
);

export const education = [
  {
    degree: "MS in Analytics",
    school: "Northeastern University",
    location: "Boston, MA",
    gpa: "3.83",
    period: "Expected June 2026",
    achievements: [
      "Patent Holder (India Patent 202211030731)",
      "Published Researcher — IJEAST Vol. 6 No. 7",
      "Hackathon Winner",
      "University Basketball & Cricket Teams",
    ],
  },
  {
    degree: "BTech in Computer Science",
    school: "Guru Gobind Singh Indraprastha University",
    location: "Delhi, India",
    gpa: "",
    period: "2018 – 2022",
    achievements: [
      "Filed patent during undergraduate research",
      "Led technical team in multiple hackathons",
    ],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
