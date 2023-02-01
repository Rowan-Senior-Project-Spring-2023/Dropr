import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>
        Dropr.
        <p className={styles.subtitle}>
          Never miss another drop, no matter where you are in the world.
        </p>
      </h1>
      <a className={styles.cta} href="#">
        Get started
      </a>
    </main>
  );
};

export default Hero;
