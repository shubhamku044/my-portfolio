import {
  Hero,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
  ExperienceSection,
  InteractiveTerminal,
  GitHubStats,
} from '@/components';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <InteractiveTerminal />
      <GitHubStats />
      <ContactSection />
    </>
  );
};

export default Home;