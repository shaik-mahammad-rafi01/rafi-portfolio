export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    company: "Everest Engineering",
    role: "Software Developer",
    duration: "2025 – Present",
    location: "India",
    description:
      "Working on full-stack and cross-platform application development, contributing to frontend, backend, API integration, and real-time application features.",
    responsibilities: [
      "Developed responsive web and mobile application features using React.js and React Native.",
      "Built and integrated RESTful APIs using Node.js and Express.js.",
      "Worked with MongoDB and PostgreSQL for application data management.",
      "Implemented real-time communication and notification features using Socket.io and Firebase Cloud Messaging.",
      "Used Git and GitHub for version control and collaborated in an Agile development environment.",
    ],
    technologies: [
      "React.js",
      "React Native",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Socket.io",
      "Firebase",
      "Git",
    ],
  },
];