import styles from '@styles/components/projects/projectCard.module.scss';
import type { NextPage } from 'next';
import Image from 'next/image';

const ProjectCard: NextPage = () => {
  return (
    <div className={styles.container}>
      <Image
        src={'/yaelabs.gif'}
        width={800}
        height={500}
        objectFit={'contain'}
      />
    </div>
  );
};

export default ProjectCard;
