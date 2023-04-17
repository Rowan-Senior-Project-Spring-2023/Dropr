import PropTypes from "prop-types";
import styles from "./CardQuantity.module.scss";

const CardQuantity = ({ quantity }) => {
  return <div className={styles.price}>{quantity}</div>;
};

CardQuantity.propTypes = {
  quantity: PropTypes.number,
};

export default CardQuantity;
