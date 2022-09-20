import styles from '@styles/components/projects/projectCard.module.scss';
import type { NextPage } from 'next';
import Image from 'next/future/image';

const ProjectCard: NextPage = () => {
  return (
    <div className={styles.container}>
      <Image
        src={'/yaelabs.gif'}
        width={800}
        height={500}
        // objectFit={'contain'}
        loading={'lazy'}
        alt={'Yaelabs'}
      />
    </div>
  );
};

export default ProjectCard;
