'use client';

import Image from 'next/image';
import { useState } from 'react';

const workExperience = [
  {
    company: 'Testlify',
    role: 'Full Stack Developer',
    duration: 'Oct 2024 – Present',
    location: 'Mumbai, IN (Remote)',
    logo: 'https://testlify.com/wp-content/uploads/2023/10/cropped-cropped-Testlify-Icon-192x192.png',
    techStack: 'Typescript, Vue.js, Nuxt.js, React Native, Express.js, MongoDB',
    details: [
      'Contributed to TypeScript migration in Nuxt.js codebase, improving type safety and maintainability.',
      'Replaced base64 image storage with direct S3 uploads from markdown editor, cutting DB bloat and API load.',
      'Implemented multi-monitor proctoring to block external screens, strengthening exam integrity for 2,000+ users.',
      'Refactored large Vue files by initiating Option-to-Composition API migration and guiding teammates to build reusable composable and components.',
      'Integrated reCAPTCHA in OTP flow, preventing spam from overseas bots and saving $5,000+ in Twilio credits.',
      'Managed React Native app via Expo; upgraded audio question flow and removed deprecated packages.',
      'Replaced bulky libraries with native Expo Camera and rerouted audio uploads from api.video to GCP for better performance.',
    ],
  },
  {
    company: 'Fable',
    role: 'Software Engineer Intern (Founding Team)',
    duration: 'Nov 2022 – June 2024',
    location: 'Bengaluru, IN (Remote)',
    logo: 'https://www.sharefable.com/favicon.png',
    techStack: 'React.js, Next.js, Express.js, AWS, Slack API, GA, GitHub Actions',
    details: [
      'Worked on Fable’s core B2B interactive demo platform from inception as part of the founding engineering team.',
      'Built and maintained user interfaces in React.js using Styled Components, enhancing usability and code quality.',
      'Created a real-time notification service integrating Slack API for instant alerts on form submissions.',
      'Developed and maintained Fable’s browser extension with shared auth and interactive preview support.',
      'Built landing page with Next.js and implemented CI/CD on AWS via GitHub Actions, improving SEO and reducing deployment time.',
      'Tracked events with Google Analytics, driving 9,000+ monthly visitors through behavior-based optimizations.',
    ],
  },
];

export default function WorkExperience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="experience">
      <div className="space-y-3">
        <h2 className="text-xl font-bold">Work Experience</h2>
        <div className="space-y-3">
          {workExperience.map((job, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-3">
                <button
                  className="group flex w-full cursor-pointer items-start gap-3 rounded-md p-2 transition-colors hover:bg-gray-100 focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`exp-panel-${index}`}
                  type="button"
                >
                  <Image
                    src={job.logo}
                    alt={job.company}
                    width={40}
                    height={40}
                    className="mt-1 rounded-full"
                  />
                  <div className="flex-1 text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-base font-bold leading-tight">{job.company}</h3>
                        <p className="text-xs font-medium text-gray-700">{job.role}</p>
                      </div>
                      <div className="mt-1 flex items-center gap-1 whitespace-nowrap text-[11px] text-gray-500 sm:mt-0 sm:text-xs">
                        {job.duration}
                        <span className="hidden sm:inline">| {job.location}</span>
                      </div>
                    </div>
                    <div className="mt-0.5 text-xs text-gray-500">{job.techStack}</div>
                  </div>
                  <svg
                    className={`ml-2 mt-1 size-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-90' : 'rotate-0'} group-hover:text-gray-600`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <div
                  id={`exp-panel-${index}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 py-2 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                  style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
                >
                  <ul className="list-disc space-y-1 pl-8 pr-2 text-sm text-gray-800">
                    {job.details.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="mt-2 pl-8 text-xs text-gray-500 sm:hidden">
                    <span>{job.location}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}