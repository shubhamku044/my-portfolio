import styles from '../styles/components/hero.module.scss';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <div className={`${styles['hero__container-1']}`}>
          <p>Hi, my name is</p>
          <h1>Shubham Sharma</h1>
          <h2>I build things for the web.</h2>
        </div>
        <div className={`${styles['hero__container-2']}`}>
          <p>
            I&apos;m a software engineer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I&apos;m focused on building accessible, human-centered products at
            Upstatement.
          </p>
        </div>
        <div className={`${styles['hero__container-3']}`}>
          <Link href={'#'}>
            <a target={'_blank'}>Contact</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
