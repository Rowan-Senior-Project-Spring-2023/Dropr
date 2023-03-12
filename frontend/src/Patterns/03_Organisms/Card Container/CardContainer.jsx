import PropTypes from "prop-types";
import Heading from "Patterns/01_Atoms/Heading/Heading";
import styles from "./CardContainer.module.scss";

const CardContainer = ({ children }) => {
  return (
    <section className={styles.container}>
      <Heading variant={"card"} text={"card container"} />
      <div className={styles.cardContainer}>{children}</div>
    </section>
  );
};

CardContainer.propTypes = {
  children: PropTypes.object.isRequired,
};

export default CardContainer;
