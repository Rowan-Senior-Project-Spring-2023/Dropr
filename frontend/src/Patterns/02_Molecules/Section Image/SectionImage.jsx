import Image from "Patterns/01_Atoms/Image/Image";
import styles from "./SectionImage.module.scss";

const SectionImage = ({ src, alt }) => {
  return (
    <div className={styles.container}>
      <Image src={src} alt={alt} className={styles.image} />
    </div>
  );
};

export default SectionImage;
