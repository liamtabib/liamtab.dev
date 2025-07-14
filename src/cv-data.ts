export interface CVData {
  name: string;
  about: string;
  experience: Experience[];
  education: Education[];
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  keySkills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  skills?: string[];
}

export const CV_DATA: CVData = {
  name: "Liam Tabibzadeh",
  about: "Fullstack Data Engineer passionate about building robust, end-to-end systems that transform raw data into meaningful insights. What I enjoy most about my work is the combination of hands-on technical problem solving and the need to understand business context through collaboration with stakeholders.",
  experience: [
    {
      title: "Data Engineer",
      company: "Solita",
      duration: "Mar 2025 – Present (5 months)",
      location: "Stockholm, Stockholm County, Sweden",
      description: "",
      keySkills: ["Terraform", "DevOps", "plus 3 additional skills (not listed)"]
    },
    {
      title: "Data & ML",
      company: "Braive",
      duration: "Aug 2024 – Feb 2025 (7 months)",
      location: "Stockholm, Stockholm County, Sweden — On‑site",
      description: "Designed and developed the data platform at Braive, processing raw patient and clinician event data and managing a large dbt codebase. Analysed app‑usage data to optimise user funnels, resulting in improved onboarding and higher user retention. Performed AI proofs‑of‑concept in the Braive app to automate clinician workflows. Technology stack included: Twilio Segment (event tracking), PII masking, Fivetran (ingestion), BigQuery/dbt/Looker, Azure OpenAI API.",
      keySkills: ["Data Architecture", "Google Cloud Platform (GCP)", "plus 4 additional skills (not listed)"]
    },
    {
      title: "Master Thesis Intern",
      company: "RISE Research Institutes of Sweden",
      duration: "Jan 2024 – Jun 2024 (6 months)",
      location: "Gothenburg, Västra Götaland County, Sweden — On‑site",
      description: "Worked as an ML engineer on a project aimed at improving data quality for autonomous‑driving systems using Generative AI solutions. Designed, implemented and trained models, delivering production‑ready solutions to developers at Smart Eye.",
      keySkills: ["End‑to‑End Project Management", "Autonomous Driving", "plus 1 additional skill (not listed)"]
    },
    {
      title: "Data Scientist",
      company: "Kungliga biblioteket (The National Library of Sweden)",
      duration: "Jan 2023 – Dec 2023 (1 year)",
      location: "Stockholm, Stockholm County, Sweden — Hybrid",
      description: "Built complex data pipelines for large volumes of unstructured digitised materials, beginning with OCR‑based text extraction from PDFs. Ingested metadata via APIs and web‑scraping, designed data schemas, applied transformations in Python, and employed Hugging Face language models for NLP tasks.",
      keySkills: ["Data Analytics", "Data Visualisation", "plus 2 additional skills (not listed)"]
    },
    {
      title: "Course Coordinator & Lecturer in Statistics",
      company: "Lund University",
      duration: "Aug 2021 – Jan 2022 (6 months)",
      location: "",
      description: "Designed and taught undergraduate business courses covering design of experiments, unsupervised methods and regression.",
      keySkills: ["Project Management"]
    }
  ],
  education: [
    {
      institution: "Uppsala University",
      degree: "Master of Science (M.S.), Machine Learning",
      duration: "2022–2024",
      skills: ["Data Engineering", "Data Science", "plus 2 additional skills (not listed)"]
    },
    {
      institution: "Uppsala University",
      degree: "Bachelor of Science (B.S.), Statistics",
      duration: "2018–2022"
    }
  ]
};