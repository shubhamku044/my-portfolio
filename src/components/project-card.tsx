import Link from "next/link";
import React, { ReactNode } from "react";
import { BsStar } from "react-icons/bs";
import {
  SiCss3,
  SiGithub,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiSass,
  SiTypescript,
} from "react-icons/si";
import { SlLink } from "react-icons/sl";

import { VscRepoForked } from "react-icons/vsc";

interface ProjectCardProps {
  name: string;
  description: string | null;
  language: string;
  githubLink: string;
  liveLink?: string | null;
  stars: number;
  forks: number;
}

function getIcon(language: string): ReactNode {
  switch (language.toLowerCase()) {
    case "typescript":
      return <SiTypescript className="h-6 w-6" />;
    case "javascript":
      return <SiJavascript className="h-6 w-6" />;
    case "go":
      return <SiGo className="h-6 w-6" />;
    case "nodejs":
      return <SiNodedotjs className="h-6 w-6" />;
    case "react":
      return <SiReact className="h-6 w-6" />;
    case "nextjs":
      return <SiNextdotjs className="h-6 w-6" />;
    case "python":
      return <SiPython className="h-6 w-6" />;
    case "html":
      return <SiHtml5 className="h-6 w-6" />;
    case "css":
      return <SiCss3 className="h-6 w-6" />;
    case "sass":
      return <SiSass className="h-6 w-6" />;
  }
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  language,
  githubLink,
  liveLink,
  stars,
  forks,
}) => (
  <div className="flex h-full min-h-[8rem] cursor-pointer flex-col rounded-md border-2 p-4 hover:shadow dark:border-gray-800 dark:hover:border-gray-600">
    <div className="flex-1">
      <h3 className="text-lg font-bold lg:text-xl">{name}</h3>
      <p className="max-w-[24rem] text-sm dark:text-gray-400 lg:text-base">
        {description}
      </p>
    </div>
    <div className="mt-8 flex items-center justify-between space-x-8">
      {getIcon(language)}
      <div className="flex gap-4 text-sm font-light dark:text-gray-300">
        {stars > 0 && (
          <div className="flex items-center">
            <BsStar className="h-4 w-4" />
            <span className="ml-1">{stars}</span>
          </div>
        )}
        {forks > 0 && (
          <div className="flex items-center">
            <VscRepoForked className="h-4 w-4" />
            <span className="ml-1">{forks}</span>
          </div>
        )}
      </div>
      <div className="flex items-center gap-4 text-sm font-light dark:text-gray-300">
        {liveLink && (
          <Link href={liveLink} target={"_blank"} className="" rel="noreferrer">
            <SlLink className="h-5 w-5" />
          </Link>
        )}
        <Link href={githubLink} target="_blank">
          <SiGithub className="h-6 w-6" />
        </Link>
      </div>
    </div>
  </div>
);

export default ProjectCard;
