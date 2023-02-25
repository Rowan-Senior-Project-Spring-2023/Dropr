import SectionText from "Patterns/02_Molecules/SectionText";
import SectionImage from "Patterns/02_Molecules/SectionImage";
import styles from "Styles/Components/Section.module.scss";

const Section = ({ children }) => {
  if (children.length === 2) console.log(2); // apply a style
  return <main className={styles.container}>{children}</main>;
};

export default Section;
