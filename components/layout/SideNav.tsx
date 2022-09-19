import { navBarState } from '../../atoms/navbarState';
import { useRecoilState } from 'recoil';
import styles from '../../styles/layout/SideNav.module.scss';
import Link from 'next/link';
import type { NextPage } from 'next';

const SideNav: NextPage = () => {
  const [openNav, setOpenNav] = useRecoilState(navBarState);

  return (
    <>
      <div className={styles.container}>
        <aside
          className={`${styles['container-main']} ${
            openNav ? styles['container-main-active'] : ''
          }`}
        >
          <nav>
            <ol>
              <li onClick={() => setOpenNav(!openNav)}>
                <Link href={'/#about'}>
                  <a>About</a>
                </Link>
              </li>
              <li onClick={() => setOpenNav(!openNav)}>
                <Link href={'/#projects'}>
                  <a>Projects</a>
                </Link>
              </li>
              <li onClick={() => setOpenNav(!openNav)}>
                <Link href={'/blogs'}>
                  <a>Blogs</a>
                </Link>
              </li>
              <li onClick={() => setOpenNav(!openNav)}>
                <Link href={'/#contact'}>
                  <a>Contact</a>
                </Link>
              </li>
              <li onClick={() => setOpenNav(!openNav)}>
                <Link
                  href={
                    'https://drive.google.com/file/d/1NVOeSB7wSZCwt1ONXeiCE8jHg2C3R8Rg/view?usp=sharing'
                  }
                >
                  <a target={'_blank'}>Resume</a>
                </Link>
              </li>
            </ol>
          </nav>
        </aside>
        <div
          className={`${styles['container-overlay']} ${
            openNav ? styles['container-overlay-active'] : ''
          }`}
          onClick={() => setOpenNav(!openNav)}
        />
      </div>
    </>
  );
};

export default SideNav;
