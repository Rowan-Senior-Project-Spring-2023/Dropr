import styles from "./ProductCard.module.scss";

const ProductCard = (props) => {
  return (
    <div className={styles.container}>
      <h3>
        {props.name}
        <p>{props.description}</p>
        {/* <button className={styles.cta}>Subscribe</button> */}
      </h3>
    </div>
  );
};

export default ProductCard;
