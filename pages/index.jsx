import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';
import UnderDevelopment from '../components/UnderDevelopment';
import styles from '../styles/Home.module.scss';
import Footer from '../components/layout/Footer';
import dynamic from 'next/dynamic';
import Social from '../components/layout/Social';
import Mail from '../components/layout/Mail';
import { navBarState } from '../atoms/navbarState';
import { useRecoilState } from 'recoil';
import SideNav from '../components/layout/SideNav';

const Header = dynamic(() => import('../components/layout/Header'), {
  ssr: false,
});

export default function Home() {
  const [openNav, setOpenNav] = useRecoilState(navBarState);

  return (
    <div
      className={styles.container}
      style={
        openNav
          ? {
              position: 'fixed',
              overflow: 'hidden',
            }
          : {}
      }
    >
      <Head>
        <title>Shubham Sharma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <SideNav />
      <main className={styles.container__main}>
        <Hero />
        <About />
        <UnderDevelopment />
      </main>
      <Footer />

      <Social />
      <Mail />
    </div>
  );
}