import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Heading from "Patterns/01_Atoms/Heading/Heading";
import Paragraph from "Patterns/01_Atoms/Paragraph/Paragraph";
import SiteLink from "Patterns/01_Atoms/Site Link/SiteLink";
import styles from "./BannerText.module.scss";

const BannerText = ({ variant, heading, description, link }) => {
  const [className, setClassName] = useState(styles.container);

  useEffect(() => {
    if (variant === "no-description") setClassName(styles.noDescription);
  }, []);

  return variant ? (
    <div className={className}>
      <Heading variant={"banner"} text={heading} />
      <SiteLink link={link} />
    </div>
  ) : (
    <div className={className}>
      <Heading variant={"banner"} text={heading} />
      <Paragraph text={description} />
      <SiteLink link={link} />
    </div>
  );
};

BannerText.propTypes = {
  variant: PropTypes.oneOf(["no-description"]),
  heading: PropTypes.string.isRequired,
  description: PropTypes.string,
  link: PropTypes.object.isRequired,
};

export default BannerText;
