import Header from "Patterns/03_Organisms/Header/Header";
import Form from "../Form/Form";
import CategoryList from "Patterns/02_Molecules/Category List/CategoryList";
import styles from "./ProductSearch.module.scss";

const ProductSearch = () => {
  return (
    <div className={styles.container}>
      <Header>
        <Form variant="search" />
        <CategoryList
          categories={["shoes", "shirts", "pants", "hats", "jackets"]}
        />
      </Header>
    </div>
  );
};

export default ProductSearch;
