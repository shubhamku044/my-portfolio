import styles from '../styles/components/about.module.scss';
import Image from 'next/image';
import type { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles['container__heading']}>About Me</h2>
      <div className={styles.container__box}>
        <div className={styles['container__box-left']}>
          <p>
            Hello! My name is Shubham and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>
          <p>
            Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </p>
          <div className={styles['container__box-left-technologies']}>
            <p>Here are a few technologies I’ve been working with recently:</p>
            <ul>
              <li>NextJs</li>
              <li>Express</li>
              <li>NodeJs</li>
              <li>NextJs</li>
              <li>Express</li>
              <li>NodeJs</li>
              <li>Express</li>
              <li>NodeJs</li>
            </ul>
          </div>
        </div>
        <div className={styles['container__box-right']}>
          <div>
            <Image src="/my-photo.jpg" layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
