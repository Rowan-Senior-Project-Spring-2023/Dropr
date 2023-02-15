import styles from "Styles/Components/SectionHeading.module.scss";

const SectionHeading = (props) => {
  return <p className={styles.heading}>{props.text}</p>;
};

export default SectionHeading;
