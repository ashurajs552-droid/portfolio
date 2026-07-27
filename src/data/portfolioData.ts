export interface Project {
  id: string;
  title: string;
  category: 'cv' | 'llm' | 'ml' | 'fullstack';
  description: string;
  metrics: string[];
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  wireframeType: 'video' | 'rag' | 'face' | 'audio' | 'fitness';
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; icon?: string; hot?: boolean; level: 'Beginner' | 'Intermediate' | 'Advanced' }[];
}

export interface TimelineItem {
  type: 'hackathon' | 'leadership' | 'contribution';
  title: string;
  organization: string;
  date: string;
  description: string;
  badge?: string;
  highlight?: boolean;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  badgeColor: string;
  iconName: string;
}

export const PERSONAL_INFO = {
  name: "Aashu Raj S",
  tagline: "AI/ML Engineer — Computer Vision, NLP & LLM Integrations",
  location: "Bengaluru, India",
  status: "Available for AI / ML Engineering Roles",
  email: "ashurajs551@gmail.com",
  github: "https://github.com/ashurajs552-droid",
  linkedin: "https://linkedin.com/in/aashu-raj-s",
  summary: "B.E. AI & Machine Learning undergraduate engineering real-time AI systems. Specializing in edge-deployed computer vision, local-first LLM architectures, and scalable full-stack ML pipelines.",
  typewriterRoles: [
    "Computer Vision systems",
    "Local-first LLM agents",
    "High-performance AI backends",
    "Edge ML pipelines"
  ],
  heroMetrics: [
    { label: "FPS Real-Time Vision", value: "30 FPS" },
    { label: "Face Recognition Acc.", value: "95%" },
    { label: "Local Retrieval Latency", value: "< 50ms" },
    { label: "Attendance Time Cut", value: "10m ➔ 30s" }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    iconName: "Code2",
    skills: [
      { name: "Python", hot: true, level: "Advanced" },
      { name: "C", level: "Intermediate" },
      { name: "Java", level: "Intermediate" },
      { name: "TypeScript", hot: true, level: "Intermediate" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "SQL", level: "Intermediate" }
    ]
  },
  {
    title: "AI & Deep Learning",
    iconName: "BrainCircuit",
    skills: [
      { name: "PyTorch", hot: true, level: "Advanced" },
      { name: "TensorFlow", level: "Intermediate" },
      { name: "Hugging Face", hot: true, level: "Intermediate" },
      { name: "OpenCV", hot: true, level: "Advanced" },
      { name: "FaceNet", level: "Intermediate" },
      { name: "YOLOv8", hot: true, level: "Advanced" }
    ]
  },
  {
    title: "NLP, LLMs & RAG",
    iconName: "Sparkles",
    skills: [
      { name: "LangChain", hot: true, level: "Intermediate" },
      { name: "Llama 3.1", hot: true, level: "Intermediate" },
      { name: "Groq API", hot: true, level: "Intermediate" },
      { name: "Vector DBs", level: "Intermediate" },
      { name: "Document Ingestion", level: "Intermediate" }
    ]
  },
  {
    title: "Data Science & Analytics",
    iconName: "LineChart",
    skills: [
      { name: "Pandas", level: "Advanced" },
      { name: "NumPy", level: "Advanced" },
      { name: "Scikit-learn", level: "Intermediate" },
      { name: "Librosa", level: "Beginner" },
      { name: "Matplotlib", level: "Intermediate" }
    ]
  },
  {
    title: "Backend & Web APIs",
    iconName: "Server",
    skills: [
      { name: "FastAPI", hot: true, level: "Intermediate" },
      { name: "Flask", level: "Intermediate" },
      { name: "Node.js", level: "Intermediate" },
      { name: "Express", level: "Intermediate" },
      { name: "REST APIs", level: "Advanced" }
    ]
  },
  {
    title: "Full Stack Web & Frontend",
    iconName: "Globe",
    skills: [
      { name: "Next.js 14", hot: true, level: "Intermediate" },
      { name: "React", hot: true, level: "Intermediate" },
      { name: "Tailwind CSS", hot: true, level: "Intermediate" },
      { name: "Streamlit", level: "Intermediate" },
      { name: "HTML5 / CSS3", level: "Advanced" }
    ]
  },
  {
    title: "Databases & Storage",
    iconName: "Database",
    skills: [
      { name: "IndexedDB", hot: true, level: "Intermediate" },
      { name: "SQLite", level: "Intermediate" },
      { name: "Vector Databases", level: "Beginner" }
    ]
  },
  {
    title: "DevOps & Deployment Tools",
    iconName: "Cpu",
    skills: [
      { name: "Docker", hot: true, level: "Beginner" },
      { name: "GitHub Actions", level: "Beginner" },
      { name: "Linux", level: "Intermediate" },
      { name: "Vercel", level: "Intermediate" },
      { name: "Git", level: "Intermediate" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "classpulse-ai",
    title: "ClassPulse AI",
    category: "cv",
    featured: true,
    description: "Real-time AI classroom video analytics and instant emotion/engagement detection system.",
    metrics: [
      "Processed **30 FPS** real-time video stream for classroom monitoring",
      "Achieved **~88% emotion detection accuracy** across 7 granular psychological states",
      "Tracked **20+ students simultaneously**, reducing attendance tracking time from 10 minutes to **under 30 seconds**"
    ],
    tech: ["Python", "OpenCV", "Next.js", "REST APIs"],
    githubUrl: "https://github.com/ashurajs552-droid/ClassPulseAI",
    liveUrl: "https://classpulseai.vercel.app",
    wireframeType: "video"
  },
  {
    id: "docmind",
    title: "DocMind — Local-First Q&A Agent",
    category: "llm",
    featured: true,
    description: "Privacy-focused document ingestion pipeline with zero-latency client-side vector search.",
    metrics: [
      "Engineered AI document ingestion pipeline supporting **PDF/DOCX/PPTX** formats",
      "Utilized **client-side embeddings and IndexedDB** for zero-latency, private local retrieval",
      "Integrated **Llama 3.1 via Groq API** for sub-second, high-throughput inference"
    ],
    tech: ["Next.js 14", "LangChain", "Groq", "IndexedDB"],
    githubUrl: "https://github.com/ashurajs552-droid/DocMind",
    liveUrl: "https://docmindchatbot.vercel.app",
    wireframeType: "rag"
  },
  {
    id: "gymfreak",
    title: "GymFreak — Fitness & Macro Tracking Platform",
    category: "fullstack",
    featured: true,
    description: "Full-stack fitness intelligence and MET-based nutrition tracking application for athletes.",
    metrics: [
      "Engineered **MET-based calorie & workout calculation engine** with automated BMR/TDEE body analytics",
      "Implemented real-time macro tracking with JWT authentication and optimized SQLite persistence",
      "Reduced daily workout and nutrition logging duration from 5 minutes to **under 45 seconds**"
    ],
    tech: ["React", "Node.js", "Express", "SQLite", "Tailwind CSS"],
    githubUrl: "https://github.com/ashurajs552-droid/GymFreak",
    wireframeType: "fitness"
  },
  {
    id: "smart-class-monitor",
    title: "Smart Class Monitor",
    category: "cv",
    featured: false,
    description: "Edge-deployable face recognition framework optimized for dynamic ambient environments.",
    metrics: [
      "Architected using **YOLOv8, OpenCV, and FaceNet** for dual detection-recognition stages",
      "Achieved **95% face recognition accuracy** under dynamic lighting conditions",
      "Optimized frame handling pipeline to improve total processing efficiency by **25%**"
    ],
    tech: ["YOLOv8", "FaceNet", "OpenCV", "Python"],
    githubUrl: "https://github.com/ashurajs552-droid/SmartClassE",
    liveUrl: "https://aimlvemanait.vercel.app",
    wireframeType: "face"
  },
  {
    id: "vox-insight",
    title: "Vox Insight — Voice Analytics Pipeline",
    category: "ml",
    featured: false,
    description: "Speech-to-text audio feature extractor and acoustic sentiment intelligence pipeline.",
    metrics: [
      "Developed speech-to-text and sentiment analysis pipeline achieving **~85% accuracy**",
      "Extracted **MFCC & spectrogram acoustic features** from raw audio files",
      "Generated structured actionable insights from unstructured conversational speech"
    ],
    tech: ["PyTorch", "Hugging Face", "Librosa", "NLP"],
    githubUrl: "https://github.com/ashurajs552-droid",
    wireframeType: "audio"
  }
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    type: "hackathon",
    title: "3rd Place — HACKOTSAVA 2025",
    organization: "SMVITM (National Level Hackathon)",
    date: "2025",
    description: "Engineered an AI-driven solution under high-pressure 24-hour constraints, outperforming 50+ competing collegiate teams nationwide.",
    badge: "National Award 🏆",
    highlight: true
  },
  {
    type: "leadership",
    title: "Student Vice Chair",
    organization: "IEEE Computer Society",
    date: "2024 – Present",
    description: "Leading technical initiatives, organizing hands-on AI/ML workshops, hackathons, and mentoring 200+ engineering students in modern AI software development.",
    badge: "Executive Leadership ⚡",
    highlight: true
  },
  {
    type: "leadership",
    title: "Cultural Coordinator",
    organization: "Collegiate Student Council",
    date: "2024 – 2025",
    description: "Led and managed campus cultural initiatives, organized inter-collegiate technical & creative festivals, and directed student event operations.",
    badge: "Student Leadership ✨",
    highlight: true
  },
  {
    type: "hackathon",
    title: "Participant — Future of Work Hackathon 2025",
    organization: "Kroolo x TGB",
    date: "2025",
    description: "Designed prototype productivity tools using LLMs and automated workflow integration for workplace efficiency.",
    badge: "Hackathon Participant 🚀"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    year: "2026",
    badgeColor: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
    iconName: "BrainCircuit"
  },
  {
    title: "Machine Learning Fundamentals",
    issuer: "Google Cloud",
    year: "2025",
    badgeColor: "from-blue-600/20 to-indigo-500/20 border-indigo-500/30",
    iconName: "Cpu"
  },
  {
    title: "Azure AI Fundamentals",
    issuer: "Microsoft",
    year: "2025",
    badgeColor: "from-sky-500/20 to-blue-600/20 border-sky-500/30",
    iconName: "Cloud"
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    year: "2026",
    badgeColor: "from-emerald-500/20 to-teal-500/20 border-teal-500/30",
    iconName: "Code2"
  }
];
