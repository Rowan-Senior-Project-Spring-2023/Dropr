import SectionText from "Patterns/02_Molecules/Section Text/SectionText";
import SectionImage from "Patterns/02_Molecules/Section Image/SectionImage";
import PropTypes from "prop-types";
import styles from "./Section.module.scss";

const Section = ({ children }) => {
  return <section className={styles.section}>{children}</section>;
};

Section.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Section;
