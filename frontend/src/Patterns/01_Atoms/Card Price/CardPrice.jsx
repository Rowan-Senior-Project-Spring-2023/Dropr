import PropTypes from "prop-types";
import styles from "./CardPrice.module.scss";

const CardQuantity = ({ price }) => {
  return <div className={styles.price}>{price}</div>;
};

CardQuantity.propTypes = {
  price: PropTypes.number,
};

export default CardQuantity;
