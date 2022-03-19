import styles from '../../styles/layout/Header.module.scss';
import { useState, useEffect } from 'react';
import { navBarState } from '../../atoms/navbarState';
import { useRecoilState } from 'recoil';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
  const [openNav, setOpenNav] = useRecoilState(navBarState);
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <>
      <div
        className={`${styles.container} ${
          visible ? styles['container-visible'] : styles['container-hidden']
        }`}
        style={
          window.pageYOffset > 50 && !openNav
            ? {
                boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
                backgroundColor: 'rgba(7, 34, 39, .7)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                transition: 'all .3s ease-out',
              }
            : {}
        }
      >
        <nav className={styles.container__main}>
          <motion.h1
            initial={{ translateY: -30, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={styles['container__main-left']}
          >
            <Link href={'/'}>
              <a>SS</a>
            </Link>
          </motion.h1>
          <div className={styles['container__main-right']}>
            <ol>
              <motion.li
                initial={{ translateY: -30, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <a href="#about">About</a>
              </motion.li>
              <motion.li
                initial={{ translateY: -30, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                Projects
              </motion.li>
              <motion.li
                initial={{ translateY: -30, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                Work
              </motion.li>
              <motion.li
                initial={{ translateY: -30, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                Blogs
              </motion.li>
            </ol>
            <motion.div
              initial={{ translateY: -30, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className={styles['container__main-button']}
            >
              Contact
            </motion.div>
            <motion.div
              initial={{ translateY: -30, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className={`${styles['container__main-hamburger']} ${
                openNav ? styles['container__main-hamburger-active'] : ''
              }`}
              onClick={() => setOpenNav(!openNav)}
            >
              <span className={styles['container__main-hamburger-1']}></span>
              <span className={styles['container__main-hamburger-2']}></span>
              <span className={styles['container__main-hamburger-3']}></span>
            </motion.div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
