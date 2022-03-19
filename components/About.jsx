import styles from '../styles/components/about.module.scss';

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles['container__heading']}>About Me</h2>
      <div className={styles.container__box}>
        <div className={styles['container__box-left']}></div>
        <div className={styles['container__box-right']}></div>
      </div>
    </section>
  );
};

export default About;
