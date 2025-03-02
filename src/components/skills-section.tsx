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
    <section className="bg-background-light py-16 text-text-light dark:bg-background-dark dark:text-text-dark">
      <div className="mx-auto max-w-4xl px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl font-bold"
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
              className="rounded-full bg-accent-light px-4 py-2 text-white dark:bg-accent-dark"
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
