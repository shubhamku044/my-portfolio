import styles from '../styles/components/underDevelopment.module.scss';
import type { NextPage } from 'next';

const UnderDevelopment: NextPage = () => {
  return (
    <div className={styles.underdevelopment}>
      <h2 className={styles.underdevelopment__heading}>
        This site is currently under maintenance. Thanks for checking it out!
      </h2>
    </div>
  );
};

export default UnderDevelopment;
