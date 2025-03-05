import React from "react";
import { Code2, Layout, Database, Mail, Github, Linkedin } from "lucide-react";
import { ReactNode } from "react";

interface Skill {
  title: string;
  icon: ReactNode;
  items: string[];
}

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}

interface Social {
  name: string;
  url: string;
  icon: ReactNode;
}

export const skills: Skill[] = [
  {
    title: "Business Analytics",
    icon: <Layout className="h-5 w-5 text-primary" />,
    items: [
      "Python (Pandas, NumPy, Matplotlib)",
      "MySQL",
      "Tableau",
      "PowerBI",
      "Data Analysis",
      "Data Visualization"
    ],
  },
  {
    title: "Machine Learning",
    icon: <Code2 className="h-5 w-5 text-primary" />,
    items: [
      "Decision Tree",
      "Random Forest",
      "LightGBM",
      "K-means",
      "Hierarchical Clustering",
      "CNN"
    ],
  },
  {
    title: "Professional Skills",
    icon: <Database className="h-5 w-5 text-primary" />,
    items: [
      "Office PowerPoint Expert",
      "Office Word Expert",
      "Office Excel Expert",
      "Data Analysis",
      "Business Intelligence",
      "Financial Analysis"
    ],
  },
];

export const projects: Project[] = [
  {
    title: "FlameVision: AI Wildfire Detection",
    description: "Deep learning-based Wildfire Detection System that identifies wildfire presence and locations using computer vision techniques.",
    image: "https://images.unsplash.com/photo-1576044876297-0ca4b7957acf",
    technologies: ["Deep Learning", "MobileNetV2", "YOLOv8", "Computer Vision"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Corporate Green Investment Analysis",
    description: "Analyzed 510 energy companies in China's A-share market using two-way fixed effects model to study financial subsidies impact.",
    image: "https://images.unsplash.com/photo-1623227773277-40c4c6d5d83e",
    technologies: ["Data Analysis", "Statistical Modeling", "Financial Analysis"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Tencent B2B Analytics Platform",
    description: "Developed Python-based analysis tools and Tableau dashboards for B2B cybersecurity products performance monitoring.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    technologies: ["Python", "Tableau", "Data Analysis", "Business Intelligence"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

export const socials: Social[] = [
  {
    name: "Email",
    url: "mailto:lexiezhang123@gmail.com",
    icon: <Mail className="h-5 w-5" />,
  },
  {
    name: "GitHub",
    url: "https://github.com",
    icon: <Github className="h-5 w-5" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/lexiezhangzyq",
    icon: <Linkedin className="h-5 w-5" />,
  }
];