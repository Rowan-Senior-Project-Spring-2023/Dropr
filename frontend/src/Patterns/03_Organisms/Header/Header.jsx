import PropTypes from "prop-types";
import Heading from "Patterns/01_Atoms/Heading/Heading";
import Paragraph from "Patterns/01_Atoms/Paragraph/Paragraph";
import Link from "Patterns/01_Atoms/Link/Link";
import styles from "./Header.module.scss";

const Header = ({ variant, heading, description, children }) => {
  if (variant === "card") {
    return (
      <header className={styles.card}>
        <Heading variant={"card"} text={heading} />
      </header>
    );
  }

  if (variant === "company") {
    return (
      <div className={styles.company}>
        <header className={styles}>
          <Heading variant={"company"} text={heading} />
          <Paragraph text={description} />
          <Link
            href={
              "https://daveredfern.com/use-sass-placeholders-and-extend-wisely-a-cautionary-tale/"
            }
            description={description}
          />
        </header>
      </div>
    );
  }

  return <header>{children}</header>;
};

Header.propTypes = {
  variant: PropTypes.oneOf(["card", "company"]),
  heading: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
};

export default Header;
