import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./CategoryListItem.module.scss";

const CategoryListItem = ({ category }) => {
  return (
    <li className={styles.category}>
      <Link
        to={`/home/products/${category.name}`}
        state={{ category: category }}
      >
        {category.name}
      </Link>
    </li>
  );
};

CategoryListItem.propTypes = {
  category: PropTypes.object.isRequired,
};

export default CategoryListItem;
