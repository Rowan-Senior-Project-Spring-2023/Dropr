import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({ variant, text, onClick, type = "button" }) => {
  const [classNames, setClassNames] = useState(styles.button);

  useEffect(() => {
    if (variant === "section") {
      setClassNames(styles.section);
    }

    if (variant === "form") {
      setClassNames(styles.form);
    }

    if (variant === "card") {
      setClassNames(styles.card);
    }
  }, []);

  return (
    <button onClick={onClick} type={type} className={classNames}>
      {text}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["section", "form", "card"]),
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
