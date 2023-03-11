import { PropTypes } from "prop-types";
import styles from "./Heading.module.scss";

const Heading = ({ type, text }) => {
  if (type === "hero") {
    return <h1 className={styles.hero}>{text}</h1>;
  }

  if (type === "section") {
    return <h2 className={styles.section}>{text}</h2>;
  }

  if (type === "banner") {
    return <h2 className={styles.banner}>{text}</h2>;
  }

  if (type === "card") {
    return <h3 className={styles.card}>{text}</h3>;
  }
};

Heading.propTypes = {
  type: PropTypes.oneOf(["hero", "section", "banner", "card"]).isRequired,
  text: PropTypes.string.isRequired,
};

export default Heading;
