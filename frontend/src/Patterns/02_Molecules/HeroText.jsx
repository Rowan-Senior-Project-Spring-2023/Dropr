import HeroHeading from "Patterns/01_Atoms/HeroHeading";
import HeroDescription from "Patterns/01_Atoms/HeroDescription";
import HeroButton from "Patterns/01_Atoms/HeroButton";
import styles from "Styles/Components/HeroText.module.scss";

const HeroText = (props) => {
  return (
    <div className={styles.container}>
      <div>
        <HeroHeading text={props.heading} />
        <HeroDescription text={props.description} />
        <HeroButton text={props.cta} />
      </div>
    </div>
  );
};

export default HeroText;
