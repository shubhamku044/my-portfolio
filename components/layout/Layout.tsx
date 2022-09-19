import dynamic from 'next/dynamic';
import Footer from './Footer';
import styles from '../../styles/layout/Layout.module.scss';
import { useRecoilState } from 'recoil';
import { navBarState } from '../../atoms/navbarState';
import SideNav from './SideNav';
import Social from './Social';
import Mail from './Mail';
import type { NextPage } from 'next';

const Header = dynamic(() => import('./Header'), {
  ssr: false,
});

interface Props {
  children: React.ReactNode;
}

const Layout: NextPage<Props> = ({ children }) => {
  const [openNav, setOpenNav] = useRecoilState(navBarState);

  return (
    <>
      <SideNav />
      <Header />
      <div
        style={
          openNav
            ? {
                position: 'fixed',
                overflow: 'hidden',
              }
            : {}
        }
        className={styles.container}
      >
        <main className={styles.container__main}>{children}</main>
        <Social />
        <Mail />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
