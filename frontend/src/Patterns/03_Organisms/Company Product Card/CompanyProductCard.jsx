import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Image from "Patterns/01_Atoms/Image/Image";
import Header from "Patterns/03_Organisms/Header/Header";
import CardFooter from "Patterns/02_Molecules/Card Footer/CardFooter";
import styles from "./CompanyProductCard.module.scss";
import defaultImage from "Assets/ezgif-1-af2e163fba.webp";
import Cookies from "js-cookie";

/*
 * Pretty much exact same as ProductCard, but handleClick has different functionality
 */

const CompanyProductCard = ({ id, companyId, image, heading, price }) => {
  const [subscribed, setSubscribed] = useState(false);

  const handleClick = async (event) => {
    const user = await axios.get("http://localhost:8000/users/me/", {
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    });

    console.log(user);
    console.log(user.id);
    if (!subscribed) {
      axios.post(
        `http://localhost:8000/company/subscribe?=user_id=${"userId"}&company_id=${companyId}`
      );
    } else {
      axios.post(
        `http://localhost:8000/company/subscribe?=user_id=${"userId"}&company_id=${companyId}`
      );
    }

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

CompanyProductCard.propTypes = {
  id: PropTypes.number,
  companyId: PropTypes.number,
  image: PropTypes.string,
  heading: PropTypes.string,
  quantity: PropTypes.number,
};

export default CompanyProductCard;
