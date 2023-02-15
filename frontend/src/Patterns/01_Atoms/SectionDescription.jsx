import styles from "Styles/Components/SectionDescription.module.scss";

const SectionDescription = (props) => {
  return <p className={styles.description}>{props.text}</p>;
};

export default SectionDescription;
