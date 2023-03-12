import styles from "./Image.module.scss";

const Image = ({ variant, src, alt }) => {
  if (variant === "card") {
    return <img src={src} alt={alt} className={styles.card} />;
  }
  return <img src={src} alt={alt} />;
};

export default Image;
