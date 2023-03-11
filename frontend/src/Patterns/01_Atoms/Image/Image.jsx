import styles from "./Image.module.scss";

const Image = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

export default Image;
