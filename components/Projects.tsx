import styles from '../styles/components/projects/project.module.scss';
import type { NextPage } from 'next';

const Projects: NextPage = () => {
  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.container__heading}>Projects</h2>
      <div className={styles.container__box}>content</div>
    </section>
  );
};

export default Projects;
