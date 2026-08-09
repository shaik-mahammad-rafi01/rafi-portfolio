export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React.js",
      "React Native",
      "Responsive UI",
      "Reusable Components",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
    ],
  },
  {
    title: "Databases",
    skills: [
      "MongoDB",
      "Mongoose",
      "PostgreSQL",
      "Sequelize ORM",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS",
      "EC2",
      "S3",
      "IAM",
      "VPC",
      "Docker",
    ],
  },
  {
    title: "Integration",
    skills: [
      "Firebase Cloud Messaging",
      "Authentication",
      "API Integration",
    ],
  },
  {
    title: "Tools & Practices",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Agile",
    ],
  },
  {
    title: "AI-Assisted Development",
    skills: [
      "OpenCode",
      "Claude",
      "AI-assisted Coding",
      "Debugging",
      "Code Generation",
    ],
  },
];