import React, { ReactNode } from 'react';
import { BsStar } from 'react-icons/bs';
import { VscRepoForked } from 'react-icons/vsc';

interface ProjectCardProps {
  name: string;
  description: string;
  // techStack: React.ElementType<any>[];
  techStack: ReactNode[];
  githubLink: string;
  liveLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name, description, techStack, githubLink, liveLink,
}) => (
  <a
    href={githubLink}
    target={'_blank'}
    rel="noreferrer"
    className='border-2 block dark:border-gray-800 dark:hover:border-gray-600 hover:shadow cursor-pointer p-4 min-h-[8rem] rounded-md'
  >
    <div>
      <h3 className='font-bold text-lg'>{name}</h3>
      <p className='max-w-[24rem] text-sm dark:text-gray-400'>
        {description}
      </p>
    </div>
    <div className='mt-8 flex space-x-8 items-center justify-between'>
      <div className='flex space-x-8 items-end'>
        <div className='flex space-x-3'>
          {techStack.map((tech, index) => {
            const techEl = tech as ReactNode;
            return (
              <div key={index}>
                {techEl}
              </div>
            );
          })}
        </div>
        <div className='flex space-x-4 text-sm dark:text-gray-300 font-light'>
          <div className='flex items-center'>
            <BsStar className='h-4 w-4' />
            <span className='ml-1'>69</span>
          </div>
          <div className='flex items-center'>
            <VscRepoForked className='h-4 w-4' />
            <span className='ml-1'>69</span>
          </div>
        </div>
      </div>
      {liveLink && (
        <a href={liveLink} target={'_blank'} className='' rel="noreferrer">
          Live link
        </a>
      )}
    </div>
  </a>
);

export default ProjectCard;
