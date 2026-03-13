export const siteConfig = {
  name: "Sahil Niranjan",
  initials: "SN",
  title: "Sahil Niranjan — Data Scientist & ML Engineer",
  description:
    "MS Analytics @ Northeastern University. Former Data Analyst at Vivma Software. Building predictive models, shipping ML pipelines, and exploring where data meets markets.",
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
  { label: "GPA", value: 3.81, suffix: "", prefix: "", decimals: 2 },
];

export const experiences = [
  {
    id: 1,
    role: "Data Analyst Intern",
    company: "Eudaimonic Inc. (DeepSpace)",
    period: "Jan 2026 – Present",
    location: "Remote",
    description: [
      "Implemented RAG pipelines using LangChain and OpenAI LLM APIs, iteratively tuning retrieval strategies and prompt templates to reduce document processing time by 37%",
      "Created evaluation frameworks and metrics for deep learning and transformer-based models, benchmarking across precision, recall, F1, and AUC-ROC to guide model selection and tuning",
      "Trained predictive ML models using PyTorch, Scikit-learn, and XGBoost (neural networks, decision trees, ensemble methods), achieving 83.7% F1-score on customer behavior classification through hyperparameter optimization",
      "Led data collection design and feature extraction workflows, constructing ETL pipelines with Python, SQL, and Airflow to ingest, clean, and transform 5,000+ records daily into ML-ready training datasets",
      "Architected end-to-end ML pipelines automating data ingestion, model training, evaluation, and deployment, reducing manual iteration time and enabling reproducible experimentation at scale",
      "Developed LLM-powered analytics dashboards using Python, Streamlit, and OpenAI API, integrating real-time anomaly detection on health metrics for 59+ users",
    ],
    tech: ["Python", "LangChain", "OpenAI API", "PyTorch", "Scikit-learn", "XGBoost", "SQL", "Airflow", "Streamlit"],
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
      "Developed ML-based financial data validation models using XGBoost and ensemble methods, increasing risk-detection precision by 31% and reducing manual review workload by 22%",
      "Engineered large-scale data pipelines processing 1.5M records monthly of structured and unstructured financial data across 4 teams using Python, SQL, Pandas, and Spark",
      "Designed data collection pipelines and feature transformation logic, converting raw financial datasets into ML-ready feature sets for downstream predictive modeling and model evaluation cycles",
      "Established model evaluation pipelines and validation frameworks using Scikit-learn metrics, reducing data discrepancies by 38% and enabling reproducible benchmarking across model iterations",
      "Standardized SQL-based feature extraction pipelines across 3 teams, improving data consistency by 25%, reducing processing time from 12 to 8 days (33%), and delivering $850K in cost savings",
    ],
    tech: ["Python", "SQL", "Spark", "Pandas", "XGBoost", "Scikit-learn"],
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
    github: "https://github.com/sahilniranjan/lob-latency-project",
    live: "https://lob-latency.streamlit.app/",
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
    github: "https://github.com/sahilniranjan/Customer-Behavior-Analytics-Web-App",
    live: "https://customer-behavior-analytics-web-app-deployed-bttwhavm4abrpzsie.streamlit.app/",
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
    name: "ML Frameworks",
    color: "#A855F7",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "Keras"],
  },
  {
    name: "Models",
    color: "#EC4899",
    skills: [
      "Transformers",
      "LLMs",
      "CNNs",
      "LSTMs",
      "Decision Trees",
      "Random Forest",
      "Logistic Regression",
      "Ensemble Methods",
    ],
  },
  {
    name: "LLMs & GenAI",
    color: "#22D3EE",
    skills: [
      "LangChain",
      "OpenAI API",
      "RAG Pipelines",
      "Prompt Engineering",
      "BERT",
      "Model Eval & Tuning",
    ],
  },
  {
    name: "Data & Tools",
    color: "#F59E0B",
    skills: [
      "Python",
      "C++",
      "SQL",
      "Pandas",
      "NumPy",
      "Spark",
      "Airflow",
      "Feature Engineering",
      "ETL",
      "Flask",
      "Streamlit",
      "Docker",
      "Git",
      "AWS",
    ],
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
    degree: "BTech in Computer Science",
    school: "Guru Gobind Singh Indraprastha University",
    location: "Delhi, India",
    gpa: "",
    period: "2018 – 2022",
    achievements: [
      {
        text: "Patent Holder — India Patent 202211030731",
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
