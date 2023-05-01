import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import styles from "./NavLink.module.scss";

const NavLink = ({ name, to }) => {
  return (
    <Link to={to} class={styles.link}>
      {name}
    </Link>
  );
};

NavLink.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavLink;
