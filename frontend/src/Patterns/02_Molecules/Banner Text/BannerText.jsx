import Heading from "Patterns/01_Atoms/Heading/Heading";
import styles from "./BannerText.module.scss";

const BannerText = ({ level, text, size }) => {
  return <Heading level={level} text={text} size={size} />;
};

export default BannerText;
