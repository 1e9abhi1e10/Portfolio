import { Portfolio } from '@/types/portfolio';
import { placeholderImages } from '@/lib/placeholder-images';

export const portfolioData: Portfolio = {
  personalInfo: {
    name: "Abhishek Patidar",
    title: "Software Engineer",
    bio: "I’m a recent graduate working on AI-driven technologies at Mercor. I previously interned at Summer of Bitcoin and contributed as an open-source developer through Google Summer of Code. I enjoy competitive programming and tackling challenging problems.",
    avatar: placeholderImages.avatar,
    resume: "/resume.pdf",
    tagline: "Focused on building reliable AI systems, high-performance backends, and robust developer tools.",
    yearsOfExperience: 1
  },
  contact: {
    email: "abhishekpatidar2311@gmail.com",
    phone: "",
    location: "Bengaluru, India",
    linkedin: "https://www.linkedin.com/in/abhishekpatidar2311/",
    github: "https://github.com/1e9abhi1e10",
    website: "",
    twitter: ""
  },
  skills: [
    {
      id: "1",
      name: "Python",
      category: "languages",
      proficiency: 5,
      yearsOfExperience: 4,
      icon: "python"
    },
    {
      id: "2",
      name: "C++",
      category: "languages",
      proficiency: 5,
      yearsOfExperience: 4,
      icon: "cpp"
    },
    {
      id: "3",
      name: "Go",
      category: "languages",
      proficiency: 4,
      yearsOfExperience: 2,
      icon: "go"
    },
    {
      id: "4",
      name: "JavaScript (ES6+)",
      category: "languages",
      proficiency: 4,
      yearsOfExperience: 3,
      icon: "javascript"
    },
    {
      id: "5",
      name: "React.js",
      category: "frontend",
      proficiency: 5,
      yearsOfExperience: 3,
      icon: "react"
    },
    {
      id: "6",
      name: "FastAPI",
      category: "frameworks",
      proficiency: 5,
      yearsOfExperience: 2,
      icon: "fastapi"
    },
    {
      id: "7",
      name: "PostgreSQL",
      category: "database",
      proficiency: 4,
      yearsOfExperience: 2,
      icon: "postgresql"
    },
    {
      id: "8",
      name: "SQLite",
      category: "database",
      proficiency: 4,
      yearsOfExperience: 2,
      icon: "sqlite"
    },
    {
      id: "9",
      name: "Docker",
      category: "tools",
      proficiency: 4,
      yearsOfExperience: 2,
      icon: "docker"
    },
    {
      id: "10",
      name: "Linux",
      category: "tools",
      proficiency: 4,
      yearsOfExperience: 4,
      icon: "linux"
    }
  ],
  projects: [
    {
      id: "1",
      title: "TripMate – AI Smart Travel Planner",
      description: "AI-based smart travel planner with budget tracking, map support, and an Ask AI workflow.",
      longDescription:
        "Developed TripMate, an AI-first travel planning application that helps users plan trips end-to-end. The app integrates AI vendor linking and an Ask AI workflow to generate itineraries, track budgets, and surface location-aware suggestions. The system is built with a React + Vite frontend and an Express backend, deployed on Vercel and Render for scalable releases.",
      technologies: ["React", "Vite", "Express.js", "Node.js", "JavaScript", "Maps API", "REST APIs"],
      image: "/images/trip.png",
      images: ["/images/trip.png"],
      githubUrl: "https://github.com/1e9abhi1e10/TripMate",
      liveUrl: "",
      category: "ai",
      // featured: true/
      // createdDate: "2024-01-01",
      // completedDate: "2024-06-30",
      // status: "completed",
      challenges: [
        "Designing a smooth Ask AI workflow around travel use cases",
        "Handling external APIs for maps and travel data",
        "Ensuring a responsive UI and reliable backend under varying network conditions"
      ],
      learnings: [
        "Building AI-assisted UX flows for consumer apps",
        "Deploying full-stack apps across Vercel and Render",
        "Designing modular backend services for future features"
      ]
    },
    {
      id: "2",
      title: "AI-Based Resume Reviewer",
      description: "AI-powered resume reviewer with JD match scoring, NLP recommendations, and analytics dashboard.",
      longDescription:
        "Built an AI-based Resume Reviewer using Python, Streamlit, and spaCy to automatically extract key resume fields and match them against job descriptions. Implemented JD match scoring with NLP-driven recommendations, role prediction, and skill suggestions. Added an analytics dashboard backed by SQLite and Plotly to visualize scores and insights across 100+ resumes.",
      technologies: ["Python", "Streamlit", "spaCy", "NLP", "Plotly", "SQLite"],
      image: "/images/ai.jpeg",
      images: ["/images/ai.jpeg"],
      githubUrl: "https://github.com/1e9abhi1e10/AI-Based-Resume-Reviewer",
      liveUrl: "",
      category: "ai",
      challenges: [
        "Designing robust NLP pipelines for varied resume formats",
        "Scoring JD-resume similarity in a meaningful, human-readable way",
        "Building visual analytics on top of structured resume data"
      ],
      learnings: [
        "Practical NLP with spaCy in production-style tools",
        "Data modeling and analytics with SQLite and Plotly",
        "Designing UX for AI explainability in career tools"
      ]
    },
    {
      id: "3",
      title: "Sparse Polynomial GCD Optimizations for SymPy",
      description: "Open-source contributions to SymPy implementing sparse GCD and PRS algorithms for polynomials.",
      longDescription:
        "Implemented sparse GCD algorithms and PRS-based methods for polynomial computations in SymPy as a Google Summer of Code project. The work reduced computation time by up to 97% across benchmarks and improved GCD computation across multiple domains. Added comprehensive benchmarks to demonstrate 20–97% speedups across 20 algorithms and 5 domains.",
      technologies: ["Python", "SymPy", "Algorithms", "Performance Benchmarking"],
      image: "/images/gcd.png",
      images: ["/images/gcd.png"],
      githubUrl: "https://summerofcode.withgoogle.com/archive/2023/projects/JBxiR5tN",
      liveUrl: "",
      category: "other",
      challenges: [
        "Designing efficient sparse representations for polynomials",
        "Ensuring correctness and performance across algebraic domains",
        "Integrating new algorithms into a large, mature open-source codebase"
      ],
      learnings: [
        "Advanced algorithmic optimization in symbolic computation",
        "Contributing to large open-source projects at scale",
        "Designing and interpreting detailed performance benchmarks"
      ]
    }
  ],
  experience: [
    {
      id: "1",
      company: "Summer of Bitcoin",
      position: "Software Development Engineering Intern",
      startDate: "2024-May",
      endDate: "2024-August",
      description:
        "Worked on firmware update infrastructure for ASIC-based Bitcoin mining hardware, ensuring compatibility and reliability across multiple device models.",
      achievements: [
        "Designed a robust firmware update system for 10+ ASIC models, ensuring full device compatibility.",
        "Enhanced overall system reliability by ~40% using smart caching and optimized update processes.",
        "Developed a scalable, user-friendly solution for firmware management with support for remote servers."
      ],
      technologies: ["Go", "Python", "Firmware Systems", "Caching", "Distributed Systems"],
      type: "internship",
      projectLink: "https://www.summerofbitcoin.org/program-details/2024/r/rectcEvzVdwHh7gwb"
    },
    {
      id: "2",
      company: "Google Summer of Code – SymPy",
      position: "Open Source Developer",
      startDate: "2023-May",
      endDate: "2023-September",
      description:
        "Contributed to SymPy by optimizing polynomial GCD algorithms with sparse representations and PRS methods.",
      achievements: [
        "Optimized SymPy polynomial processing with sparse GCD algorithms, reducing computation time by up to 97%.",
        "Implemented PRS algorithms with sparse representations, improving GCD computation across algebraic domains.",
        "Introduced benchmarks showing 20–97% speed improvements across 20 algorithms in 5 domains."
      ],
      technologies: ["Python", "SymPy", "Algorithms", "Performance Engineering"],
      type: "internship",
      projectLink: "https://summerofcode.withgoogle.com/archive/2023/projects/JBxiR5tN"
    }
  ],
  education: [
    {
      id: "1",
      institution: "Shri G. S. Institute of Technology and Science",
      degree: "Bachelor of Technology",
      field: "Electrical Engineering",
      startDate: "2021-October",
      endDate: "2025-June",
      gpa: "",
      achievements: [
        "Secured Global Rank 359 among 20,000+ participants in Google Kickstart 2022.",
        "Top 1% (50/5,000) selection from 50 countries in Summer of Bitcoin 2024.",
        "Top 2% (967/43,765) selection from 160 countries in Google Summer of Code 2023.",
        "Codeforces Specialist (peak 1570, 550+ problems), LeetCode Knight (peak 1849, 1100+ problems), CodeChef 4-Star (peak 1907, 250+ problems)."
      ],
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (OOP)",
        "Operating Systems",
        "Database Management Systems (DBMS)",
        "Computer Networks"
      ]
    }
  ]
};