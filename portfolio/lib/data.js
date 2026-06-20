import { projectLinks } from "./config";

export const profile = {
  name: "Anurag Mohapatra",
  initials: "AM",
  role: "AI Systems Engineer & Chemical Engineer",
  tagline:
    "I build retrieval, agent, and vision pipelines — and bring a chemical engineer's eye for structure to how systems are wired together.",
  eyebrow: "BITS Pilani · Chemistry & Chemical Engineering, 2027",
  location: "Pilani, Rajasthan",
  bio: "Dual-degree student at BITS Pilani in Chemistry and Chemical Engineering, currently working across retrieval-augmented generation, multi-agent reasoning systems, and vision-language models for diagram understanding. I placed world rank 45 of 13,000+ in Meta Hacker Cup's AI Track, and I spend most of my time at the intersection of structured data, agentic pipelines, and applied ML.",
};

export const education = {
  institution: "BITS Pilani",
  degree: "M.Sc. (Hons.) Chemistry & B.E. (Hons.) Chemical Engineering",
  period: "Oct 2022 — Present",
  coursework: [
    "Machine Learning",
    "Generative AI",
    "Probability & Statistics",
    "Linear Algebra",
    "Calculus",
  ],
};

export const experience = [
  {
    role: "SWE Co-Op Intern",
    org: "Algo University",
    period: "Apr 2025 — Jul 2025",
    location: "Remote",
    points: [
      "Developed an online coding judge platform with a multi-language compiler (C++, Python, Java, JavaScript) supporting real-time output display and error tracking.",
      "Containerized the compiler service with Docker and deployed scalable backend, compiler, and contest services on AWS ECR.",
    ],
    stack: ["C++", "Python", "Java", "JavaScript", "Docker", "AWS ECR", "React.js", "Node.js", "Express.js", "MongoDB"],
  },
  {
    role: "IT Intern",
    org: "Bid Alert",
    period: "May 2024 — Jul 2024",
    location: "Guntur",
    points: [
      "Built a web scraper and PDF data extractor (BeautifulSoup, Selenium, PyTesseract, PyMuPDF) to pull government tender data from e-tender portals.",
      "Handled CAPTCHA bypass, converted extracted data to Excel, and fully automated the extraction pipeline end to end.",
    ],
    stack: ["Python", "BeautifulSoup", "Selenium", "PyTesseract", "PyMuPDF"],
  },
];

export const projects = [
  {
    slug: "rag-platform",
    name: "RAG-Powered Document Intelligence Platform",
    category: "AI Engineering",
    period: "Jan 2025 — Present",
    summary:
      "An end-to-end retrieval-augmented generation system that ingests PDFs, images, and unstructured text, then answers questions with document-grounded, hallucination-resistant responses.",
    points: [
      "Architected an end-to-end RAG system ingesting PDFs, images, and unstructured text into Pinecone using LangChain and OpenAI embeddings.",
      "Implemented multimodal retrieval by encoding images with CLIP embeddings, enabling joint similarity search across text and visual data.",
      "Built a context-aware conversational interface powered by GPT-4 with memory and document-grounded responses.",
      "Designed a scalable backend with FastAPI, deployed on AWS (EC2 + API Gateway).",
      "Built a responsive React frontend and containerized services with Docker, with CI/CD via GitHub Actions.",
      "Improved answer relevance and reduced hallucinations through retrieval grounding and context-injection strategies.",
    ],
    stack: ["Pinecone", "LangChain", "OpenAI API", "CLIP", "FastAPI", "React", "Docker", "AWS EC2"],
    links: projectLinks.ragPlatform,
    featured: true,
  },
  {
    slug: "multi-agent-system",
    name: "Multi-Agent AI System — Meta Hacker Cup",
    category: "Agentic Systems",
    period: "May 2025 — Jun 2025",
    summary:
      "A coordinated multi-agent pipeline for competitive programming problems, built for Meta Hacker Cup's AI Track, with agents specialized for understanding, generation, verification, and optimization.",
    points: [
      "Built a multi-agent AI system using LangGraph and LangChain, with specialized agents for problem understanding, solution generation, verification, and optimization.",
      "Designed an agentic pipeline enabling iterative reasoning, self-correction, and solution refinement.",
      "Achieved significantly higher performance than standalone LLM baselines through coordinated multi-agent collaboration.",
      "Implemented task decomposition and tool-usage strategies, improving reasoning accuracy on complex competitive programming problems.",
      "Optimized inference flow with dynamic agent routing and feedback loops.",
    ],
    stack: ["LangGraph", "LangChain", "LLMs", "Python"],
    links: projectLinks.multiAgent,
    featured: true,
  },
  {
    slug: "vlm-engineering-diagrams",
    name: "Vision-Language Model for Engineering Diagrams",
    category: "Applied ML / Fine-tuning",
    period: "May 2025 — Present",
    summary:
      "A fine-tuned vision-language model that converts hand-drawn P&ID diagrams, circuits, and flowcharts into structured JSON and Mermaid.js — trained efficiently on a single GPU.",
    points: [
      "Fine-tuned Moondream2 (~2B params) using Visual Prompt Tuning (VPT-Deep) + LoRA adapters for domain-specific diagram understanding.",
      "Built a system converting hand-drawn P&ID, circuit diagrams, and flowcharts into structured JSON and Mermaid.js representations.",
      "Achieved parameter-efficient training (<1% trainable params) using QLoRA with 4-bit quantization, enabling training on a single GPU.",
      "Designed a pipeline combining a SigLIP vision encoder + projection MLP + Phi-1.5 LLM with LoRA adapters for structured output generation.",
      "Implemented grammar-constrained decoding to ensure valid JSON schema and topology-aware outputs.",
      "Built and annotated a custom dataset of engineering diagrams with node-edge representations.",
      "Proposed hierarchical symbol prompting and topology-aware decoding to improve node-detection F1 and output validity.",
    ],
    stack: ["Moondream2", "QLoRA", "LoRA", "SigLIP", "Phi-1.5", "VPT"],
    links: projectLinks.vlmDiagrams,
    featured: true,
  },
];

export const achievements = [
  {
    title: "Meta Hacker Cup — World Rank 45",
    detail: "Out of 13,000+ applicants in Round 1 of the AI Track.",
    description:
      "Built a multi-agent AI system using LangGraph and LangChain with specialized agents for problem understanding, solution synthesis, verification, and optimization — achieving top performance over standalone model baselines.",
    highlight: true,
  },
];

export const skills = {
  Languages: ["C++", "Python", "JavaScript", "C"],
  "AI / ML": ["LangChain", "LangGraph", "OpenAI API", "CLIP", "LoRA / QLoRA", "Pinecone"],
  "Infra & Backend": ["FastAPI", "Node.js", "Express.js", "MongoDB", "Docker", "AWS (EC2, ECR, API Gateway)"],
  Tooling: ["React.js", "Git", "GitHub", "GitHub Actions"],
};
