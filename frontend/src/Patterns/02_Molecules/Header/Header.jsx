import PropTypes from "prop-types";
import Heading from "Patterns/01_Atoms/Heading/Heading";
import styles from "./Header.module.scss";

const Header = ({ type, children }) => {
  // for now, if Header isn't of type card, render children passed into it
  return type === "card" ? (
    <header>
      <Heading level={3} text={"Nike shoe"} />
    </header>
  ) : (
    <header>{children}</header>
  );
};

Header.propTypes = {
  type: PropTypes.oneOf(["card"]),
  children: PropTypes.object,
};

export default Header;
