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
  SiVisualstudiocode,
  SiPython,
  SiGit,
  SiGithub,
  SiNpm,
  SiYarn,
  SiFigma,
  SiRust
} from 'react-icons/si';
import ProjectCard from '../components/ProjectCard';
import { Experience } from '../components';

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
    name: 'Rust',
    icon: <SiRust className="h-6 w-6" />,
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
  subHeading: 'text-3xl font-semibold',
  desc: 'text-gray-700 dark:text-gray-300',
};

const Home = () => {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Hey, I&apos;m Shubham 👋</h1>
        <p className={styles.desc}>
          As a passionate full-stack developer, I thrive on crafting dynamic web applications using the
          power of React and Express. My journey in software development has led me to explore the exciting
          world of Rust, where I&apos;m continuously expanding my skill set to create robust, high-performance
          solutions. I&apos;m committed to delivering exceptional results in every project, blending creativity with
          technical expertise.
        </p>
      </div>
      <div className="space-y-4">
        <h4 className={styles.subHeading}>Technologies 💻</h4>
        <p className={styles.desc}>
          I employ a diverse array of tools and technologies to enhance my development workflow and elevate the caliber
          of my code and projects. The following is a compilation of the languages and technologies with which I have
          gained proficiency through prior experience and actively utilize in my current work.
        </p>
        <ul className="flex w-full flex-wrap items-center justify-center gap-3 border-2 p-2 dark:border-gray-900 sm:gap-5">
          {
            techStack.map(({ icon }, index) => (
              <li key={index}>
                <span>
                  {icon}
                </span>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="space-y-4">
        <h4 className="text-3xl font-semibold">Projects 🛠️</h4>
        <p className={styles.desc}>
          During my leisure hours, I take pleasure in crafting open-source projects on GitHub, both as a means of
          continuous learning and a platform for sharing my expertise. Here, I present a selection of my most
          well-received repositories.
        </p>
        <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <li>
            <ProjectCard
              name="Discord Bot"
              description="A discord bot I created for my friends and I to use in our discord server."
              githubLink=""
              liveLink=""
              techStack={[<SiTypescript className="h-5 w-5" key={1} />, <SiTailwindcss className="h-5 w-5" key={2} />]}
            />
          </li>
          <li>
            <ProjectCard
              name="Discord Bot"
              description="A discord bot I created for my friends and I to use in our discord server."
              githubLink=""
              liveLink=""
              techStack={[<SiTypescript className="h-5 w-5" key={1} />, <SiTailwindcss className="h-5 w-5" key={2} />]}
            />
          </li>
          <li>
            <ProjectCard
              name="Discord Bot"
              description="A discord bot I created for my friends and I to use in our discord server."
              githubLink=""
              liveLink=""
              techStack={[<SiTypescript className="h-5 w-5" key={1} />, <SiTailwindcss className="h-5 w-5" key={2} />]}
            />
          </li>
        </ul>
      </div>
      <div className="space-y-4">
        <h4 className={styles.subHeading}>Experience 🏢</h4>
        <Experience />
      </div>
    </div>
  );
};

export default Home;
