import styles from '../../styles/layout/Socials.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Social = () => {
  return (
    <div className={styles.container}>
      <div>
        <ul>
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
        </ul>
      </div>
    </div>
  );
};

export default Social;
