import { navBarState } from '../../atoms/navbarState';
import { useRecoilState } from 'recoil';
import styles from '../../styles/layout/SideNav.module.scss';
import Link from 'next/link';

const SideNav = () => {
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
              <li>About</li>
              <li>Projects</li>
              <li>Work</li>
              <li onClick={() => setOpenNav(!openNav)}>
                <Link href={'https://shubhamku044.hashnode.dev/'}>
                  <a target={'_blank'}>Blogs</a>
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
