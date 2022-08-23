import BlogCard from './BlogCard';
import styles from '../../styles/components/blog/BlogContainer.module.scss';
import { AnimatePresence, motion } from 'framer-motion';

const BlogContainer = ({ posts }) => {
  return (
    <>
      <motion.div layout className={styles.container}>
        <AnimatePresence>
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
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default BlogContainer;
