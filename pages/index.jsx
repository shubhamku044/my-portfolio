import Head from 'next/head';
import Hero from '../components/Hero';
import UnderDevelopment from '../components/UnderDevelopment';
import styles from '../styles/Home.module.scss';
import Footer from '../components/layout/Footer';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../components/layout/Header'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shubham Sharma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.container__main}>
        <Hero />
        <UnderDevelopment />
      </main>
      <Footer />
    </div>
  );
}
