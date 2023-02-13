import styles from "Styles/Components/HeroHeading.module.scss";

const HeroHeading = (props) => {
  return <p className={styles.text}>{props.text}</p>;
};

export default HeroHeading;
