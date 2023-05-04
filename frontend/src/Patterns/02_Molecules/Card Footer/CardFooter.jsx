import PropTypes from "prop-types";
import Button from "Patterns/01_Atoms/Button/Button";
import CardPrice from "Patterns/01_Atoms/Card Price/CardPrice";
import styles from "./CardFooter.module.scss";

const Footer = ({ buttonText, price, onClick }) => {
  return (
    <footer className={styles.card}>
      <Button variant={"card"} text={buttonText} onClick={onClick} />
      <CardPrice price={price} />
    </footer>
  );
};

export default Footer;
