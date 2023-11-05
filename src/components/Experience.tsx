'use client';
import React, { useState } from 'react';
import { LayoutGroup, motion } from 'framer-motion';

interface IExperienceData {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

const experienceData = [
  {
    id: 0,
    title: 'Job 1',
    company: 'Company 1',
    location: 'Location 1',
    startDate: 'Start Date 1',
    endDate: 'End Date 1',
    description: ['Description 1', 'Description 2', 'Description 3', 'Description 4', 'Description 5'],
  },
  {
    id: 1,
    title: 'Job 2',
    company: 'Company 2',
    location: 'Location 2',
    startDate: 'Start Date 2',
    endDate: 'End Date 2',
    description: ['Description 1', 'Description 2', 'Description 3', 'Description 4', 'Description 5'],
  },
  {
    id: 2,
    title: 'Job ',
    company: 'Company 3',
    location: 'Location 3',
    startDate: 'Start Date 3',
    endDate: 'End Date 3',
    description: ['Description 1', 'Description 2', 'Description 3', 'Description 4', 'Description 5'],
  },
  {
    id: 3,
    title: 'Job three',
    company: 'Company 3',
    location: 'Location 3',
    startDate: 'Start Date 3',
    endDate: 'End Date 3',
    description: ['Description 1', 'Description 2', 'Description 3', 'Description 4', 'Description 5'],
  },
  {
    id: 4,
    title: 'Job four',
    company: 'Company 3',
    location: 'Location 3',
    startDate: 'Start Date 3',
    endDate: 'End Date 3',
    description: ['Description 1', 'Description 2', 'Description 3', 'Description 4', 'Description 5'],
  },
  {
    id: 5,
    title: 'Job five',
    company: 'Company 3',
    location: 'Location 3',
    startDate: 'Start Date 3',
    endDate: 'End Date 3',
    description: ['Description 1', 'Description 2', 'Description 3', 'Description 4', 'Description 5'],
  },
];

const Experience = () => {
  const [activeJob, setActiveJob] = useState<IExperienceData>(
    experienceData[experienceData.length - 1],
  );

  return (
    <div className='flex min-h-[14rem] flex-col gap-4 sm:flex-row sm:gap-6'>
      <div className='scrollbar scrollbar-track-gray-700 scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin flex flex-row overflow-x-auto pb-4 sm:flex-col'>
        <LayoutGroup id='a'>
          {experienceData.slice(0).reverse().map((job) => (
            <button
              className={`relative flex min-w-[110px] justify-center border-b-2 border-gray-300 px-6 py-2 text-sm outline-none duration-200 hover:bg-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 sm:min-w-0 sm:justify-start sm:border-b-0 sm:border-l-2 ${activeJob.id === job.id && 'bg-gray-200 dark:bg-gray-800'}`}
              key={job.id}
              onClick={() => setActiveJob(job)}
            >
              <span>{job.title}</span>
              {
                activeJob.id === job.id
                && (
                  <motion.div
                    className={'absolute bottom-[-2px] left-0 z-10 h-[2px] w-full bg-blue-500 dark:bg-blue-500 sm:left-[-2px] sm:top-0 sm:h-full sm:w-[2px]'}
                    layoutId='underline'
                  />
                )
              }
            </button>
          ))}
        </LayoutGroup>
      </div>
      <div className='flex-1'>
        <div>
          <h3 className='text-xl font-semibold'>{activeJob.title} <a href='#' target={'_blank'} className='text-blue-500'>@{activeJob.company}</a></h3>
          <div className='mt-2 flex justify-between text-sm text-gray-500 dark:text-gray-400'>
            <p>{activeJob.startDate} - {activeJob.endDate}</p>
            <p>{activeJob.location}</p>
          </div>
          <ul className='ml-6 mt-4 space-y-2'>
            {activeJob.description.map((desc, i) => (
              <li className='relative text-sm dark:text-gray-400' key={i}>
                <p>{desc}</p>
                <span
                  className='absolute -left-4 top-1/2 h-2 w-2 -translate-y-1/2 bg-gray-300 dark:bg-gray-600'
                  style={{
                    clipPath: 'polygon(100% 50%, 0 0, 0 100%)',
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
