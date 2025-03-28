'use client';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { BoldLink } from '@/components';
import { Globe } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import Link from 'next/link';

const projects = [
  {
    title: 'La Resume',
    description: (
      <>
        La-Resume is a free, <BoldLink>open-source</BoldLink>, and ATS-friendly resume builder
        powered by LaTeX. Just enter your details, preview, and{' '}
        <BoldLink>download the PDF and LaTeX</BoldLink> source. Built with Next.js and TypeScript.
        It is used by <BoldLink>800+ users</BoldLink> as of now. <BoldLink>110+</BoldLink> stars on
        GitHub.
      </>
    ),
    image: '/projects/la-resume.png',
    techStack: [
      'Next.js',
      'TypeScript',
      'Docker',
      'React',
      'TailwindCSS',
      'Shadcn',
      'Clerk',
      'MongoDB',
      'Prisma',
      'AWS',
      'Python',
      'Vercel',
    ],
    website: 'https://la-resume.tech',
    github: 'https://github.com/shubhamku044/la-resume',
    imageBlurHash: 'L4Ro{d~W@M?Z00Md?sRQ8xkXELWU',
  },
  {
    title: 'Sheets Manager',
    description: (
      <>
        A powerful tool to <BoldLink>delete, copy, manage access, sort, and filter</BoldLink>
        your Google Sheets effortlessly. Perform bulk actions, streamline your workflow, and stay
        organized with <BoldLink>advanced filtering and automation</BoldLink>. No more tedious
        manual tasks—manage everything in one place with ease.
      </>
    ),
    image: '/projects/sheetsmanager.png',
    techStack: ['Next.js', 'ReactJS', 'Google API', 'Vercel', 'TailwindCSS', 'ShadCN'],
    website: 'https://sheetsmanager.com',
    imageBlurHash: 'L7QT4P0100xtN1bI_2-:Dz~m_39I',
  },
  {
    title: 'Miro Board',
    description: (
      <>
        A collaborative whiteboard application that allows users to{' '}
        <BoldLink>draw, write, and chat</BoldLink>
        with each other in real-time. Built using Next.js, Convex, and Liveblocks.
      </>
    ),
    image: '/projects/miro-board.png',
    techStack: ['Next.js', 'Convex', 'Liveblocks', 'React', 'Vercel', 'TailwindCSS', 'ShadCN'],
    website: 'https://miro-board-fawn.vercel.app/',
    github: 'https://github.com/shubhamku044/miro-board',
    imageBlurHash: 'L7QT4P0100xtN1bI_2-:Dz~m_39I',
  },
  {
    title: 'Restaurant Management System',
    description: (
      <>
        Revolutionize restaurant management with a <BoldLink>GoLang-powered REST API</BoldLink>.
        Seamlessly handle orders, inventory, and reservations with unparalleled performance and
        security.
      </>
    ),
    image: 'https://opengraph.githubassets.com/1a/shubhamku044/restaurant-management-system',
    techStack: ['GoLang', 'REST API', 'Gin', 'Gorm', 'MongoDB', 'Docker', 'Postman', 'JWT'],
    website: null,
    github: 'https://github.com/shubhamku044/restaurant-management-system',
  },
  {
    title: 'TypoSpeed Tracker',
    description: (
      <>
        TypoSpeed Tracker is your gateway to honing your typing skills. Test your{' '}
        <BoldLink>typing speed and accuracy</BoldLink> with our user-friendly platform, akin to
        10fastfingers. Improve your typing prowess and track your progress today!
      </>
    ),
    image: '/projects/typo-speed-tracker.png',
    techStack: ['Next.js', 'React', 'TypeScript', 'Vercel'],
    website: 'https://typospeed-tracker.vercel.app/',
    github: 'https://github.com/shubhamku044/typospeed-tracker',
    imageBlurHash: 'LZB:?Zj?s@j?_Nozk9og_Nj?adfi',
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="mx-auto max-w-4xl space-y-12 py-12 text-center">
        <div className="space-y-2">
          <Badge className="inline-block rounded-lg bg-black px-3 py-1 text-sm text-white">
            My Projects
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Check out my Projects</h2>
          <p className="mx-auto mt-2 max-w-2xl text-gray-500">
            I&apos;ve worked on a variety of projects, from simple websites to complex web
            applications. Here are a few of my favorites.
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-3 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="flex h-full flex-col overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="h-40 w-full object-cover"
                placeholder="blur"
                loading="lazy"
                blurDataURL={project?.imageBlurHash ?? 'L4Ryd6~W@N?a00Q-?rRQ4To#I:WB'}
              />
              <CardContent className="flex flex-1 flex-col justify-between p-4 text-start">
                <div className="space-y-1">
                  <h3 className="mt-1 text-base font-semibold tracking-tight">{project.title}</h3>
                  <p className="prose text-muted-foreground dark:prose-invert max-w-full text-pretty font-sans text-xs">
                    {project.description}
                  </p>
                </div>
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <Badge
                        key={i}
                        className="cursor-default bg-amber-200/60 text-stone-900 transition-all hover:bg-amber-200/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-3 flex gap-2">
                    {project.website && (
                      <Link target="_blank" href={project.website}>
                        <Badge className="gap-2 bg-black px-2 py-1 text-amber-50">
                          <Globe size={12} /> Website
                        </Badge>
                      </Link>
                    )}
                    {project.github && (
                      <Link target="_blank" href={project.github}>
                        <Badge className="gap-2 bg-black px-2 py-1 text-amber-50">
                          <FiGithub size={12} /> Github
                        </Badge>
                      </Link>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
