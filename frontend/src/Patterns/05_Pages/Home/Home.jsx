import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ProductSearch from "Patterns/03_Organisms/Product Search/ProductSearch";
import CardContainer from "Patterns/03_Organisms/Card Container/CardContainer";
import ProductCard from "Patterns/03_Organisms/Product Card/ProductCard";
import styles from "./Home.module.scss";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [routeInfo, setRouteInfo] = useState(undefined);
  const location = useLocation();
  const category = location.state?.category;

  useEffect(() => {
    if (!category) {
      // get all products
      axios.get("http://localhost:8000/products/all").then((data) => {
        setProducts(data.data);
      });
    } else {
      // get products specified by category in route
      setRouteInfo(category);
      // axios.get(`http://localhost:8000/products/${category.name}`); Once Brian sets up categories route
    }
  }, [category]); // useLocation() is asynchronous, so we need to wait until category has something in it

  useEffect(() => {
    // Get product images here
  }, [products]);

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <>
      <ProductSearch />
      <main className={styles.main}>
        <CardContainer
          heading={
            category
              ? `Trending drops in ${capitalize(category.name)}`
              : "Trending drops"
          }
        >
          {products ? (
            products.map((product) => (
              <ProductCard
                key={product.id}
                image={null}
                heading={product.name}
                quantity={product.remaining_quantity}
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </CardContainer>
      </main>
    </>
  );
};

const readFileResponse = (fileResponse) => {
  return URL.createObjectURL(fileResponse);
};

export default Home;
