'use client';
import { motion } from 'framer-motion';
import React from 'react';
import BoldLink from './bold-link';

const AboutSection = () => {
  return (
    <section id="about">
      <div className="">
        <motion.h2 className="text-xl font-bold text-stone-900">About</motion.h2>
        <motion.p className="prose text-muted-foreground dark:prose-invert max-w-full text-pretty font-sans text-sm">
          I’m Shubham, a Software Engineer with over <BoldLink>3 years of experience</BoldLink>.
          Armed with a BTech in Computer Science, I specialize in ReactJs, NextJs, TypeScript, and
          Node.js, with a passion for building efficient web applications. I’m an active{' '}
          <BoldLink href="https://www.github.com/shubhamku044">open-source contributor</BoldLink>, a{' '}
          <BoldLink href="https://www.fiverr.com/s/0bQa65r"> Level 2 Seller on Fiverr</BoldLink>,
          and a freelancer on{' '}
          <BoldLink href="https://www.upwork.com/freelancers/~0195a5fef422fe3ce6?companyReference=1366542556944203777&mp_source=share">
            Upwork
          </BoldLink>
          , having served <BoldLink>50+ clients</BoldLink> on Fiverr alone. You’ll find me engaging
          with the tech community on <BoldLink href="https://x.com/shubhamku044">X</BoldLink>,
          always eager to learn and innovate. I thrives on solving complex problems and delivering
          high-quality code. When I’m not coding, I’m exploring new technologies to stay ahead of
          the curve. I’m currently <BoldLink>seeking opportunities</BoldLink> to apply my skills and
          drive impactful projects.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;