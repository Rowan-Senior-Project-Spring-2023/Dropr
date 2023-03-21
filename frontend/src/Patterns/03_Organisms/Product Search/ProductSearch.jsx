import Header from "Patterns/03_Organisms/Header/Header";
import Heading from "Patterns/01_Atoms/Heading/Heading";
import styles from "./ProductSearch.module.scss";
import Form from "../Form/Form";

const ProductSearch = () => {
  return (
    <div className={styles.header}>
      <Header>
        <Form variant="search" />
      </Header>
    </div>
  );
};

export default ProductSearch;
