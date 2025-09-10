'use client';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend",
    skills: ["TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS", "Framer Motion"],
    icon: "🎨",
    gradient: "from-pink-500 via-purple-500 to-indigo-500",
    borderGradient: "from-pink-400 to-purple-400"
  },
  {
    title: "Backend",
    skills: ["Node.js", "Go", "Python", "Express.js", "REST APIs", "GraphQL"],
    icon: "⚙️",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    borderGradient: "from-emerald-400 to-cyan-400"
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "MySQL", "Supabase"],
    icon: "🗃️",
    gradient: "from-orange-500 via-red-500 to-pink-500",
    borderGradient: "from-orange-400 to-pink-400"
  },
  {
    title: "Tools & Cloud",
    skills: ["Docker", "AWS", "GitHub Actions", "CI/CD", "Kubernetes", "Vercel"],
    icon: "☁️",
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    borderGradient: "from-blue-400 to-indigo-400"
  }
];

export default function SkillsSection() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Unique mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900"></div>

      {/* Animated mesh overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-cyan-400/10 via-transparent to-pink-400/10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400/5 to-transparent"></div>
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
              Skills & Technologies
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-white/70">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Animated border gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.borderGradient} rounded-3xl opacity-75 blur-sm transition-opacity duration-300 group-hover:opacity-100`}></div>

              <div className="relative h-full rounded-3xl border border-white/10 bg-slate-900/80 p-6 backdrop-blur-lg transition-all duration-300 hover:border-white/20 group-hover:scale-105">
                {/* Category header with icon */}
                <div className="mb-6 text-center">
                  <div className={`inline-flex size-16 items-center justify-center bg-gradient-to-r ${category.gradient} mb-4 rounded-2xl text-2xl shadow-lg transition-shadow group-hover:shadow-xl`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-cyan-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills grid */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05
                      }}
                      viewport={{ once: true }}
                      className="group/skill relative overflow-hidden"
                    >
                      {/* Skill tag with hover effect */}
                      <div className="relative rounded-xl border border-white/10 bg-white/5 px-4 py-2 transition-all duration-300 hover:border-white/20 hover:bg-white/10 group-hover/skill:scale-105">
                        <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-xl opacity-0 transition-opacity duration-300 group-hover/skill:opacity-20`}></div>
                        <span className="relative text-sm font-medium text-white/90 transition-colors group-hover/skill:text-white">
                          {skill}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating elements for additional uniqueness */}
        <div className="absolute left-20 top-20 size-4 animate-ping rounded-full bg-cyan-400 opacity-20"></div>
        <div className="absolute bottom-40 right-20 size-3 animate-ping rounded-full bg-pink-400 opacity-20" style={{animationDelay: '1s'}}></div>
        <div className="absolute right-40 top-60 size-2 animate-ping rounded-full bg-purple-400 opacity-20" style={{animationDelay: '2s'}}></div>

        {/* Additional info with glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block rounded-2xl border border-white/20 bg-white/10 px-8 py-4 backdrop-blur-lg">
            <p className="font-medium text-white/80">
              Always learning and adapting to new technologies and industry best practices
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}