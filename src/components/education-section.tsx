'use client';
import { motion } from 'framer-motion';

const education = {
  institution: 'Techno Main Salt Lake, Kolkata',
  degree: 'B.Tech in Computer Science and Engineering',
  duration: '2021 - 2025'
};

export default function EducationSection() {
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
            Education
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {education.degree}
              </h3>
              <p className="font-medium text-gray-700 dark:text-gray-300">
                {education.institution}
              </p>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1 md:mt-0">
              {education.duration}
            </div>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            Focused on software engineering principles, data structures, algorithms,
            and modern web development technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
