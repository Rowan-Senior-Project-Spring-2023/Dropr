import { PropTypes } from "prop-types";
import styles from "./Paragraph.module.scss";

const Paragraph = ({ text, size = "medium" }) => {
  return <p className={styles.paragraph}>{text}</p>;
};

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Paragraph;
