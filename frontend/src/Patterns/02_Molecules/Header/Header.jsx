import styles from "./Header.module.scss";

const Header = ({ children }) => {
  return <header>{children}</header>;
};

Header.propTypes = {
  children: PropTypes.object,
};

export default Header;
