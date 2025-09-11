import {
  Hero,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
  ExperienceSection,
  EducationSection,
} from '@/components';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* A4-style container */}
      <div className="mx-auto max-w-4xl bg-white dark:bg-gray-800 shadow-lg min-h-screen print:shadow-none print:max-w-none">
        <Hero />
        <div className="px-6 md:px-8">
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <EducationSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default Home;