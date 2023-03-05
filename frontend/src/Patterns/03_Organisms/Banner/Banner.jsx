import BannerText from "Patterns/02_Molecules/Banner Text/BannerText";
import styles from "./Banner.module.scss";

const Banner = ({ level, text, size }) => {
  return (
    <section className={styles.container}>
      <BannerText level={level} text={text} size={size} />
    </section>
  );
};

export default Banner;
