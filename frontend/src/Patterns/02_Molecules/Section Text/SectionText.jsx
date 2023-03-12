import Heading from "Patterns/01_Atoms/Heading/Heading";
import Paragraph from "Patterns/01_Atoms/Paragraph/Paragraph";
import Button from "Patterns/01_Atoms/Button/Button";
import styles from "./SectionText.module.scss";

const SectionText = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Heading variant={"hero"} text={"Go from zero to 1$"} />
        <Paragraph text={props.description} />
        <Button variant={"section"} text={props.cta} />
      </div>
    </div>
  );
};

export default SectionText;
