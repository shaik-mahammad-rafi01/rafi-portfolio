import { type ComponentType, type SVGProps } from "react";
import { FaGithub, FaLinkedin, FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { SiTypescript, SiExpress } from "react-icons/si";

type IconProps = SVGProps<SVGSVGElement> & { size?: string | number };

export const GithubIcon = FaGithub as unknown as ComponentType<IconProps>;
export const LinkedinIcon = FaLinkedin as unknown as ComponentType<IconProps>;
export const ReactIcon = FaReact as unknown as ComponentType<IconProps>;
export const NodeJsIcon = FaNodeJs as unknown as ComponentType<IconProps>;
export const TypescriptIcon = SiTypescript as unknown as ComponentType<IconProps>;
export const AwsIcon = FaAws as unknown as ComponentType<IconProps>;
export const ExpressIcon = SiExpress as unknown as ComponentType<IconProps>;
