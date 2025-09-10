'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Unique gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800" />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="animate-blob absolute left-20 top-20 size-72 rounded-full bg-cyan-400 opacity-20 mix-blend-multiply blur-xl"></div>
        <div className="animate-blob animation-delay-2000 absolute right-20 top-40 size-72 rounded-full bg-yellow-400 opacity-20 mix-blend-multiply blur-xl"></div>
        <div className="animate-blob animation-delay-4000 absolute -bottom-8 left-40 size-72 rounded-full bg-pink-400 opacity-20 mix-blend-multiply blur-xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Image with glassmorphism effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 opacity-75 blur-lg"></div>
              <div className="relative rounded-full border border-white/20 bg-white/10 p-2 backdrop-blur-lg">
                <Image
                  src="https://avatars.githubusercontent.com/u/77788249?v=4"
                  alt="Shubham Sharma"
                  width={120}
                  height={120}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-2 -right-2 size-6 animate-pulse rounded-full border-4 border-white/20 bg-gradient-to-r from-green-400 to-emerald-500"></div>
            </div>
          </motion.div>

          {/* Main heading with gradient text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              <span className="text-white">Hi, I&apos;m </span>
              <span className="animate-gradient bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                Shubham
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl font-light text-white/80 md:text-2xl">
              <span className="text-cyan-300">Full-Stack Developer</span> crafting digital experiences with
              <span className="text-pink-300"> modern technologies</span>
            </p>
          </motion.div>

          {/* Status with glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-lg">
              <div className="size-2 animate-pulse rounded-full bg-gradient-to-r from-green-400 to-emerald-500"></div>
              Available for opportunities
            </div>

            {/* CTA Buttons with unique styling */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 to-pink-500 px-8 py-4 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <span className="relative z-10">Get In Touch</span>
                <HiMail className="relative z-10 size-4" />
              </Link>
              <Link
                href="https://la-resume.tech/shared/08583c3b-e208-4256-89d9-73ec36a15957"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-medium text-white backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:bg-white/20"
              >
                View Resume
                <ArrowTopRightOnSquareIcon className="size-4" />
              </Link>
            </div>
          </motion.div>

          {/* Social Links with unique hover effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center gap-6"
          >
            {[
              { icon: FaGithub, href: "https://github.com/shubhamku044", color: "hover:text-purple-300" },
              { icon: FaLinkedin, href: "https://linkedin.com/in/shubhamku044", color: "hover:text-cyan-300" },
              { icon: FaTwitter, href: "https://x.com/shubhamku044", color: "hover:text-pink-300" },
              { icon: HiMail, href: "mailto:shubhamku044@gmail.com", color: "hover:text-yellow-300" }
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white/70 ${social.color} rounded-full border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:scale-125 hover:bg-white/10`}
              >
                <social.icon className="size-6" />
              </Link>
            ))}
          </motion.div>

        </motion.div>

        {/* Unique scroll indicator - positioned outside main content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm text-white/60">Scroll to explore</span>
            <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-2 h-3 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-pink-400"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes gradient {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}