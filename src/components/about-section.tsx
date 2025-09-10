'use client';
import { motion } from 'framer-motion';
import { CodeBracketIcon, DevicePhoneMobileIcon, CloudIcon } from '@heroicons/react/24/outline';

export default function AboutSection() {
  const highlights = [
    {
      icon: CodeBracketIcon,
      title: "3+ Years Experience",
      description: "Building scalable web applications with modern technologies",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "50+ Clients Served",
      description: "Freelance projects on Fiverr and Upwork with excellent ratings",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: CloudIcon,
      title: "Full-Stack Expertise",
      description: "Frontend, backend, and cloud infrastructure development",
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section className="relative overflow-hidden py-20">
      {/* Unique background with geometric shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>

      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 size-full">
          <div className="animate-float absolute left-10 top-20 size-32 rotate-45 bg-cyan-400/10"></div>
          <div className="animate-float-delayed absolute right-20 top-40 size-24 rotate-12 bg-pink-400/10"></div>
          <div className="animate-float-slow absolute bottom-20 left-1/3 size-40 rotate-45 bg-purple-400/10"></div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-white/70">
            Passionate about creating exceptional digital experiences through clean code and innovative solutions
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Content with glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-lg">
              <p className="mb-6 text-lg leading-relaxed text-white/90">
                I&apos;m Shubham, a passionate Software Engineer with over{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text font-semibold text-transparent">
                  3 years of experience
                </span>{' '}
                in building modern web applications. Armed with a BTech in Computer Science, I specialize in
                React, Next.js, TypeScript, and Node.js.
              </p>

              <p className="mb-6 text-lg leading-relaxed text-white/90">
                As an active{' '}
                <a href="https://github.com/shubhamku044" className="font-medium text-cyan-400 underline decoration-cyan-400/50 underline-offset-4 transition-colors hover:text-cyan-300">
                  open-source contributor
                </a>{' '}
                and a{' '}
                <a href="https://www.fiverr.com/s/0bQa65r" className="font-medium text-pink-400 underline decoration-pink-400/50 underline-offset-4 transition-colors hover:text-pink-300">
                  Level 2 Seller on Fiverr
                </a>,
                I&apos;ve had the privilege of serving{' '}
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text font-semibold text-transparent">
                  50+ clients
                </span>{' '}
                and delivering high-quality solutions that drive business growth.
              </p>

              <p className="text-lg leading-relaxed text-white/90">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to the
                tech community, and constantly learning to stay ahead of the curve. I&apos;m currently{' '}
                <span className="font-semibold text-emerald-400">seeking new opportunities</span> to
                apply my skills and drive impactful projects.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid with unique cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden"
              >
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl opacity-75 blur-sm transition-opacity group-hover:opacity-100`}></div>

                <div className="relative rounded-2xl border border-white/10 bg-slate-900/90 p-6 backdrop-blur-lg transition-all duration-300 hover:border-white/20 group-hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <div className={`size-14 bg-gradient-to-r ${item.gradient} flex items-center justify-center rounded-2xl shadow-lg transition-shadow group-hover:shadow-xl`}>
                        <item.icon className="size-7 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-cyan-300">{item.title}</h3>
                      <p className="leading-relaxed text-white/70">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Custom CSS for floating animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-15px) rotate(22deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-10px) rotate(55deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}