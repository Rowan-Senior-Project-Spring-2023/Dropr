import SectionText from "Patterns/02_Molecules/Section Text/SectionText";
import SectionImage from "Patterns/02_Molecules/Section Image/SectionImage";
import PropTypes from "prop-types";
import styles from "./Section.module.scss";

const Section = ({ variant, children }) => {
  if (variant === "landing") {
    return <section className={styles.sectionLanding}>{children}</section>;
  }

  return <section>{children}</section>;
};

Section.propTypes = {
  variant: PropTypes.oneOf(["generic", "landing"]),
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Section;
