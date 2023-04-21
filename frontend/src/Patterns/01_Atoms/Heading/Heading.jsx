import { PropTypes } from "prop-types";
import styles from "./Heading.module.scss";

const Heading = ({ variant, text }) => {
  if (variant === "hero") {
    return <h1 className={styles.hero}>{text}</h1>;
  }

  if (variant === "section") {
    return <h2 className={styles.section}>{text}</h2>;
  }

  if (variant === "banner") {
    return <h2 className={styles.banner}>{text}</h2>;
  }

  if (variant === "company") {
    return <h1 className={styles.company}>{text}</h1>;
  }

  if (variant === "card") {
    return <h3 className={styles.card}>{text}</h3>;
  }

  if (variant === "card-container") {
    return <h2 className={styles.cardContainer}>{text}</h2>;
  }
};

Heading.propTypes = {
  variant: PropTypes.oneOf([
    "hero",
    "section",
    "banner",
    "company",
    "card",
    "card-container",
  ]),
  text: PropTypes.string.isRequired,
};

export default Heading;
