import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import BannerText from "Patterns/02_Molecules/Banner Text/BannerText";
import styles from "./Banner.module.scss";

const Banner = ({ text, color = "white" }) => {
  const [className, setClassName] = useState("");

  useEffect(() => {
    if (color === "white") setClassName(styles.white);
    if (color === "teal") setClassName(styles.teal);
  }, []);

  return (
    <section className={className}>
      <BannerText text={text} />
    </section>
  );
};

Banner.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Banner;
