import HeroHeading from "Patterns/01_Atoms/SectionHeading";
import HeroDescription from "Patterns/01_Atoms/SectionDescription";
import HeroButton from "Patterns/01_Atoms/SectionButton";
import styles from "Styles/Components/SectionText.module.scss";

const SectionText = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <HeroHeading text={props.heading} />
        <HeroDescription text={props.description} />
        <HeroButton text={props.cta} />
      </div>
    </div>
  );
};

export default SectionText;
