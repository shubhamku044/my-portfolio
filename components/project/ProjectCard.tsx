import styles from '@styles/components/projects/projectCard.module.scss';
import type { NextPage } from 'next';
import Image from 'next/image';

const ProjectCard: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__img}>
        <Image
          src={'/yaelabs.gif'}
          layout={'fill'}
          loading={'lazy'}
          alt={'Yaelabs'}
          objectFit={'contain'}
        />
      </div>
      <div className={styles.container__desc}></div>
    </div>
  );
};

export default ProjectCard;
