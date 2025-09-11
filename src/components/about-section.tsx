'use client';
import { motion } from 'framer-motion';

export default function AboutSection() {

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
            As an active open-source contributor and Level 2 Seller on Fiverr, I&apos;ve served <strong>50+ clients</strong>
            delivering high-quality solutions that drive business growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}