import PropTypes from "prop-types";
import Button from "Patterns/01_Atoms/Button/Button";
import CardQuantity from "Patterns/01_Atoms/Card Price/CardQuantity";
import styles from "./Footer.module.scss";

const Footer = ({ variant, quantity, onClick }) => {
  return variant === "card" ? (
    <footer className={styles.card}>
      <Button variant={"card"} text={"Subscribe"} onClick={onClick} />
      <CardQuantity quantity={quantity} />
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
