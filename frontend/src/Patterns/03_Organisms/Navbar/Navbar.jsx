import { PropTypes } from "prop-types";
import NavList from "Patterns/02_Molecules/Nav List/NavList";
import styles from "./Navbar.module.scss";

const Navbar = ({ links }) => {
  return (
    <nav class={styles.navigation}>
      <NavList links={links} />
    </nav>
  );
};

Navbar.propTypes = {
  links: PropTypes.array.isRequired,
};

export default Navbar;
