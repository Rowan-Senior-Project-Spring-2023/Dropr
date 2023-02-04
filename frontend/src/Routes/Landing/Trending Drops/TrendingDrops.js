import styles from "./TrendingDrops.module.scss";
import ProductCard from "Components/ProductCard/ProductCard";

const TrendingDrops = (props) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>Trending Drops</h2>
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

export default TrendingDrops;
