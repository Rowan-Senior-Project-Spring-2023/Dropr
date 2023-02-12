import { Link } from "react-router-dom";
import styles from "Styles/Components/HeroButton.module.scss";

const HeroButton = (props) => {
  return (
    <Link to="#" className={styles.button}>
      {props.text}
    </Link>
  );
};

export default HeroButton;
