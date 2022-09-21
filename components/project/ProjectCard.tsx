import styles from '@styles/components/projects/projectCard.module.scss';
import type { NextPage } from 'next';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import Link from 'next/link';
import type { ProjectDetailProps } from './ProjectDetail';

const ProjectCard: NextPage<ProjectDetailProps> = ({
  id,
  name,
  description,
  liveUrl,
  githubUrl,
  imageUrl,
  technologies,
}) => {
  const colors: string[] = [
    '#FA8072',
    '#7895B2',
    '#6F38C5',
    '#25316D',
    '#483838',
    '#319DA0',
  ];

  return (
    <div className={styles.container}>
      <div className={styles.container__img}>
        <Image
          src={imageUrl}
          layout={'fill'}
          loading={'lazy'}
          alt={'Yaelabs'}
          objectFit={'contain'}
        />
      </div>
      <div className={styles.container__desc}>
        <div>
          <div className={styles['container__desc-header']}>
            <h2 className={styles['container__desc-header-title']}>{name}</h2>
            <div className={styles['container__desc-header-links']}>
              <Link href={githubUrl}>
                <a target={'_blank'}>
                  <AiFillGithub />
                </a>
              </Link>
              <Link href={liveUrl}>
                <a target={'_blank'}>
                  <FiExternalLink />
                </a>
              </Link>
            </div>
          </div>
          <p className={styles['container__desc-content']}>{description}</p>
          <ul className={styles['container__desc-tools']}>
            {technologies.map((technology, _index) => {
              return (
                <li
                  style={{
                    backgroundColor:
                      colors[Math.floor(Math.random() * colors.length)],
                  }}
                  key={_index}
                >
                  {technology}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
