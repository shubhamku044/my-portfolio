import styles from '../styles/components/about.module.scss';
import Image from 'next/image';
import type { NextPage } from 'next';
import Link from 'next/link';

const About: NextPage = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles['container__heading']}>About Me</h2>
      <div className={styles.container__box}>
        <div className={styles['container__box-left']}>
          <p>
            Hello! My name is Shubham Sharma, an open-source enthusiast. I am a
            freelance full-stack developer based in India. I enjoy creating
            things that live on the internet. My interest in web development
            started back in 2019 when I decided to build something which
            everyone can see and understand other than programmer because back
            then I want writing code in terminal — turns out hacking together a
            custom reblog button taught me a lot about HTML & CSS!
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
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>ReactJs</li>
              <li>NextJs</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Express</li>
              <li>Figma</li>
              <li>Redux</li>
              <li>Git & Github</li>
              <li>Python</li>
            </ul>
          </div>
        </div>
        <div className={styles['container__box-right']}>
          <div>
            <Image src="/my-photo.jpg" layout="fill" objectFit="cover" />
          </div>
          <ul className={styles['container__box-right-socials']}>
            <li>
              <Link href="https://github.com/shubhamku044">
                <a target={'_blank'}>
                  <Image
                    src="/icons/github.svg"
                    objectFit="contain"
                    width={24}
                    height={24}
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/shubhamku044/">
                <a target={'_blank'}>
                  <Image
                    src="/icons/linkedin.svg"
                    objectFit="contain"
                    width={24}
                    height={24}
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/shubhamku044">
                <a target={'_blank'}>
                  <Image
                    src="/icons/twitter.svg"
                    objectFit="contain"
                    width={24}
                    height={24}
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/thelegitprogrammer/">
                <a target={'_blank'}>
                  <Image
                    src="/icons/instagram.svg"
                    objectFit="contain"
                    width={24}
                    height={24}
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://wa.link/dopzjz">
                <a target={'_blank'}>
                  <Image
                    src="/icons/whatsapp.svg"
                    objectFit="contain"
                    width={24}
                    height={24}
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://shubhamku044.hashnode.dev/">
                <a target={'_blank'}>
                  <Image
                    src="/icons/hashnode.svg"
                    objectFit="contain"
                    width={20}
                    height={20}
                  />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
