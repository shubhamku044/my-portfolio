import React, { ReactNode, } from 'react';
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
  SiVisualstudiocode,
  SiPython,
  SiGit,
  SiGithub,
  SiNpm,
  SiYarn,
  SiFigma,
  SiGo
} from 'react-icons/si';
import { Experience, Projects } from '../components';
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
  {
    name: 'VS Code',
    icon: <SiVisualstudiocode className="h-6 w-6" />,
  }
];

const styles = {
  subHeading: 'text-3xl lg:text-4xl font-semibold',
  desc: 'text-gray-700 dark:text-gray-300 md:text-lg',
};

const Home = () => {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold lg:text-5xl">Hey, I&apos;m Shubham 👋</h1>
        <p className={styles.desc}>
          Building web applications is something I enjoy doing every day, from the server side to the client side. I
          always enjoy taking on programming challenges and learning new technologies. Currently, I&apos;m working
          as a Software Engineer Intern at <Link className="font-semibold text-blue-500 underline dark:text-blue-400" href="https://www.sharefable.com/" target="_blank" rel="noreferrer">Fable</Link>.
          <br /><br />
          ReactJs, NextJs, TypeScript, and Node.js are my go-to tools for building web applications.
          I&apos;m also a fan of Go and Python.
        </p>
      </div>
      <div className="space-y-4">
        <h4 className={styles.subHeading}>Technologies 💻</h4>
        <p className={styles.desc}>
          I use a wide range of tools and technologies to improve the quality of my code and projects, as well
          as my development workflow. The languages and technologies listed below are those that I am actively
          working with in my present work and have mastered through previous experience.
        </p>
        <ul className="flex w-full flex-wrap items-center justify-center gap-3 border-2 p-2 dark:border-gray-900 sm:gap-5">
          {techStack.map(({ icon, name }, index) => (
            <li key={`${index}-${name}`}>
              <span>
                {icon}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-4">
        <h4 className="text-3xl font-semibold">Projects 🛠️</h4>
        <p className={styles.desc}>
          I take pleasure in crafting open-source projects on GitHub, both as a means of
          continuous learning and a platform for sharing my expertise. Here, I present a selection of my most
          well-received repositories.
        </p>
        <Projects />
      </div>
      <div className="space-y-4">
        <h4 className={styles.subHeading}>Experience 🏢</h4>
        <Experience />
      </div>
    </div>
  );
};

export default Home;
