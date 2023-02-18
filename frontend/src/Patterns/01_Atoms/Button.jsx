import PropTypes from "prop-types";
import styles from "Styles/Components/Button.module.scss";

const Button = ({ text, size = "medium", onClick }) => {
  let classNames = null;
  if (size === "small") classNames = styles.buttonSmall;
  if (size === "medium") classNames = styles.buttonMedium;
  if (size === "large") classNames = styles.buttonLarge;

  return (
    <button onClick={onClick} className={classNames}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func,
};

export default Button;
