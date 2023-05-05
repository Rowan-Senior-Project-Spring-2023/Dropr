import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import BannerText from "Patterns/02_Molecules/Banner Text/BannerText";
import styles from "./Banner.module.scss";

const Banner = ({ variant, heading, description, link, color = "white" }) => {
  const [className, setClassName] = useState("");

  useEffect(() => {
    if (color === "white") setClassName(styles.white);
    if (color === "teal") setClassName(styles.teal);
  }, []);

  return (
    <section className={className}>
      <BannerText
        variant={variant}
        heading={heading}
        description={description}
        link={link}
      />
    </section>
  );
};

Banner.propTypes = {
  variant: PropTypes.string,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string,
  cta: PropTypes.object.isRequired,
  color: PropTypes.string,
};

export default Banner;
