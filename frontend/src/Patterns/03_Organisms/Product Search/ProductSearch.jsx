import Header from "Patterns/03_Organisms/Header/Header";
import styles from "./ProductSearch.module.scss";
import Form from "../Form/Form";

const ProductSearch = () => {
  return (
    <>
      <Header>
        <Form variant="search" />
      </Header>
    </>
  );
};

export default ProductSearch;
