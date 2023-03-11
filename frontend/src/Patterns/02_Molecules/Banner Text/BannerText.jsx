import Heading from "Patterns/01_Atoms/Heading/Heading";
import styles from "./BannerText.module.scss";

const BannerText = ({ text }) => {
  return <Heading variant={"banner"} text={text} />;
};

export default BannerText;
