import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "Styles/Components/Button.module.scss";

const Button = ({ text, size = "medium" }) => {
  let classNames = null;
  if (size === "small") classNames = styles.buttonSmall;
  if (size === "medium") classNames = styles.buttonMedium;
  if (size === "large") classNames = styles.buttonLarge;

  // Refactor to handle actions, not just links
  return (
    <Link to="#" className={classNames}>
      {text}
    </Link>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Button;
