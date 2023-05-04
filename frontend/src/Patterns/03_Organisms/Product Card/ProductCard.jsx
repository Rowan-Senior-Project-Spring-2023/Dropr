import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Image from "Patterns/01_Atoms/Image/Image";
import Header from "Patterns/03_Organisms/Header/Header";
import CardFooter from "Patterns/02_Molecules/Card Footer/CardFooter";
import styles from "./ProductCard.module.scss";
import defaultImage from "Assets/ezgif-1-af2e163fba.webp";

const ProductCard = ({ id, image, heading, price }) => {
  const [subscribed, setSubscribed] = useState(false);

  const handleClick = (event) => {
    setSubscribed(!subscribed);
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
      <CardFooter
        variant={"card"}
        price={price || 0}
        onClick={handleClick}
        buttonText={subscribed ? "Unsubscribe" : "Subscribe"}
      />
    </article>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string,
  heading: PropTypes.string,
  quantity: PropTypes.number,
};

export default ProductCard;
