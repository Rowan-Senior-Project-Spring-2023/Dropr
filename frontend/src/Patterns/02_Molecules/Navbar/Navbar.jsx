import PropTypes from "prop-types";
import Links from "../Links/Links";

const Navbar = ({ links }) => {
  return (
    <ul>
      {links.map((link) => {
        <li key={link.key}>{link.name}</li>;
      })}
    </ul>
  );
};

Navbar.propTypes = {
  links: PropTypes.arrayOf(string).isRequired,
};

export default Navbar;
