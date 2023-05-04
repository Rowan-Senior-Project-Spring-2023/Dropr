import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({ variant, text, onClick, type = "button" }) => {
  const [className, setClassName] = useState(styles.button);

  useEffect(() => {
    if (variant === "section" || variant === "banner") {
      setClassName(styles.section);
    }

    if (variant === "form") {
      setClassName(styles.form);
    }

    if (variant === "card") {
      setClassName(styles.card);
    }

    if (variant === "arrow") {
      setClassName(styles.card);
    }
  }, []);

  return (
    <button onClick={onClick} type={type} className={className}>
      {text}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["section", "form", "card", "arrow", "banner"]),
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
