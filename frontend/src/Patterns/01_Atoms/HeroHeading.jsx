import styles from "Styles/Components/HeroHeading.module.scss";

const HeroHeading = (props) => {
  return <p className={styles.heading}>{props.text}</p>;
};

export default HeroHeading;
