import styles from '../../styles/components/blog/BlogCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import type { NextPage } from 'next';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

interface Props {
  title: string;
  brief: string;
  id: number;
  coverImage: string;
  slug: string;
}

const BlogCard: NextPage<Props> = ({ title, brief, id, coverImage, slug }) => {
  const truncate = (para: string, limit: number) =>
    `${para.substring(0, limit)}...`;

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect((): void => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      initial={{ translateY: 30, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 1.1 }}
      key={id}
      className={styles.container}
      ref={ref}
    >
      <div className={styles.container__image}>
        <Image src={coverImage} layout="fill" />
      </div>
      <div className={styles.container__text}>
        <h2>{truncate(title, 48)}</h2>
        <p>{truncate(brief, 120)}</p>
        <Link href={`https://shubhamku044.hashnode.dev/${slug}`}>
          <a target={'_blank'}>Read Article &rarr;</a>
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;
