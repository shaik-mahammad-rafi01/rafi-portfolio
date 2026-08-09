import { type ComponentType, type SVGProps } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type IconProps = SVGProps<SVGSVGElement> & { size?: string | number };

export const GithubIcon = FaGithub as unknown as ComponentType<IconProps>;
export const LinkedinIcon = FaLinkedin as unknown as ComponentType<IconProps>;
