import styles from "Styles/Components/HeroImage.module.scss";

const HeroImage = (props) => {
  return <img src={props.src} alt={props.alt} className={styles.image} />;
};

export default HeroImage;
