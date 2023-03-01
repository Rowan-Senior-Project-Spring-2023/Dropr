import { PropTypes } from "prop-types";
import styles from "./Heading.module.scss";

const Heading = ({ level, text, size = "medium" }) => {
  const HeadingTag = `h${level}`; // dynamically creates h1-6 based on level prop
  let classNames = "";
  if (size === "small") classNames = styles.headingSmall;
  if (size === "medium") classNames = styles.headingMedium;
  if (size === "large") classNames = styles.headingLarge;

  return <HeadingTag className={classNames}>{text}</HeadingTag>;
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Heading;
