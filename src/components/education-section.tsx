'use client';
import Image from 'next/image';

const education = [
  {
    company: 'TECHNO MAIN SALT LAKE, KOLKATA, INDIA',
    role: 'B.Tech in Computer Science and Engineering',
    duration: '2021 - 2025',
    logo: 'https://www.ticollege.ac.in/img/tig/footer-logo.png',
  },
];

export default function Education() {
  return (
    <section id="education">
      <div className="space-y-3">
        <h2 className="text-xl font-bold">Education</h2>
        <div className="space-y-3">
          {education.map((job, index) => (
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