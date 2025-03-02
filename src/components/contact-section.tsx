'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="bg-gradient-to-b from-[#16213e] to-[#0f3460] py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-8 text-4xl font-bold text-white">Let&apos;s Work Together</h2>
          <p className="mb-12 text-xl text-gray-200">
            Currently available for full-time roles and contract work. Let&apos;s discuss how I can
            contribute to your team!
          </p>
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="mailto:your@email.com"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-amber-500 px-8 py-4 text-lg font-semibold text-white sm:w-auto"
            >
              Schedule a Call
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/resume.pdf"
              className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white sm:w-auto"
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}