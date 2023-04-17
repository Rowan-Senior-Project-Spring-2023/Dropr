import PropTypes from "prop-types";
import Button from "Patterns/01_Atoms/Button/Button";
import CardPrice from "Patterns/01_Atoms/Card Price/CardPrice";
import styles from "./Footer.module.scss";

const Footer = ({ variant, quantity }) => {
  return variant === "card" ? (
    <footer className={styles.card}>
      <Button variant={"card"} text={"Subscribe"} />
      <CardPrice quantity={quantity} />
    </footer>
  ) : (
    <footer>
      <i>Placeholder for future usecases...</i>
    </footer>
  );
};

Footer.propTypes = {
  variant: PropTypes.oneOf(["card"]),
};

export default Footer;
