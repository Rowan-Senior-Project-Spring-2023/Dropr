import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "Styles/Components/Button.module.scss";

const Button = ({ text, size = "medium", onClick }) => {
  const [classNames, setClassNames] = useState("");

  useEffect(() => {
    if (size === "small") {
      setClassNames(styles.buttonSmall);
    }

    if (size === "medium") {
      setClassNames(styles.buttonMedium);
    }

    if (size === "large") {
      setClassNames(styles.buttonLarge);
    }
  }, []);

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
