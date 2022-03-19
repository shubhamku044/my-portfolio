import Link from 'next/link';
import styles from '../../styles/layout/Gmail.module.scss';
import { motion } from 'framer-motion';

const Mail = () => {
  return (
    <div className={styles.container}>
      <div>
        <Link href="mailto:shubhamku044@gmail.com">
          <a>
            <motion.p
              initial={{ translateY: 30, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 2.3 }}
            >
              shubhamku044@gmail.com
            </motion.p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Mail;
