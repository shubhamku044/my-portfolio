'use client';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend",
    skills: ["TypeScript", "React", "Next.js", "Vue.js","Nuxt.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Go", "Python", "Express.js", "REST APIs", "GraphQL"]
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "MySQL", "Supabase", "GORM", "NeonDB"]
  },
  {
    title: "Tools & Cloud",
    skills: ["Docker", "AWS", "GitHub Actions", "CI/CD", "Vercel", "Vim", "Linux"]
  }
];

export default function SkillsSection() {
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
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-sm uppercase tracking-wide">
                {category.title}
              </h3>
              <div className="space-y-1">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="text-gray-700 dark:text-gray-300 text-sm flex items-center gap-2"
                  >
                    <div className="size-1 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}