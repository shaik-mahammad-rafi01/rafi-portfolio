export interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Keep-In-Touch",
    description:
      "A real-time messaging application with authentication, messaging, calling, notifications, and status updates.",
    technologies: [
      "React Native",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Firebase",
    ],
    features: [
      "Developed responsive mobile interfaces using React Native",
      "Built RESTful APIs using Node.js and Express.js",
      "Integrated MongoDB using Mongoose",
      "Implemented authentication and user management",
      "Integrated Firebase Cloud Messaging for push notifications",
      "Worked on calling and notification functionality",
      "Optimized API performance and handled error responses",
      "Collaborated using Git and GitHub",
    ],
    githubUrl: "",
  },

  {
    title: "Everest Canteen Application",
    description:
      "A canteen management mobile application with authentication, role-based access, and backend API integration.",
    technologies: [
      "React Native",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    features: [
      "Developed Login and Registration modules",
      "Created reusable UI components",
      "Connected frontend with backend APIs",
      "Implemented role-based navigation",
      "Managed application state efficiently",
      "Performed API testing using Postman",
      "Used Git for version control",
    ],
    githubUrl: "https://github.com/shaik-mahammad-rafi01/everest-canteen-app.git",
  },

  {
    title: "Task Management System",
    description:
      "A backend task management system providing RESTful APIs for user and task management with PostgreSQL database integration.",
    technologies: [
      "Node.js",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Sequelize",
      "AWS",
    ],
    features: [
      "Developed RESTful APIs for user and task management",
      "Integrated PostgreSQL using Sequelize ORM",
      "Implemented database migrations and seeders",
      "Worked with AWS deployment concepts",
    ],
    githubUrl: "https://github.com/shaik-mahammad-rafi01/task-management-aws.git",
  },
];