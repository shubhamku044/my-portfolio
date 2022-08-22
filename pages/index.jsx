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
        <meta
          name="description"
          content="Hello, I am Shubham Sharma, a full-stack developer with some knowledge of web3 also, a freelancer."
        />
        <meta property="og:title" content="Shubham Sharma" />
        <meta
          property="og:description"
          content="Hello, I am Shubham Sharma, a full-stack developer with some knowledge of web3 also, a freelancer."
        />
        <meta property="og:url" content="https://www.shubhams.dev/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@shubhamku044" />
        <meta
          name="twitter:description"
          content="Hello, I am Shubham Sharma, a full-stack developer with some knowledge of web3 also, a freelancer."
        />
        <meta
          name="keywords"
          content="shubhamku044, shubham sharma, shubham kumar, shubham dev, shubhams, shubhams.dev"
        />
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
