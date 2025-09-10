'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    title: 'La Resume',
    description: 'A free, open-source, and ATS-friendly resume builder powered by LaTeX. Built with Next.js, TypeScript, and modern web technologies.',
    image: '/projects/la-resume.png',
    techStack: ['Next.js', 'TypeScript', 'Docker', 'MongoDB', 'AWS', 'Python'],
    website: 'https://la-resume.tech',
    github: 'https://github.com/shubhamku044/la-resume',
    stats: ['800+ Users', '110+ GitHub Stars'],
    featured: true,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Sheets Manager',
    description: 'A powerful tool to manage Google Sheets with bulk operations, advanced filtering, and automation features.',
    image: '/projects/sheetsmanager.png',
    techStack: ['Next.js', 'React', 'Google API', 'TailwindCSS'],
    website: 'https://sheetsmanager.com',
    stats: ['Production Ready', 'Google Integration'],
    featured: false,
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'Miro Board',
    description: 'A collaborative whiteboard application with real-time drawing, writing, and chat capabilities.',
    image: '/projects/miro-board.png',
    techStack: ['Next.js', 'Convex', 'Liveblocks', 'TailwindCSS'],
    website: 'https://miro-board-fawn.vercel.app/',
    github: 'https://github.com/shubhamku044/miro-board',
    stats: ['Real-time Collaboration', 'Live Features'],
    featured: false,
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Restaurant Management System',
    description: 'A comprehensive restaurant management system with GoLang-powered REST API for orders, inventory, and reservations.',
    image: 'https://opengraph.githubassets.com/1a/shubhamku044/restaurant-management-system',
    techStack: ['GoLang', 'Gin', 'MongoDB', 'Docker', 'JWT'],
    github: 'https://github.com/shubhamku044/restaurant-management-system',
    stats: ['REST API', 'Microservices'],
    featured: false,
    gradient: 'from-orange-500 to-red-500'
  },
  {
    title: 'TypoSpeed Tracker',
    description: 'A typing speed and accuracy testing platform with progress tracking and performance analytics.',
    image: '/projects/typo-speed-tracker.png',
    techStack: ['Next.js', 'React', 'TypeScript', 'Vercel'],
    website: 'https://typospeed-tracker.vercel.app/',
    github: 'https://github.com/shubhamku044/typospeed-tracker',
    stats: ['Performance Analytics', 'Progress Tracking'],
    featured: false,
    gradient: 'from-indigo-500 to-purple-500'
  }
];

export default function ProjectsSection() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Unique mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900"></div>

      {/* Animated geometric patterns */}
      <div className="absolute inset-0">
        <div className="animate-spin-slow absolute left-10 top-10 size-20 rotate-45 border border-cyan-400/20"></div>
        <div className="animate-bounce-slow absolute bottom-20 right-20 size-16 rotate-12 border border-pink-400/20"></div>
        <div className="absolute left-1/4 top-1/2 size-8 rotate-45 animate-pulse bg-purple-400/10"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-white/70">
            A showcase of my recent work, ranging from web applications to APIs and developer tools
          </p>
        </motion.div>

        {/* Improved Grid Layout */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden"
              >
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-3xl opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-75`}></div>

                <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur-lg transition-all duration-500 hover:border-white/20 group-hover:scale-[1.02]">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={300}
                      className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

                    {/* Floating stats */}
                    {project.stats && (
                      <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                        {project.stats.map((stat, statIndex) => (
                          <span
                            key={statIndex}
                            className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
                          >
                            {stat}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute right-4 top-4">
                        <span className="inline-flex items-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 px-3 py-1 text-xs font-bold text-black">
                          ⭐ Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="space-y-3 p-4">
                    <h3 className="text-xl font-bold text-white transition-colors group-hover:text-cyan-300">
                      {project.title}
                    </h3>

                    <p className="line-clamp-3 text-sm leading-relaxed text-white/70">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80 transition-colors hover:bg-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-2 py-1 text-xs text-cyan-400">
                          +{project.techStack.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-2">
                      {project.website && (
                        <Link
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                          <ArrowTopRightOnSquareIcon className="size-4" />
                          Live Demo
                        </Link>
                      )}
                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
                        >
                          <CodeBracketIcon className="size-4" />
                          Code
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View More with unique styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="https://github.com/shubhamku044"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-medium text-white backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:bg-white/20"
          >
            <span>View more projects on GitHub</span>
            <ArrowTopRightOnSquareIcon className="size-5 transition-transform group-hover:rotate-12" />
          </Link>
        </motion.div>
      </div>

      {/* Custom CSS for unique animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-10px) rotate(12deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}