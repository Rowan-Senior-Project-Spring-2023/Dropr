import { PropTypes } from "prop-types";
import Heading from "Patterns/01_Atoms/Heading/Heading";
import Paragraph from "Patterns/01_Atoms/Paragraph/Paragraph";
import SiteLink from "Patterns/01_Atoms/Site Link/SiteLink";
import styles from "./SectionText.module.scss";

const SectionText = ({ heading, description, link }) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Heading variant={"hero"} text={heading} />
        <Paragraph text={description} />
        <SiteLink link={link} />
      </div>
    </div>
  );
};

SectionText.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.object.isRequired,
};

export default SectionText;
