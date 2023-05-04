import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./SiteLink.module.scss";

const SiteLink = ({ link }) => {
  return (
    <Link to={link.to} className={styles.button}>
      {link.name || "Link"}
    </Link>
  );
};

SiteLink.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default SiteLink;
