import Heading from "Patterns/01_Atoms/Heading/Heading";
import Paragraph from "Patterns/01_Atoms/Paragraph/Paragraph";
import Button from "Patterns/01_Atoms/Button/Button";
import styles from "./SectionText.module.scss";

const SectionText = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Heading level={1} text={"Go from zero to 1$"} size="large" />
        <Paragraph text={props.description} />
        <Button text={props.cta} size="large" />
      </div>
    </div>
  );
};

export default SectionText;
