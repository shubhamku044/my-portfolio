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
      'Founded in May 2022, Yae Labs is a Web3 x Metaverse x Anime startup based in Japan.',
    liveUrl: 'https://yaelabs.com/',
    githubUrl: null,
    imageUrl: '/yaelabs.gif',
    technologies: [
      'NextJs',
      'Typescript',
      'TailwindCSS',
      'Figma',
      'Framer Motion',
      'i-18n',
      'React',
      'SCSS',
    ],
  },
  {
    id: 2,
    name: 'Crypto Sardars',
    description:
      'CryptoSardars - Club is a first ever NFT collection of 4444 unique digital Sardars, where each Sardar is living on the Polygon Chain as ERC-721 token.',
    liveUrl: 'https://www.cryptosardars.com/',
    githubUrl: null,
    imageUrl: '/cryptoSardars.gif',
    technologies: ['React', 'Javascript', 'Next.js', 'TailwindCSS', 'AOS'],
  },
  {
    id: 3,
    name: 'Airbnb Clone',
    description:
      "Airbnb Clone is a full-stack web application built with Next.js, TailwindCSS, Mapbox, and Firebase. It's a clone of the Airbnb website.",
    liveUrl: 'https://airbnb-clone-qua5437hy-shubhamku044.vercel.app/',
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
