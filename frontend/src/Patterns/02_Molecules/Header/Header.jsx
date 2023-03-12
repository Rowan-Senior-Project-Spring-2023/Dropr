import PropTypes from "prop-types";
import Heading from "Patterns/01_Atoms/Heading/Heading";
import styles from "./Header.module.scss";

const Header = ({ variant, heading }) => {
  return variant === "card" ? (
    <header className={styles.card}>
      <Heading variant={"card"} text={heading} />
    </header>
  ) : (
    <header>
      <i>Future usecases here...</i>
    </header>
  );
};

Header.propTypes = {
  variant: PropTypes.oneOf(["card"]),
  heading: PropTypes.string,
};

export default Header;
