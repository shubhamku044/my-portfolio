import styles from '../../styles/layout/Socials.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Social = () => {
  return (
    <div className={styles.container}>
      <div>
        <ul>
          <motion.li
            initial={{ translateY: 20, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.7 }}
          >
            <Link href="https://github.com/shubhamku044">
              <a
                target={'_blank'}
                initial={{ translateY: 20, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.3 }}
              >
                <Image
                  src="/icons/github.svg"
                  objectFit="contain"
                  width={24}
                  height={24}
                />
              </a>
            </Link>
          </motion.li>
          <motion.li
            initial={{ translateY: 20, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.8 }}
          >
            <Link href="https://www.linkedin.com/in/shubhamku044/">
              <a target={'_blank'}>
                <Image
                  src="/icons/linkedin.svg"
                  objectFit="contain"
                  width={24}
                  height={24}
                />
              </a>
            </Link>
          </motion.li>
          <motion.li
            initial={{ translateY: 20, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.9 }}
          >
            <Link href="https://twitter.com/shubhamku044">
              <a target={'_blank'}>
                <Image
                  src="/icons/twitter.svg"
                  objectFit="contain"
                  width={24}
                  height={24}
                />
              </a>
            </Link>
          </motion.li>
          <motion.li
            initial={{ translateY: 20, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 2 }}
          >
            <Link href="https://www.instagram.com/thelegitprogrammer/">
              <a target={'_blank'}>
                <Image
                  src="/icons/instagram.svg"
                  objectFit="contain"
                  width={24}
                  height={24}
                />
              </a>
            </Link>
          </motion.li>
          <motion.li
            initial={{ translateY: 20, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 2.1 }}
          >
            <Link href="https://wa.link/dopzjz">
              <a target={'_blank'}>
                <Image
                  src="/icons/whatsapp.svg"
                  objectFit="contain"
                  width={24}
                  height={24}
                />
              </a>
            </Link>
          </motion.li>
          <motion.li
            initial={{ translateY: 20, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.2 }}
          >
            <Link href="https://shubhamku044.hashnode.dev/">
              <a target={'_blank'}>
                <Image
                  src="/icons/hashnode.svg"
                  objectFit="contain"
                  width={20}
                  height={20}
                />
              </a>
            </Link>
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default Social;
