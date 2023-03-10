import PropTypes from "prop-types";
import Button from "Patterns/01_Atoms/Button/Button";
import styles from "./Footer.module.scss";

const Footer = ({ type, children }) => {
  // Same as Header; if type isn't card, render children for now until more use cases
  return type === "card" ? (
    <footer>
      <Button />
    </footer>
  ) : (
    <footer>{children}</footer>
  );
};

Footer.propTypes = {
  type: PropTypes.oneOf(["card"]),
  children: PropTypes.object,
};

export default Footer;
