import BannerText from "Patterns/02_Molecules/Banner Text/BannerText";
import styles from "./Banner.module.scss";

const Banner = ({ text }) => {
  return (
    <section className={styles.container}>
      <BannerText text={text} />
    </section>
  );
};

export default Banner;
