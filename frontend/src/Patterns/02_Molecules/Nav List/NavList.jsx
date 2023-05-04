import { PropTypes } from "prop-types";
import NavLink from "Patterns/01_Atoms/Nav Link/NavLink";
import styles from "./NavList.module.scss";

const NavList = ({ links }) => {
  return (
    <ul className={styles.list}>
      {links &&
        links.map((link, index) => (
          <li key={index}>
            <NavLink name={link.name} to={link.to} />
          </li>
        ))}
    </ul>
  );
};

NavList.propTypes = {
  links: PropTypes.array.isRequired,
};

export default NavList;
