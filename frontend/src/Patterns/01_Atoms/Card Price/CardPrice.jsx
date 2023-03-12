import PropTypes from "prop-types";
import styles from "./CardPrice.module.scss";

const CardPrice = ({ price }) => {
  return <div className={styles.price}>{`$${price}`}</div>;
};

CardPrice.propTypes = {
  price: PropTypes.number,
};

export default CardPrice;
