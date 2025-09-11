'use client';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Testlify',
    role: 'Full Stack Developer',
    duration: 'Oct 2024 – Present',
    location: 'Mumbai, IN (Remote)',
    techStack: ['TypeScript', 'Vue.js', 'Nuxt.js', 'React Native', 'Express.js', 'MongoDB'],
    achievements: [
      'Led TypeScript migration in Nuxt.js codebase, improving type safety and maintainability',
      'Optimized image storage by replacing base64 with direct S3 uploads, reducing DB load',
      'Implemented multi-monitor proctoring system, enhancing exam integrity for 2,000+ users',
      'Initiated Option-to-Composition API migration and mentored team on reusable components',
      'Integrated reCAPTCHA in OTP flow, preventing spam and saving $5,000+ in Twilio credits',
      'Upgraded React Native app with Expo Camera and rerouted uploads to GCP for better performance'
    ],
    current: true
  },
  {
    company: 'Fable',
    role: 'Software Engineer Intern (Founding Team)',
    duration: 'Nov 2022 – June 2024',
    location: 'Bengaluru, IN (Remote)',
    techStack: ['React.js', 'Next.js', 'Express.js', 'AWS', 'Slack API', 'GitHub Actions'],
    achievements: [
      'Built core B2B interactive demo platform from inception as founding team member',
      'Developed user interfaces in React.js with Styled Components for enhanced UX',
      'Created real-time notification service with Slack API integration',
      'Built and maintained browser extension with shared authentication',
      'Implemented CI/CD on AWS via GitHub Actions, improving deployment efficiency',
      'Drove 9,000+ monthly visitors through Google Analytics optimization'
    ],
    current: false
  }
];

const education = {
  institution: 'Techno Main Salt Lake, Kolkata',
  degree: 'B.Tech in Computer Science and Engineering',
  duration: '2021 - 2025'
};

export default function ExperienceSection() {
  return (
    <section className="py-4 border-b border-gray-200 dark:border-gray-700">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-3"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 uppercase tracking-wide">
            Professional Experience
          </h2>
        </motion.div>

        <div className="space-y-4">
          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="pb-3 border-b border-gray-100 dark:border-gray-700 last:border-b-0"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {exp.role}
                  </h3>
                  <p className="font-medium text-gray-700 dark:text-gray-300">
                    {exp.company}
                  </p>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1 md:mt-0 md:text-right">
                  <div>{exp.duration}</div>
                  <div>{exp.location}</div>
                  {exp.current && (
                    <span className="inline-flex items-center gap-1 text-green-600 dark:text-green-400 text-xs">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Current
                    </span>
                  )}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-2">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Technologies:</strong> {exp.techStack.join(', ')}
                </p>
              </div>

              {/* Achievements */}
              <ul className="space-y-1">
                {exp.achievements.map((achievement, achIndex) => (
                  <motion.li
                    key={achIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (achIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm"
                  >
                    <div className="w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 shrink-0"></div>
                    <span className="leading-relaxed">
                      {achievement}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}