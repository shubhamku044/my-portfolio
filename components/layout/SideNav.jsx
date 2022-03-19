import { navBarState } from '../../atoms/navbarState';
import { useRecoilState } from 'recoil';
import styles from '../../styles/layout/SideNav.module.scss';

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
              <li>Blogs</li>
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
