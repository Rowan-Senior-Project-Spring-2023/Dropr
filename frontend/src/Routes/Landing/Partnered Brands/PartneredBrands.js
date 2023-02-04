import styles from "./PartneredBrands.module.scss";
import Nike from "Assets/1.jpg";

const PartneredBrands = (props) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>Partnered Brands</h2>
      <div className={styles.cards}>
        <img src={Nike} />
      </div>
    </section>
  );
};

export default PartneredBrands;
