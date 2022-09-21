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
    name: 'Yaelabs',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    liveUrl: 'https://yaelabs.com/',
    githubUrl: null,
    imageUrl: '/yaelabs.gif',
    technologies: [
      'NextJs',
      'Typescript',
      'TailwindCSS',
      'Figma',
      'Framer Motion',
      'React',
      'SCSS',
    ],
  },
  {
    id: 2,
    name: 'Crypto Sardars',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    liveUrl: 'https://www.cryptosardars.com/',
    githubUrl: null,
    imageUrl: '/cryptoSardars.gif',
    technologies: ['React', 'Javascript', 'Next.js', 'TailwindCSS', 'AOS'],
  },
  {
    id: 3,
    name: 'Airbnb Clone',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    liveUrl: 'https://airbnb-clone-fg7i1ufza-shubhamku044.vercel.app/',
    githubUrl: 'https://github.com/shubhamku044/airbnb-clone',
    imageUrl: '/airbnbClone.gif',
    technologies: [
      'React',
      'Next.js',
      'TailwindCSS',
      'Heroicons',
      'Date-range-picker',
    ],
  },
];
