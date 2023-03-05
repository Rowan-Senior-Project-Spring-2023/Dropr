import Image from "Patterns/01_Atoms/Image/Image";
import styles from "./SectionImage.module.scss";

const SectionImage = (props) => {
  return (
    <div className={styles.container}>
      <Image src={props.src} alt={props.alt} className={styles.image} />
    </div>
  );
};

export default SectionImage;
