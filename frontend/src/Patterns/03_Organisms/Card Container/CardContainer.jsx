import PropTypes from "prop-types";
import Heading from "Patterns/01_Atoms/Heading/Heading";
import styles from "./CardContainer.module.scss";

const CardContainer = ({ heading = "Drops", children }) => {
  console.log(children);
  return (
    <section className={styles.container}>
      <Heading variant={"card-container"} text={heading} />
      <div className={styles.cardContainer}>
        {children.length > 0 ? children : <p>No products in this category</p>}
      </div>
    </section>
  );
};

CardContainer.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.array.isRequired,
};

export default CardContainer;
