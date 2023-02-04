import ProductCard from "Components/ProductCard/ProductCard";
import styles from "./PartneredDrops.module.scss";

const PartneredDrops = (props) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>Partnered Drops</h2>
      <div className={styles.cards}>
        <ProductCard
          name={"Satan Shoes"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
        />
        <ProductCard
          name={"Satan Shoes"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
        />
        <ProductCard
          name={"Satan Shoes"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
        />
      </div>
    </section>
  );
};

export default PartneredDrops;
