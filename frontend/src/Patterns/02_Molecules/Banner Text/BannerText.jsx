import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Heading from "Patterns/01_Atoms/Heading/Heading";
import Paragraph from "Patterns/01_Atoms/Paragraph/Paragraph";
import Button from "Patterns/01_Atoms/Button/Button";
import styles from "./BannerText.module.scss";

const BannerText = ({ variant, heading, description, cta }) => {
  const [className, setClassName] = useState(styles.container);

  useEffect(() => {
    if (variant === "no-description") setClassName(styles.noDescription);
  }, []);

  return variant ? (
    <div className={className}>
      <Heading variant={"banner"} text={heading} />
      <Button variant={"section"} text={cta} />
    </div>
  ) : (
    <div className={className}>
      <Heading variant={"banner"} text={heading} />
      <Paragraph text={description} />
      <Button variant={"banner"} text={cta} />
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
