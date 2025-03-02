"use client"
import { motion } from "framer-motion";

const skills = [
  "Java",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Docker",
  "AWS",
  "Kubernetes",
  "Python",
  "Spring Boot",
];

const SkillsSection = () => {
  return (
    <section className="py-16 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center"
        >
          Skills
        </motion.h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="px-4 py-2 bg-accent-light dark:bg-accent-dark text-white rounded-full"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
