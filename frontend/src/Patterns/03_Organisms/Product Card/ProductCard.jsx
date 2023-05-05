import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Image from "Patterns/01_Atoms/Image/Image";
import Header from "Patterns/03_Organisms/Header/Header";
import CardFooter from "Patterns/02_Molecules/Card Footer/CardFooter";
import styles from "./ProductCard.module.scss";
import defaultImage from "Assets/ezgif-1-af2e163fba.webp";
import Cookies from "js-cookie";

const ProductCard = ({ id, image, heading, price }) => {
  const [bought, setBought] = useState(false);

  const handleClick = async (event) => {
    const userId = await axios
      .get("http://localhost:8000/users/me/", {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      })
      .then((response) => response.data.id);

    const data = {
      user_id: userId,
      product_id: id,
      quantity: 1,
    };

    axios.post("http://localhost:8000/products/buy", data).catch((error) => {
      alert(error);
    });

    setBought(!bought);
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
        buttonText={"Buy"}
      />
    </article>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  heading: PropTypes.string,
  quantity: PropTypes.number,
};

export default ProductCard;
