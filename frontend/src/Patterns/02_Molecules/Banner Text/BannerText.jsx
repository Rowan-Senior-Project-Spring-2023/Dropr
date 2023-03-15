import PropTypes from "prop-types";
import Heading from "Patterns/01_Atoms/Heading/Heading";
import Paragraph from "Patterns/01_Atoms/Paragraph/Paragraph";
import Button from "Patterns/01_Atoms/Button/Button";
import styles from "./BannerText.module.scss";

const BannerText = ({ variant, heading, description, cta }) => {
  if (variant === "no-description") {
    return (
      <div className={styles.container}>
        <Heading variant={"banner"} text={heading} />
        <Button variant={variant} cta={cta} />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Heading variant={"banner"} text={heading} />
      <Paragraph text={description} />
      <Button variant={"section"} text={cta} />
    </div>
  );
};

BannerText.propTypes = {
  variant: PropTypes.oneOf(["no-description"]),
  heading: PropTypes.string.isRequired,
  description: PropTypes.string,
  cta: PropTypes.string.isRequired,
};

export default BannerText;
