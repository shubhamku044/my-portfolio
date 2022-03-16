import Link from 'next/link';
import styles from '../../styles/layout/Gmail.module.scss';

const Mail = () => {
  return (
    <div className={styles.container}>
      <div>
        <Link href="mailto:shubhamku044@gmail.com">
          <a>shubhamku044@gmail.com</a>
        </Link>
      </div>
    </div>
  );
};

export default Mail;
