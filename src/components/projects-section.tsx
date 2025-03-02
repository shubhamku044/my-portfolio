import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const projects = [
  {
    title: 'Postel',
    duration: 'March 2024 - Present',
    description:
      'AI-powered content generation platform for social media. Write engaging content in seconds with one-click generation and human-like content optimized for LinkedIn, X, Reddit, Medium, and Quora.',
    image: '/projects/postel.png',
    techStack: [
      'Next.js',
      'TypeScript',
      'React',
      'TailwindCSS',
      'Shadcn',
      'Radix UI',
      'Better Auth',
      'HonoJS',
      'Trigger.dev',
      'Resend',
      'OpenAI',
      'Vercel',
    ],
    website: '#',
  },
  {
    title: 'NativeExpress',
    duration: 'February 2024 - March 2024',
    description:
      'Complete toolkit for quickly building, launching, and monetizing React Native apps. Includes boilerplate code, authentication, payments, UI components, and comprehensive guides.',
    image: '/projects/nativeexpress.png',
    techStack: [
      'React Native',
      'Expo',
      'TypeScript',
      'RevenueCat',
      'Gluestack UI',
      'Supabase',
      'Next.js',
      'TailwindCSS',
      'Shadcn',
      'Radix UI',
      'Vercel',
    ],
    website: '#',
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
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Check out my latest work
          </h2>
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
              />
              <CardContent className="flex flex-1 flex-col justify-between p-4 text-start">
                <div className="space-y-1">
                  <h3 className="mt-1 text-base font-semibold tracking-tight">{project.title}</h3>
                  <p className="font-sans text-xs">{project.duration}</p>
                  <p className="prose text-muted-foreground dark:prose-invert max-w-full text-pretty font-sans text-xs">
                    {project.description}
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <Badge key={i} className="rounded-md px-2 py-1 text-xs text-black">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="mt-3 flex w-full items-center gap-2">
                    <Globe size={16} /> Website
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}