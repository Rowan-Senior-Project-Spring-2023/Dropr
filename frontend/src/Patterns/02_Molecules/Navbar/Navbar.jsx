import PropTypes from "prop-types";
import Links from "../Links/Links";

const Navbar = ({ links }) => {};

Navbar.propTypes = {
  links: PropTypes.arrayOf(string).isRequired,
};

export default Navbar;
