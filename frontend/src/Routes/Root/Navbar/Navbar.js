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
            ? `${styles.mobileNavigationToggle} ${styles.mobileNavigationIconClose}`
            : `${styles.mobileNavigationToggle} ${styles.mobileNavigationIconOpen}`
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
              ? `${styles.list} ${styles.mobileNavigationOpen}`
              : `${styles.list} ${styles.mobileNavigationClose}`
          }
        >
          <li>For Companies</li>
          <li>Log in</li>
          <li className={styles.cta}>Sign up</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
