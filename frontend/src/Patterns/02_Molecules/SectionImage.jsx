import styles from "Styles/Components/SectionImage.module.scss";

const SectionImage = (props) => {
  return (
    <div className={styles.container}>
      <img src={props.src} alt={props.alt} className={styles.image} />
    </div>
  );
};

export default SectionImage;
