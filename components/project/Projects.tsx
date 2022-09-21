import styles from '@styles/components/projects/project.module.scss';
import type { NextPage } from 'next';
import ProjectCard from './ProjectCard';

const Projects: NextPage = () => {
  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.container__heading}>Projects</h2>
      <div className={styles.container__box}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
