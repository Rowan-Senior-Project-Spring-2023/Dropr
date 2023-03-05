import styles from "./Image.module.scss";

const Image = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} />;
};

export default Image;
