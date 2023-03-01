import SectionText from "Patterns/02_Molecules/SectionText";
import SectionImage from "Patterns/02_Molecules/SectionImage";
import styles from "Styles/Components/Section.module.scss";

const Section = ({ children }) => {
  let classNames = "";
  children.length > 1
    ? (classNames += styles.containerTwoChildren)
    : (classNames += styles.containerOneChild);

  return <section className={classNames}>{children}</section>;
};

export default Section;
