'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    title: 'La Resume',
    description: 'A free, open-source, and ATS-friendly resume builder powered by LaTeX. Built with Next.js, TypeScript, and modern web technologies.',
    techStack: ['Next.js', 'TypeScript', 'Docker', 'MongoDB', 'AWS', 'Python'],
    website: 'https://la-resume.tech',
    github: 'https://github.com/shubhamku044/la-resume',
    stats: ['800+ Users', '110+ GitHub Stars']
  },
  {
    title: 'Sheets Manager',
    description: 'A powerful tool to manage Google Sheets with bulk operations, advanced filtering, and automation features.',
    techStack: ['Next.js', 'React', 'Google API', 'TailwindCSS'],
    website: 'https://sheetsmanager.com',
    stats: ['Production Ready', 'Google Integration']
  },
  {
    title: 'Miro Board',
    description: 'A collaborative whiteboard application with real-time drawing, writing, and chat capabilities.',
    techStack: ['Next.js', 'Convex', 'Liveblocks', 'TailwindCSS'],
    website: 'https://miro-board-fawn.vercel.app/',
    github: 'https://github.com/shubhamku044/miro-board',
    stats: ['Real-time Collaboration', 'Live Features']
  },
  {
    title: 'Restaurant Management System',
    description: 'A comprehensive restaurant management system with GoLang-powered REST API for orders, inventory, and reservations.',
    techStack: ['GoLang', 'Gin', 'MongoDB', 'Docker', 'JWT'],
    github: 'https://github.com/shubhamku044/restaurant-management-system',
    stats: ['REST API', 'Microservices']
  }
];

export default function ProjectsSection() {
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
            Featured Projects
          </h2>
        </motion.div>

        <div className="space-y-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="pb-3 border-b border-gray-100 dark:border-gray-700 last:border-b-0"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-1">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-1">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-2 md:mt-0 md:ml-4">
                  {project.website && (
                    <Link
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                      aria-label={`Visit ${project.title} website`}
                    >
                      <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    </Link>
                  )}
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                      aria-label={`View ${project.title} source code`}
                    >
                      <CodeBracketIcon className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Technologies:</strong> {project.techStack.join(', ')}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Highlights:</strong> {project.stats.join(', ')}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}