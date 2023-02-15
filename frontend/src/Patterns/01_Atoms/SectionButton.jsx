import { Link } from "react-router-dom";
import styles from "Styles/Components/SectionButton.module.scss";

const SectionButton = (props) => {
  return (
    <Link to="#" className={styles.button}>
      {props.text}
    </Link>
  );
};

export default SectionButton;
