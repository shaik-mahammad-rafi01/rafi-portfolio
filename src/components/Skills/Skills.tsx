import { type ComponentType, type SVGProps } from "react";
import { type IconType } from "react-icons";
import { skillCategories } from "../../data/Skills";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
  SiFirebase,
  SiClaude,
  SiOpencode,
} from "react-icons/si";
import {
  FiMonitor,
  FiLayers,
  FiServer,
  FiDatabase,
  FiHardDrive,
  FiLock,
  FiShield,
  FiWifi,
  FiLink,
  FiZap,
  FiTool,
  FiCloud,
  FiCode,
  FiSearch,
} from "react-icons/fi";

import "./Skills.css";

type IconProps = SVGProps<SVGSVGElement> & { size?: string | number };
type IconComponent = ComponentType<IconProps>;

const skillIcons: Record<string, IconType> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  HTML5: SiHtml5,
  CSS3: SiCss,
  "React.js": SiReact,
  "React Native": SiReact,
  "Responsive UI": FiMonitor,
  "Reusable Components": FiLayers,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "RESTful APIs": FiServer,
  MongoDB: SiMongodb,
  Mongoose: SiMongoose,
  PostgreSQL: SiPostgresql,
  "Sequelize ORM": FiDatabase,
  AWS: FiCloud,
  EC2: FiServer,
  S3: FiHardDrive,
  IAM: FiShield,
  VPC: FiWifi,
  Docker: SiDocker,
  "Firebase Cloud Messaging": SiFirebase,
  Authentication: FiLock,
  "API Integration": FiLink,
  Git: SiGit,
  GitHub: SiGithub,
  "VS Code": FiCode,
  Postman: SiPostman,
  Agile: FiTool,
  OpenCode: SiOpencode,
  Claude: SiClaude,
  "AI-assisted Coding": FiZap,
  Debugging: FiSearch,
  "Code Generation": FiCode,
};

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">

        <div className="section-heading">
          <span>TECHNICAL SKILLS</span>
          <h2>Technologies I work with</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div className="skill-card" key={category.title}>

              <h3>{category.title}</h3>

              <div className="skill-list">
                {category.skills.map((skill) => {
                  const Icon = skillIcons[skill] as IconComponent | undefined;
                  return (
                    <span className="skill-tag" key={skill} title={skill}>
                      {Icon ? <Icon size={22} aria-hidden="true" /> : null}
                      {skill}
                    </span>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
