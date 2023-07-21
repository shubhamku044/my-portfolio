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
    <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 min-h-[14rem]'>
      <div className='flex flex-row scrollbar scrollbar-track-gray-700 scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin overflow-x-auto sm:flex-col pb-4'>
        <LayoutGroup id='a'>
          {experienceData.slice(0).reverse().map((job) => (
            <button
              className={`px-6 min-w-[110px] sm:min-w-0 outline-none relative flex justify-center sm:justify-start py-2 border-b-2 sm:border-b-0 sm:border-l-2 border-gray-300 dark:border-gray-600 text-sm hover:bg-gray-300 dark:hover:bg-gray-700 duration-200 ${activeJob.id === job.id && 'bg-gray-200 dark:bg-gray-800'}`}
              key={job.id}
              onClick={() => setActiveJob(job)}
            >
              <span>{job.title}</span>
              {
                activeJob.id === job.id
                && (
                  <motion.div
                    className={'absolute -bottom-[2px] sm:top-0 z-10 left-0 sm:-left-[2px] w-full h-[2px] sm:w-[2px] sm:h-full bg-blue-500 dark:bg-blue-500'}
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
          <div className='flex text-sm text-gray-500 dark:text-gray-400 justify-between mt-2'>
            <p>{activeJob.startDate} - {activeJob.endDate}</p>
            <p>{activeJob.location}</p>
          </div>
          <ul className='ml-6 mt-4 space-y-2'>
            {activeJob.description.map((desc, i) => (
              <li className='relative text-sm dark:text-gray-400' key={i}>
                <p>{desc}</p>
                <span
                  className='absolute top-1/2 -translate-y-1/2 -left-4 w-2 h-2 bg-gray-300 dark:bg-gray-600'
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
