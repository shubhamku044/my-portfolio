import BlogCard from './BlogCard';
import styles from '../../styles/components/blog/BlogContainer.module.scss';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';

interface Props {
  posts: {
    title: string;
    brief: string;
    _id: number;
    coverImage: string;
    slug: string;
  }[];
}

const BlogContainer: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <motion.div layout className={styles.container}>
        {posts?.map(({ title, brief, _id, coverImage, slug }) => {
          return (
            <BlogCard
              key={_id}
              title={title}
              brief={brief}
              id={_id}
              coverImage={coverImage}
              slug={slug}
            />
          );
        })}
      </motion.div>
    </>
  );
};

export default BlogContainer;
