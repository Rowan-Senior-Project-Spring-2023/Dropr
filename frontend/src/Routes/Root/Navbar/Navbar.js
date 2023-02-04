import { useState } from "react";
import styles from "./Navbar.module.scss";
import logo from "Assets/Logo.png";

const Navbar = (props) => {
  const [showNavigation, setShowNavigation] = useState(false);
  const [ariaExpanded, setAriaExpanded] = useState(false);

  const disableScroll = (showNavigation) => {
    showNavigation
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
  };

  const handleClick = (event) => {
    event.preventDefault();
    setAriaExpanded(!ariaExpanded);
    setShowNavigation(!showNavigation);
    disableScroll(!showNavigation); // what the heck
  };

  return (
    <header className={styles.header}>
      {/* <img className={styles.logo} src={logo} alt="Dropr logo" /> */}
      <button
        aria-controls="navigation"
        aria-expanded={ariaExpanded}
        className={
          showNavigation
            ? `${styles.navigationMenu} ${styles.navigationIconClose}`
            : `${styles.navigationMenu} ${styles.navigationIconOpen}`
        }
        onClick={handleClick}
      >
        <span className="sr-only">Menu</span>
      </button>
      <nav>
        <ul
          className={
            showNavigation
              ? `${styles.navigation} ${styles.navigationOpen}`
              : `${styles.navigation} ${styles.navigationClose}`
          }
        >
          <li>For Companies</li>
          <li>Log in</li>
          <li>
            <a href="#" className={styles.cta}>
              Sign up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
