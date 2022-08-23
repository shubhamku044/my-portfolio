import styles from '../../styles/layout/Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.container__footer}>
        <div className={styles['container__footer-divider']} />
        <div className={styles['container__footer-main']}>
          <p>&#169; 2022 Shubham Sharma</p>
          <p>
            Built with{' '}
            <Link href={'https://nextjs.org/'}>
              <a target={'_blank'}>NextJs</a>
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
