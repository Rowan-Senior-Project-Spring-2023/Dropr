import PropTypes from "prop-types";
import Heading from "Patterns/01_Atoms/Heading/Heading";
import styles from "./Header.module.scss";

const Header = ({ variant, heading, children }) => {
  return variant === "card" ? (
    <header className={styles.card}>
      <Heading variant={"card"} text={heading} />
    </header>
  ) : (
    <header>{children}</header>
  );
};

Header.propTypes = {
  variant: PropTypes.oneOf(["card"]),
  heading: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
};

export default Header;
