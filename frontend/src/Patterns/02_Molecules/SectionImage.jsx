import styles from "Styles/Components/SectionImage.module.scss";

const SectionImage = (props) => {
  return <img src={props.src} alt={props.alt} className={styles.image} />;
};

export default SectionImage;
