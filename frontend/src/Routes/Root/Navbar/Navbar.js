import { useState } from "react";
import styles from "./Navbar.module.scss";

const Navbar = (props) => {
  const [showNavigation, setShowNavigation] = useState(false);
  const [ariaExpanded, setAriaExpanded] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setAriaExpanded(!ariaExpanded);
    setShowNavigation(!showNavigation);
  };

  return (
    <header>
      <button
        aria-controls="primary-navigation"
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
          id="primary-navigation"
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
