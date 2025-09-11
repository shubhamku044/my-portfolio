'use client';
import { motion } from 'framer-motion';
import { CodeBracketIcon, DevicePhoneMobileIcon, CloudIcon } from '@heroicons/react/24/outline';

export default function AboutSection() {
  const highlights = [
    {
      icon: CodeBracketIcon,
      title: "3+ Years Experience",
      description: "Building scalable web applications with modern technologies"
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "50+ Clients Served",
      description: "Freelance projects on Fiverr and Upwork with excellent ratings"
    },
    {
      icon: CloudIcon,
      title: "Full-Stack Expertise",
      description: "Frontend, backend, and cloud infrastructure development"
    }
  ];

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
            Professional Summary
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Passionate Software Engineer with over <strong>2+ years of experience</strong> in building modern web applications. 
            Armed with a BTech in Computer Science, I specialize in React, Next.js, TypeScript, and Node.js. 
            As an active open-source contributor and Level 2 Seller on Fiverr, I've served <strong>50+ clients</strong>
            &nbsp;delivering high-quality solutions that drive business growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}