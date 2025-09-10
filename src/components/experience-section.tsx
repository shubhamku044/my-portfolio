'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';

const experiences = [
  {
    company: 'Testlify',
    role: 'Full Stack Developer',
    duration: 'Oct 2024 – Present',
    location: 'Mumbai, IN (Remote)',
    logo: 'https://testlify.com/wp-content/uploads/2023/10/cropped-cropped-Testlify-Icon-192x192.png',
    techStack: ['TypeScript', 'Vue.js', 'Nuxt.js', 'React Native', 'Express.js', 'MongoDB'],
    achievements: [
      'Led TypeScript migration in Nuxt.js codebase, improving type safety and maintainability',
      'Optimized image storage by replacing base64 with direct S3 uploads, reducing DB load',
      'Implemented multi-monitor proctoring system, enhancing exam integrity for 2,000+ users',
      'Initiated Option-to-Composition API migration and mentored team on reusable components',
      'Integrated reCAPTCHA in OTP flow, preventing spam and saving $5,000+ in Twilio credits',
      'Upgraded React Native app with Expo Camera and rerouted uploads to GCP for better performance'
    ],
    current: true,
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    company: 'Fable',
    role: 'Software Engineer Intern (Founding Team)',
    duration: 'Nov 2022 – June 2024',
    location: 'Bengaluru, IN (Remote)',
    logo: 'https://www.sharefable.com/favicon.png',
    techStack: ['React.js', 'Next.js', 'Express.js', 'AWS', 'Slack API', 'GitHub Actions'],
    achievements: [
      'Built core B2B interactive demo platform from inception as founding team member',
      'Developed user interfaces in React.js with Styled Components for enhanced UX',
      'Created real-time notification service with Slack API integration',
      'Built and maintained browser extension with shared authentication',
      'Implemented CI/CD on AWS via GitHub Actions, improving deployment efficiency',
      'Drove 9,000+ monthly visitors through Google Analytics optimization'
    ],
    current: false,
    gradient: 'from-purple-500 to-pink-500'
  }
];

const education = {
  institution: 'Techno Main Salt Lake, Kolkata',
  degree: 'B.Tech in Computer Science and Engineering',
  duration: '2021 - 2025',
  logo: 'https://www.ticollege.ac.in/img/tig/footer-logo.png',
  gradient: 'from-cyan-500 to-blue-500'
};

export default function ExperienceSection() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Unique background with animated patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900"></div>

      {/* Floating orbs */}
      <div className="absolute inset-0">
        <div className="animate-float absolute left-1/4 top-20 size-64 rounded-full bg-cyan-400/5 blur-3xl"></div>
        <div className="animate-float-delayed absolute bottom-20 right-1/4 size-80 rounded-full bg-pink-400/5 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-white/70">
            My professional journey and academic background in software development
          </p>
        </motion.div>

        {/* Enhanced Timeline */}
        <div className="relative">
          {/* Animated timeline line */}
          <div className="absolute inset-y-0 left-8 hidden w-0.5 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400 opacity-50 md:block"></div>

          {/* Glowing timeline dots */}
          <div className="absolute inset-y-0 left-6 hidden md:block">
            <div className="sticky top-1/2 size-4 animate-pulse rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 blur-sm"></div>
          </div>

          <div className="space-y-16">
            {/* Experience Items */}
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="flex gap-8 md:gap-12">
                  {/* Enhanced Timeline dot */}
                  <div className="relative hidden shrink-0 md:block">
                    <div className="relative size-20">
                      {/* Animated ring */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${exp.gradient} animate-spin-slow rounded-full opacity-50`}></div>

                      {/* Company logo container */}
                      <div className="absolute inset-2 flex items-center justify-center rounded-full border-2 border-white/20 bg-slate-900 transition-colors group-hover:border-white/40">
                        <Image
                          src={exp.logo}
                          alt={exp.company}
                          width={32}
                          height={32}
                          className="rounded-full object-cover"
                        />
                      </div>

                      {/* Current indicator */}
                      {exp.current && (
                        <div className="absolute -right-2 -top-2 size-6 animate-pulse rounded-full border-4 border-slate-900 bg-gradient-to-r from-green-400 to-emerald-500"></div>
                      )}
                    </div>
                  </div>

                  {/* Enhanced Content Card */}
                  <div className="flex-1">
                    {/* Gradient border effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${exp.gradient} ml-20 rounded-3xl opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-50 md:ml-0`}></div>

                    <div className="relative rounded-3xl border border-white/10 bg-slate-900/80 p-8 backdrop-blur-lg transition-all duration-500 hover:border-white/20 group-hover:scale-[1.02]">
                      {/* Header */}
                      <div className="mb-6 flex flex-col lg:flex-row lg:items-start lg:justify-between">
                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-cyan-300">
                            {exp.role}
                          </h3>
                          <p className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-xl font-semibold text-transparent">
                            {exp.company}
                          </p>
                        </div>
                        <div className="mt-4 space-y-2 lg:mt-0 lg:text-right">
                          <div className="flex items-center gap-2 text-white/70">
                            <CalendarIcon className="size-4" />
                            <span className="text-sm font-medium">{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-white/70">
                            <MapPinIcon className="size-4" />
                            <span className="text-sm font-medium">{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Tech Stack with enhanced styling */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {exp.techStack.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: techIndex * 0.1 }}
                              viewport={{ once: true }}
                              className="rounded-xl border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm transition-colors hover:bg-white/20"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements with enhanced styling */}
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: achIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="group/item flex items-start gap-3 text-white/80"
                          >
                            <div className={`size-2 bg-gradient-to-r ${exp.gradient} mt-2.5 shrink-0 rounded-full transition-transform group-hover/item:scale-125`}></div>
                            <span className="text-sm leading-relaxed transition-colors group-hover/item:text-white">
                              {achievement}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Education with enhanced styling */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="flex gap-8 md:gap-12">
                {/* Enhanced Timeline dot for education */}
                <div className="relative hidden shrink-0 md:block">
                  <div className="relative size-20">
                    <div className={`absolute inset-0 bg-gradient-to-r ${education.gradient} animate-pulse rounded-full opacity-50`}></div>
                    <div className="absolute inset-2 flex items-center justify-center rounded-full border-2 border-white/20 bg-slate-900 transition-colors group-hover:border-white/40">
                      <Image
                        src={education.logo}
                        alt={education.institution}
                        width={32}
                        height={32}
                        className="rounded-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Education Content */}
                <div className="flex-1">
                  <div className={`absolute inset-0 bg-gradient-to-r ${education.gradient} ml-20 rounded-3xl opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-50 md:ml-0`}></div>

                  <div className="relative rounded-3xl border border-white/10 bg-slate-900/80 p-8 backdrop-blur-lg transition-all duration-500 hover:border-white/20 group-hover:scale-[1.02]">
                    <div className="mb-4 flex flex-col lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <h3 className="mb-2 text-2xl font-bold text-white transition-colors group-hover:text-cyan-300">
                          {education.degree}
                        </h3>
                        <p className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-xl font-semibold text-transparent">
                          {education.institution}
                        </p>
                      </div>
                      <div className="mt-4 lg:mt-0">
                        <div className="flex items-center gap-2 text-white/70">
                          <CalendarIcon className="size-4" />
                          <span className="text-sm font-medium">{education.duration}</span>
                        </div>
                      </div>
                    </div>
                    <p className="leading-relaxed text-white/80">
                      Focused on software engineering principles, data structures, algorithms,
                      and modern web development technologies.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
          animation-delay: 3s;
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </section>
  );
}