import HeroTitle from "Patterns/01_Atoms/HeroTitle";
import HeroDescription from "Patterns/01_Atoms/HeroDescription";
import HeroButton from "Patterns/01_Atoms/HeroButton";
import styles from "Styles/Components/HeroText.module.scss";

const HeroText = (props) => {
  return (
    <div className={styles.container}>
      <HeroTitle />
      <HeroDescription />
      <HeroButton />
    </div>
  );
};

export default HeroText;
