'use client';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about">
      <div className="">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-xl font-bold"
        >
          About
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose text-muted-foreground dark:prose-invert max-w-full text-pretty font-sans text-sm"
        >
          I dedicated myself to building and scaling SaaS products. With 7 years of experience in
          developing side hustles, I served as Interim CTO for a Pre-Seed AI startup and founded
          Contxt. My background includes a degree in computer science, and roles as an Software
          Engineer, ML Engineer, and Consultant across various companies in Germany. In February
          2024, I participated in the Systm Growth Hacking cohort. Passionate about tech and
          entrepreneurship, I am active in the community, always exploring new challenges.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;