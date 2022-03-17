import styles from '../../styles/layout/Header.module.scss';
import { useState, useEffect } from 'react';
import { navBarState } from '../../atoms/navbarState';
import { useRecoilState } from 'recoil';

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
          <h1 className={styles['container__main-left']}>SS</h1>
          <div className={styles['container__main-right']}>
            <ul>
              <li>About</li>
              <li>Projects</li>
              <li>Work</li>
              <li>Blogs</li>
            </ul>
            <div className={styles['container__main-button']}>Contact</div>
            <div
              className={`${styles['container__main-hamburger']} ${
                openNav ? styles['container__main-hamburger-active'] : ''
              }`}
              onClick={() => setOpenNav(!openNav)}
            >
              <span className={styles['container__main-hamburger-1']}></span>
              <span className={styles['container__main-hamburger-2']}></span>
              <span className={styles['container__main-hamburger-3']}></span>
            </div>
          </div>
        </nav>
      </div>
      <div className={styles.container__aside}>
        <aside
          className={`${styles['container__aside-main']} ${
            openNav ? styles['container__aside-main-active'] : ''
          }`}
        >
          <nav>
            <ol>
              <li>About</li>
              <li>Projects</li>
              <li>Work</li>
              <li>Blogs</li>
            </ol>
          </nav>
        </aside>
        <div
          className={`${styles['container__aside-overlay']} ${
            openNav ? styles['container__aside-overlay-active'] : ''
          }`}
          onClick={() => setOpenNav(!openNav)}
        />
      </div>
    </>
  );
};

export default Header;
