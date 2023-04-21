import { useState, useEffect } from "react";
import Header from "Patterns/03_Organisms/Header/Header";
import Form from "../Form/Form";
import CategoryList from "Patterns/02_Molecules/Category List/CategoryList";
import styles from "./ProductSearch.module.scss";

const ProductSearch = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories([
      { id: "1", name: "footwear" },
      { id: "2", name: "shirts" },
      { id: "3", name: "pants" },
      { id: "4", name: "hats" },
      { id: "5", name: "jackets" },
    ]);
  }, []);

  return (
    <div className={styles.header}>
      <Header>
        <Form type="search" />
        <CategoryList categories={categories} />
      </Header>
    </div>
  );
};

export default ProductSearch;
