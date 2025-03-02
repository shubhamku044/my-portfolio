import React from 'react';
import {
  Hero,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
  Education,
  ExperienceSection,
} from '@/components';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <Education />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default Home;