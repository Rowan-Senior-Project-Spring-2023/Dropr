import HeroHeading from "Patterns/01_Atoms/SectionHeading";
import HeroDescription from "Patterns/01_Atoms/Paragraph";
import Button from "Patterns/01_Atoms/Button";
import styles from "Styles/Components/SectionText.module.scss";

const SectionText = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <HeroHeading text={props.heading} />
        <HeroDescription text={props.description} />
        <Button label={props.cta} size="large" />
      </div>
    </div>
  );
};

export default SectionText;
