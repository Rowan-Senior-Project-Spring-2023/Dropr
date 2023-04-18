import PropTypes from "prop-types";
import Image from "Patterns/01_Atoms/Image/Image";
import Header from "Patterns/03_Organisms/Header/Header";
import Footer from "Patterns/02_Molecules/Footer/Footer";
import styles from "./ProductCard.module.scss";
import defaultImage from "Assets/ezgif-1-af2e163fba.webp";

const ProductCard = ({ id, image, heading, quantity }) => {
  const doSomething = () => {
    console.log(id);
  };

  return (
    <article className={styles.productCard}>
      <div className={styles.imageContainer}>
        <Image
          variant={"card"}
          src={image || defaultImage}
          alt={"Example product card image"}
        />
      </div>
      <Header variant={"card"} heading={heading || "Product"} />
      <Footer variant={"card"} quantity={quantity || 0} onClick={doSomething} />
    </article>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string,
  heading: PropTypes.string,
  quantity: PropTypes.number,
};

export default ProductCard;
