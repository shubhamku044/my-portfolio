import styles from '@styles/components/projects/project.module.scss';
import type { NextPage } from 'next';
import ProjectCard from './ProjectCard';
import { ProjectDetails } from './ProjectDetail';

const Projects: NextPage = () => {
  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.container__heading}>Projects</h2>
      <div className={styles.container__box}>
        {ProjectDetails.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              id={project.id}
              name={project.name}
              description={project.description}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              imageUrl={project.imageUrl}
              technologies={project.technologies}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
