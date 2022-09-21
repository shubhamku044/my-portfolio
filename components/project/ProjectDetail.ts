export interface ProjectDetailProps {
  id: number;
  name: string;
  description: string;
  liveUrl: string | null;
  githubUrl: string | null;
  imageUrl: string;
  technologies: string[];
}

export const ProjectDetails: ProjectDetailProps[] = [
  {
    id: 1,
    name: 'Project 1',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    liveUrl: 'https://www.google.com',
    githubUrl: 'https://www.google.com',
    imageUrl: '/yaelabs.gif',
    technologies: ['React', 'Typescript', 'Next.js'],
  },
  {
    id: 2,
    name: 'Project 2',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    liveUrl: 'https://www.google.com',
    githubUrl: 'https://www.google.com',
    imageUrl: '/yaelabs.gif',
    technologies: ['React', 'Typescript', 'Next.js'],
  },
];
