'use client';
import Image from 'next/image';

const workExperience = [
  {
    company: 'TESTLIFY',
    role: 'Full stack developer intern',
    duration: 'October 2024 - Present',
    logo: 'https://testlify.com/wp-content/uploads/2023/10/cropped-cropped-Testlify-Icon-192x192.png',
  },
  {
    company: 'FABLE',
    role: 'Software Engineer Intern',
    duration: 'November 2022 - June 2024',
    logo: 'https://www.sharefable.com/favicon.png',
  },
];

export default function WorkExperience() {
  return (
    <section id="experience">
      <div className="space-y-3">
        <h2 className="text-xl font-bold">Work Experience</h2>
        <div className="space-y-3">
          {workExperience.map((job, index) => (
            <div key={index} className="flex items-start">
              <Image
                src={job.logo}
                alt={job.company}
                width={44}
                height={44}
                className="rounded-full"
              />
              <div className="ml-4 flex flex-1 items-start justify-between">
                <div>
                  <h3 className="inline-flex items-center justify-center text-xs font-semibold leading-none sm:text-sm">
                    {job.company}
                  </h3>
                  <p className="font-sans text-xs">{job.role}</p>
                </div>
                <p className="text-muted-foreground text-right text-xs tabular-nums sm:text-sm">
                  {job.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}