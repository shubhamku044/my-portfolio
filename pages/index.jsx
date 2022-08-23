import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';
import UnderDevelopment from '../components/UnderDevelopment';
import styles from '../styles/pages/Home.module.scss';

export default function Home() {
  return (
    <>
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

      <>
        <Hero />
        <About />
        <UnderDevelopment />
      </>
    </>
  );
}
