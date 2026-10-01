import { Code, BookOpen, Layers, Cloud } from 'lucide-react';

export const personalInfo = {
  name: "Nirmani Gamage",
  title: "Software Engineering Intern Candidate | IT Undergraduate",
  description: "I'm an Information Technology undergraduate at the University of Moratuwa passionate about building full-stack applications, exploring AI-powered solutions, and learning modern software engineering practices.",
  email: "your.email@example.com", // Placeholder
  github: "https://github.com/Nirmani-Gamage",
  linkedin: "https://www.linkedin.com/in/nirmani-gamage-797167306",
  resumePath: "/resume.pdf",
};

export const aboutCards = [
  {
    title: "Education",
    description: "University of Moratuwa",
    icon: BookOpen,
  },
  {
    title: "Focus",
    description: "Software Engineering",
    icon: Code,
  },
  {
    title: "Development",
    description: "Full-Stack Applications",
    icon: Layers,
  },
  {
    title: "Currently Learning",
    description: "DevOps & Cloud",
    icon: Cloud,
  }
];

export const skills = {
  frontend: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  backend: ["Node.js", "Express.js", "REST APIs", "Socket.IO"],
  database: ["MongoDB", "MongoDB Atlas", "MySQL"],
  programming: ["Java", "JavaScript", "TypeScript", "Python"],
  tools: ["Git", "GitHub", "VS Code", "Postman"],
  devops: ["Docker", "GitHub Actions", "Linux", "AWS", "Terraform"] // Distinguish these as currently learning or hands-on
};

export const projects = [
  {
    id: "studypulse",
    title: "StudyPulse",
    tag: "Full-Stack Web Application",
    description: "StudyPulse is a student study tracking and analytics platform designed to help students organize their study activities, manage goals, track productivity, and understand their learning patterns.",
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Chart.js"],
    features: [
      "Study session tracking",
      "Subject management",
      "Goals",
      "Calendar",
      "Daily tasks",
      "Pomodoro timer",
      "Analytics dashboard",
      "Journal",
      "Learning insights",
      "Authentication"
    ],
    githubUrl: "https://github.com/Nirmani-Gamage/placeholder-studypulse",
    liveUrl: "https://studypulse-demo.placeholder.com",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1000",
    status: "completed"
  },
  {
    id: "edupath",
    title: "EduPath",
    tag: "University Team Project",
    description: "EduPath is an AI-supported learning and career platform designed to help students explore learning opportunities, interact with mentors, and access career-focused resources.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
    features: [
      "Student and mentor interaction",
      "Real-time messaging",
      "Mentor sessions",
      "Learning resources",
      "Career guidance",
      "Authentication",
      "Role-based functionality"
    ],
    note: "University of Moratuwa Team Project",
    githubUrl: "https://github.com/Nirmani-Gamage/placeholder-edupath",
    liveUrl: "https://edupath-demo.placeholder.com",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000",
    status: "completed"
  },
  {
    id: "2048-cloud",
    title: "2048 — Cloud & DevOps Deployment",
    tag: "DevOps Project",
    description: "A hands-on DevOps project focused on deploying, containerizing, and automating a web application using modern cloud and infrastructure tools.",
    technologies: ["Docker", "AWS", "Terraform", "GitHub Actions", "Linux"],
    features: [
      "Cloud deployment",
      "Docker containerization",
      "Infrastructure as Code",
      "CI/CD",
      "Linux environment"
    ],
    githubUrl: "https://github.com/Nirmani-Gamage/placeholder-2048",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=1000",
    status: "building"
  }
];

export const journey = [
  {
    title: "University Software Development",
    subtitle: "University of Moratuwa",
    description: "Developing full-stack and team-based software projects.",
    focus: ["React", "Node.js", "MongoDB", "REST APIs", "Authentication", "Real-time communication", "Testing", "Git/GitHub"]
  },
  {
    title: "Full-Stack Development",
    subtitle: "Practical Learning",
    description: "Building practical MERN applications and learning how frontend and backend systems work together.",
    focus: []
  },
  {
    title: "AI-Powered Applications",
    subtitle: "Exploration",
    description: "Exploring practical AI features that improve software applications rather than using AI only as a demonstration.",
    focus: []
  },
  {
    title: "DevOps & Cloud",
    subtitle: "Currently Learning",
    description: "Currently developing hands-on experience with modern cloud tools and CI/CD pipelines.",
    focus: ["Docker", "Linux", "AWS", "Terraform", "GitHub Actions", "CI/CD"]
  }
];

export const education = {
  institution: "University of Moratuwa",
  degree: "BSc (Hons) in Information Technology",
  faculty: "Faculty of Information Technology",
  period: "2024 – Present",
  relevantAreas: [
    "Object-Oriented Programming",
    "Data Structures & Algorithms",
    "Database Management",
    "Software Engineering",
    "Web Development",
    "Computer Networks",
    "Automata Theory",
    "Enterprise Application Development"
  ]
};

export const currentlyLearning = [
  "Docker", "AWS", "Terraform", "GitHub Actions", "CI/CD", "Cloud Deployment", "System Design"
];
