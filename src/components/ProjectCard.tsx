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
    className='block min-h-[8rem] cursor-pointer rounded-md border-2 p-4 hover:shadow dark:border-gray-800 dark:hover:border-gray-600'
  >
    <div>
      <h3 className='text-lg font-bold'>{name}</h3>
      <p className='max-w-[24rem] text-sm dark:text-gray-400'>
        {description}
      </p>
    </div>
    <div className='mt-8 flex items-center justify-between space-x-8'>
      <div className='flex items-end space-x-8'>
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
        <div className='flex space-x-4 text-sm font-light dark:text-gray-300'>
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
