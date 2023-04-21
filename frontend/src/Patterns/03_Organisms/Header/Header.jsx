import PropTypes from "prop-types";
import Heading from "Patterns/01_Atoms/Heading/Heading";
import Paragraph from "Patterns/01_Atoms/Paragraph/Paragraph";
import Link from "Patterns/01_Atoms/Link/Link";
import styles from "./Header.module.scss";

const Header = ({ variant, heading, children }) => {
  if (variant === "card") {
    return (
      <header className={styles.card}>
        <Heading variant={"card"} text={heading} />
      </header>
    );
  }

  if (variant === "company") {
    return (
      <>
        <Heading variant={"company"} text={"Company name"} />
        <Paragraph text={"Company description"} />
        <Link
          href={
            "https://daveredfern.com/use-sass-placeholders-and-extend-wisely-a-cautionary-tale/"
          }
          description={"example link"}
        />
      </>
    );
  }

  return <header>{children}</header>;
};

Header.propTypes = {
  variant: PropTypes.oneOf(["card", "company-page"]),
  heading: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
};

export default Header;
