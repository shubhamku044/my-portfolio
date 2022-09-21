import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';
import styles from '../styles/pages/Home.module.scss';
import Projects from '../components/project/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Shubham Sharma | Full-Stack Developer</title>
        <meta
          name="description"
          content="Hello, I am Shubham Sharma, a full-stack developer with some knowledge of web3 also, a freelancer."
        />
        <meta
          property="og:title"
          content="Shubham Sharma | Full-Stack Developer"
        />
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
      </Head>

      <div
        style={{
          overflowY: 'hidden',
        }}
      >
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
