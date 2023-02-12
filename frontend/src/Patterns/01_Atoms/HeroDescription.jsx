import styles from "Styles/Components/HeroDescription.module.scss";

const HeroDescription = (props) => {
  return <p className={styles.text}>{props.text}</p>;
};

export default HeroDescription;
