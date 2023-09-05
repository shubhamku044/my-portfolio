'use client';
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
  SiGo,
} from 'react-icons/si';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import ProjectCard from '../components/ProjectCard';
import { Experience } from '../components';

interface ITechStack {
  name: string;
  icon: ReactNode;
}

const techStack: ITechStack[] = [
  {
    name: 'TypeScript',
    icon: <SiTypescript className='w-6 h-6' />,
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript className='w-6 h-6' />,
  },
  {
    name: 'NodeJS',
    icon: <SiNodedotjs className='w-6 h-6' />,
  },
  {
    name: 'React',
    icon: <SiReact className='w-6 h-6' />,
  },
  {
    name: 'NextJS',
    icon: <SiNextdotjs className='w-6 h-6' />,
  },
  {
    name: 'HTML',
    icon: <SiHtml5 className='w-6 h-6' />,
  },
  {
    name: 'CSS',
    icon: <SiCss3 className='w-6 h-6' />,
  },
  {
    name: 'Sass',
    icon: <SiSass className='w-6 h-6' />,
  },
  {
    name: 'TailwindCSS',
    icon: <SiTailwindcss className='w-6 h-6' />,
  },
  {
    name: 'Git',
    icon: <SiGit className='w-6 h-6' />,
  },
  {
    name: 'GitHub',
    icon: <SiGithub className='w-6 h-6' />,
  },
  {
    name: 'NPM',
    icon: <SiNpm className='w-6 h-6' />,
  },
  {
    name: 'Yarn',
    icon: <SiYarn className='w-6 h-6' />,
  },
  {
    name: 'Python',
    icon: <SiPython className='w-6 h-6' />,
  },
  {
    name: 'Figma',
    icon: <SiFigma className='w-6 h-6' />,
  },
  {
    name: 'VS Code',
    icon: <SiVisualstudiocode className='w-6 h-6' />,
  },
  {
    name: 'Go',
    icon: <SiGo className='w-6 h-6' />,
  },
];

const styles = {
  subHeading: 'text-3xl font-semibold',
  desc: 'text-gray-700 dark:text-gray-300',
};

const Home = () => (
  <div className='space-y-10'>
    {/* <div className='space-y-4'>
      <h1 className='text-4xl font-bold'>Hey, I&apos;m Shubham 👋</h1>
      <p className={styles.desc}>
        I&apos;m a fullstack developer, mainly working with NodeJS applications.
        I like to work on discord bot&apos;s, using discord.js, or working on sites
        for myself, my friends or for a project I am working on! I mainly use TypeScript,
        I have been using Lua more lately for another position I have within a gaming community.
      </p>
    </div>
    <div className='space-y-4'>
      <h4 className={styles.subHeading}>Technologies 💻</h4>
      <p className={styles.desc}>
        I use a variety of tools to streamline my development process and increase the quality of
        both my code, and my projects. Below is a list of technologies and languages I&apos;ve
        had experience with in the past, or use currently.
      </p>
      <ul className='dark:border-gray-900 border-2 flex gap-3 sm:gap-5 w-full flex-wrap items-center justify-center p-2'>
        {
          techStack.map(({ icon, name }, index) => (
            <li key={index}>
              <Tippy arrow content={<span>{name}</span>}>
                <span>
                  {icon}
                </span>
              </Tippy>
            </li>
          ))
        }
      </ul>
    </div>
    <div className='space-y-4'>
      <h4 className='text-3xl font-semibold'>Projects 🛠️</h4>
      <p className={styles.desc}>
        In my free time, I enjoy creating open source projects on GitHub, so I can learn from others
        and showcase what I know. In total, all of my open sourced projects have earnt me 10 stars
        on GitHub, and 4 forks. Below are some of my most popular repositories.
      </p>
      <ul className='grid grid-cols-1 md:grid-cols-2 gap-2'>
        <li>
          <ProjectCard
            name='Discord Bot'
            description='A discord bot I created for my friends and I to use in our discord server.'
            githubLink=''
            liveLink=''
            techStack={[<SiTypescript className='h-5 w-5' key={1} />, <SiTailwindcss className='h-5 w-5' key={2} />]}
          />
        </li>
        <li>
          <ProjectCard
            name='Discord Bot'
            description='A discord bot I created for my friends and I to use in our discord server.'
            githubLink=''
            liveLink=''
            techStack={[<SiTypescript className='h-5 w-5' key={1} />, <SiTailwindcss className='h-5 w-5' key={2} />]}
          />
        </li>
        <li>
          <ProjectCard
            name='Discord Bot'
            description='A discord bot I created for my friends and I to use in our discord server.'
            githubLink=''
            liveLink=''
            techStack={[<SiTypescript className='h-5 w-5' key={1} />, <SiTailwindcss className='h-5 w-5' key={2} />]}
          />
        </li>
      </ul>
    </div>
    <div className='space-y-4'>
      <h4 className={styles.subHeading}>Experience 🏢</h4>
      <Experience />
    </div> */}
  </div>
);

export default Home;
