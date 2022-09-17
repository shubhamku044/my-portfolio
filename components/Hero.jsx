import styles from '../styles/components/hero.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <div className={`${styles['hero__container-1']}`}>
          <motion.p
            initial={{ translateY: 30, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.9 }}
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            initial={{ translateY: 30, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.1 }}
          >
            Shubham Sharma.
          </motion.h1>
          <motion.h2
            initial={{ translateY: 30, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.3 }}
          >
            I build things for the web.
          </motion.h2>
        </div>
        <div className={`${styles['hero__container-2']}`}>
          <motion.p
            initial={{ translateY: 30, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.5 }}
          >
            I am Shubham Sharma, a freelance full stack developer based in India
            with a passion of building amazing things. I have about 2+ years of
            experience in developing web applications using different
            technologies. I always keep updating myself with the latest and
            cutting edge technologies.
          </motion.p>
        </div>
        <motion.div
          initial={{ translateY: 30, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.7 }}
          className={`${styles['hero__container-3']}`}
        >
          <Link href={'#'}>
            <a target={'_blank'}>Contact</a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
