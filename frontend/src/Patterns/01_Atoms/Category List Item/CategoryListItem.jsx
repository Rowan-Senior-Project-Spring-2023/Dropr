import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./CategoryListItem.module.scss";

const CategoryListItem = ({ category }) => {
  return (
    <li className={styles.category}>
      <Link to={`/home/products/${category}`}>{category}</Link>
    </li>
  );
};

CategoryListItem.propTypes = {
  category: PropTypes.string.isRequired,
};

export default CategoryListItem;
