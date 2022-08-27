import styles from '../../styles/components/blog/BlogCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const BlogCard = ({ title, brief, id, coverImage, slug }) => {
  const truncate = (para, limit) => `${para.substring(0, limit)}...`;

  return (
    <motion.div
      initial={{ translateY: 30, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 1.1 }}
      key={id}
      className={styles.container}
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
