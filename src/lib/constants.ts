export const siteConfig = {
  name: "Sahil Niranjan",
  initials: "SN",
  title: "Sahil Niranjan — AI/ML Engineer",
  description:
    "AI/ML Engineer. Built LLM multi-agent systems at BNY, anomaly-detection models for investment banking at Vivma. MS Analytics @ Northeastern University. Patent holder & published researcher.",
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
  "GenAI & LLM Engineer",
  "Data Scientist",
  "MLOps Practitioner",
];

export const stats = [
  { label: "Years of Experience", value: 3, suffix: "+", prefix: "" },
  { label: "Patent Granted", value: 1, suffix: "", prefix: "" },
  { label: "Published Paper", value: 1, suffix: "", prefix: "" },
  { label: "GPA — MS Analytics", value: 3.81, suffix: "", prefix: "", decimals: 2 },
];

export const experiences = [
  {
    id: 1,
    role: "AI/ML Engineer",
    company: "Bank of New York (BNY)",
    period: "Jan 2026 – Apr 2026",
    location: "Boston, MA",
    summary:
      "LLM multi-agent systems for treasury verification at one of the world's largest custodian banks.",
    description: [
      "Co-developed a novel LLM/GenAI multi-agent treasury verification system using LangChain and LangGraph to automate treasury account validation, orchestrate agent workflows, integrate human-in-the-loop checkpoints, and reduce manual processing time by 35%",
      "Built RAG pipelines for compliance and treasury document retrieval using OpenAI embeddings and ChromaDB, enabling agents to cross-check account records, payments, verification rules, and internal policy documents across 1,200+ reference files",
      "Developed scalable Python data pipelines to automate feature engineering and model-training data ingestion, improving end-to-end data retrieval latency by 44% under strict financial compliance and auditability requirements",
      "Trained and evaluated Scikit-learn, XGBoost, and PyTorch anomaly-detection models on transaction, account, and verification features, improving treasury exception-detection accuracy by 15% and prioritizing high-risk cases for analyst review",
      "Built and maintained an end-to-end MLOps pipeline using MLflow, Docker, and CI/CD automation to support experiment tracking, model retraining, evaluation, and deployment, reducing engineering maintenance overhead by 25%",
    ],
    tech: [
      "LangChain",
      "LangGraph",
      "OpenAI API",
      "ChromaDB",
      "PyTorch",
      "XGBoost",
      "MLflow",
      "Docker",
      "Python",
    ],
  },
  {
    id: 2,
    role: "AI/ML Engineer",
    company: "Vivma Software Inc.",
    period: "Jan 2022 – Aug 2024",
    location: "India",
    summary:
      "ML anomaly detection and large-scale data pipelines for regulated investment banking clients.",
    description: [
      "Built an XGBoost anomaly-detection model on compliance-review data for a regulated investment banking client, raising flagged-transaction precision from 0.62 to 0.81 (a 31% gain) at fixed recall and cutting manual review workload by 22%",
      "Engineered large-scale data pipelines processing 1.5 million records per month across four teams using Python, SQL, Pandas, and Apache Spark, consuming from a Kafka-backed event stream for real-time ingestion",
      "Designed feature-transformation logic that converts raw financial data into ML-ready feature sets through 12 standardized steps, supporting downstream modeling for investment banking and capital markets client engagements",
      "Developed a model-validation pipeline using Scikit-learn and Weights & Biases that surfaces label drift and feature leakage, reducing data discrepancies by 38% and enabling reproducible benchmarking across model iterations",
      "Standardized SQL and dbt feature pipelines across three teams, cutting processing time from 12 days to 8 days (a 33% reduction), improving data consistency by 25%, and delivering roughly $850K in annual engineering-hour savings",
    ],
    tech: [
      "Python",
      "SQL",
      "Apache Spark",
      "Kafka",
      "dbt",
      "XGBoost",
      "Scikit-learn",
      "Weights & Biases",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "LOB Predictor",
    subtitle: "Latency-Optimized ML Inference Engine",
    description:
      "Trained a gradient-boosted classifier on Level 2 order-book data with 18 engineered microstructure features, exported via ONNX and rewrote inference in C++ to reach 0.7ms p99 latency on a 1M-event load test — backtested for Sharpe and drawdown.",
    tags: ["C++", "ONNX", "Scikit-learn", "Python", "Low-Latency"],
    github: "https://github.com/sahilniranjan/lob-latency-project",
    live: "https://lob-latency.streamlit.app/",
    highlight: "0.7ms p99 latency",
    featured: true,
  },
  {
    id: 2,
    title: "Customer Behavior Analytics Platform",
    subtitle: "Four-Model ML Platform, API + UI",
    description:
      "Deployed a four-model platform — K-Means segmentation, XGBoost churn prediction at 0.91 AUC-ROC, pattern detection, and an item-based recommender — across 50,000+ transactions, served via a Flask API and Streamlit front end.",
    tags: ["XGBoost", "K-Means", "Flask", "Streamlit", "SQL"],
    github: "https://github.com/sahilniranjan/Customer-Behavior-Analytics-Web-App",
    live: "https://customer-behavior-analytics-web-app-deployed-bttwhavm4abrpzsie.streamlit.app/",
    highlight: "0.91 AUC-ROC",
    featured: true,
  },
  {
    id: 3,
    title: "Real-Time 3D Pose Classification",
    subtitle: "Granted Patent — IN 202211030731",
    description:
      "Invented and patented a real-time 3D pose classification system achieving 97% accuracy. Uses computer-vision body-landmark detection to classify and correct posture with live feedback.",
    tags: ["Python", "OpenCV", "TensorFlow", "MediaPipe", "Patent"],
    github: "https://github.com/sahilniranjan",
    live: "https://drive.google.com/drive/folders/1W032h3Su-seW4cDe0DOIbOAbbDqL8xL4?usp=sharing",
    highlight: "Patented — 97% accuracy",
    featured: true,
  },
  {
    id: 4,
    title: "Emotion Recognition System",
    subtitle: "Published Research — IJEAST Vol. 6 No. 7",
    description:
      "Multi-modal deep learning system for emotion classification combining facial-expression analysis with speech and text signals. Published in the International Journal of Engineering Applied Sciences and Technology.",
    tags: ["Python", "Deep Learning", "NLP", "Computer Vision", "Research"],
    github: "https://github.com/sahilniranjan",
    live: "https://www.ijeast.com/search.php?search=emoTIONAL+RECOGNITION+USING+FACIAL+EXPRESSIONS+AND+SPEECH+ANALYSIS",
    highlight: "Published Research",
    featured: true,
  },
];

export const skillCategories = [
  {
    name: "Programming",
    color: "#8B5CF6",
    skills: ["Python", "R", "SAS", "C++", "SQL"],
  },
  {
    name: "Machine Learning",
    color: "#EC4899",
    skills: [
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "TensorFlow",
      "PyTorch",
      "ONNX",
      "Pandas",
      "NumPy",
      "Anomaly Detection",
      "Feature Engineering",
    ],
  },
  {
    name: "LLMs & GenAI",
    color: "#22D3EE",
    skills: [
      "Transformers",
      "BERT",
      "Hugging Face",
      "LangChain",
      "LangGraph",
      "OpenAI API",
      "RAG Pipelines",
      "ChromaDB",
      "Multi-Agent Systems",
    ],
  },
  {
    name: "Data Engineering",
    color: "#F59E0B",
    skills: [
      "Apache Spark",
      "Apache Kafka",
      "Airflow",
      "dbt",
      "PostgreSQL",
      "MongoDB",
      "Tableau",
    ],
  },
  {
    name: "MLOps & Deployment",
    color: "#34D399",
    skills: [
      "MLflow",
      "Weights & Biases",
      "Docker",
      "Kubernetes",
      "GitHub Actions CI/CD",
      "AWS",
      "FastAPI",
      "Streamlit",
      "Model Monitoring",
    ],
  },
];

export const allSkills = skillCategories.flatMap((cat) =>
  cat.skills.map((skill) => ({ name: skill, color: cat.color }))
);

export const publications = [
  {
    type: "Patent",
    title: "Real-time 3D pose classification system",
    detail: "Patent IN 202211030731 (Granted) — 97% accuracy",
    url: "https://drive.google.com/drive/folders/1W032h3Su-seW4cDe0DOIbOAbbDqL8xL4?usp=sharing",
  },
  {
    type: "Publication",
    title: "Emotion classification via multi-modal deep learning",
    detail: "IJEAST, Vol. 6, No. 7",
    url: "https://www.ijeast.com/search.php?search=emoTIONAL+RECOGNITION+USING+FACIAL+EXPRESSIONS+AND+SPEECH+ANALYSIS",
  },
];

export const education = [
  {
    degree: "Master of Professional Studies in Analytics",
    school: "Northeastern University",
    location: "Boston, MA",
    gpa: "3.81",
    period: "Expected June 2026",
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
    school: "International Institute of Information Technology Bangalore",
    location: "Bangalore, India",
    gpa: "",
    period: "October 2023",
    achievements: [],
    coursework: [],
  },
  {
    degree: "BTech in Computer Science and Engineering",
    school: "Guru Gobind Singh Indraprastha University",
    location: "Delhi, India",
    gpa: "",
    period: "2018 – 2022",
    achievements: [
      {
        text: "Patent Holder — India Patent 202211030731 (Granted)",
        url: "https://drive.google.com/drive/folders/1W032h3Su-seW4cDe0DOIbOAbbDqL8xL4?usp=sharing",
      },
      {
        text: "Published Researcher — IJEAST Vol. 6 No. 7",
        url: "https://www.ijeast.com/search.php?search=emoTIONAL+RECOGNITION+USING+FACIAL+EXPRESSIONS+AND+SPEECH+ANALYSIS",
      },
    ],
    coursework: [],
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
