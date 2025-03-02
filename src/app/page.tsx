import React, { ReactNode } from 'react';
import {
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiPython,
  SiGit,
  SiGithub,
  SiNpm,
  SiYarn,
  SiFigma,
  SiGo,
} from 'react-icons/si';
import {
  Experience,
  Projects,
  Hero,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
} from '../components';
import Link from 'next/link';

interface ITechStack {
  name: string;
  icon: ReactNode;
}

const techStack: ITechStack[] = [
  {
    name: 'TypeScript',
    icon: <SiTypescript className="h-6 w-6" />,
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript className="h-6 w-6" />,
  },
  {
    name: 'Go lang',
    icon: <SiGo className="h-6 w-6" />,
  },
  {
    name: 'NodeJS',
    icon: <SiNodedotjs className="h-6 w-6" />,
  },
  {
    name: 'React',
    icon: <SiReact className="h-6 w-6" />,
  },
  {
    name: 'NextJS',
    icon: <SiNextdotjs className="h-6 w-6" />,
  },
  {
    name: 'Python',
    icon: <SiPython className="h-6 w-6" />,
  },
  {
    name: 'HTML',
    icon: <SiHtml5 className="h-6 w-6" />,
  },
  {
    name: 'CSS',
    icon: <SiCss3 className="h-6 w-6" />,
  },
  {
    name: 'Sass',
    icon: <SiSass className="h-6 w-6" />,
  },
  {
    name: 'TailwindCSS',
    icon: <SiTailwindcss className="h-6 w-6" />,
  },
  {
    name: 'Git',
    icon: <SiGit className="h-6 w-6" />,
  },
  {
    name: 'GitHub',
    icon: <SiGithub className="h-6 w-6" />,
  },
  {
    name: 'NPM',
    icon: <SiNpm className="h-6 w-6" />,
  },
  {
    name: 'Yarn',
    icon: <SiYarn className="h-6 w-6" />,
  },
  {
    name: 'Python',
    icon: <SiPython className="h-6 w-6" />,
  },
  {
    name: 'Figma',
    icon: <SiFigma className="h-6 w-6" />,
  },
];

const styles = {
  subHeading: 'text-3xl lg:text-4xl font-semibold',
  desc: 'text-gray-700 dark:text-gray-300 md:text-lg',
};

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default Home;