'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

export default function Hero() {
  return (
    <section className="pt-6 pb-4 px-6 md:px-8 border-b border-gray-200 dark:border-gray-700">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header with image and main info */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-4">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="shrink-0"
            >
              <Image
                src="https://avatars.githubusercontent.com/u/77788249?v=4"
                alt="Shubham Sharma"
                width={100}
                height={100}
                className="rounded-full border-2 border-gray-300 dark:border-gray-600 object-cover"
                priority
              />
            </motion.div>

            {/* Main info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 text-center md:text-left"
            >
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                Shubham Sharma
              </h1>
              
              {/* Eye-catching role with highlight */}
              <div className="mb-3">
                <p className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-1">
                  Full-Stack Developer
                </p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm">
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full font-medium">
                    ✓ 2+ Years Experience
                  </span>
                  {/* <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full font-medium">
                    ✓ 50+ Projects Delivered
                  </span> */}
                  <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full font-medium">
                    ✓ Available Now
                  </span>
                </div>
              </div>

              {/* Key technologies highlight */}
              <div className="mb-3">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Specialized in:</p>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  React • Next.js • TypeScript • Node.js • Python • AWS
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 px-3 py-1 rounded-lg">
                  <HiMail className="w-4 h-4" />
                  <a href="mailto:shubhamku044@gmail.com" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors font-medium">
                    shubhamku044@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <a href="https://github.com/shubhamku044" target="_blank" rel="noopener noreferrer" 
                     className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                     title="GitHub Profile">
                    <FaGithub className="w-4 h-4" />
                  </a>
                  <a href="https://linkedin.com/in/shubhamku044" target="_blank" rel="noopener noreferrer"
                     className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                     title="LinkedIn Profile">
                    <FaLinkedin className="w-4 h-4" />
                  </a>
                  <a href="https://x.com/shubhamku044" target="_blank" rel="noopener noreferrer"
                     className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                     title="Twitter Profile">
                    <FaTwitter className="w-4 h-4" />
                  </a>
                </div>
                <a href="https://la-resume.tech/shared/08583c3b-e208-4256-89d9-73ec36a15957" 
                   target="_blank" 
                   className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  📄 Download Resume
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}