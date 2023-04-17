import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ProductSearch from "Patterns/03_Organisms/Product Search/ProductSearch";
import CardContainer from "Patterns/03_Organisms/Card Container/CardContainer";
import ProductCard from "Patterns/03_Organisms/Product Card/ProductCard";
import styles from "./Home.module.scss";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [productImages, setProductImages] = useState("");
  const [routeInfo, setRouteInfo] = useState(undefined);
  const location = useLocation();
  const category = location.state?.category;

  useEffect(() => {
    axios.get("http://localhost:8000/products/all").then((data) => {
      setProducts(data.data);
    });
  }, []);

  useEffect(() => {
    // get products specified by category in route
    setRouteInfo(category);
  }, [category]);

  useEffect(() => {}, [products]);

  // image: `data:image;base64,${image}`
  // const image = data.data.encode_image;
  // const productKey = data.data.key;

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
          {products &&
            products.map(
              (product) => {
                console.log(product);
              }
              // <ProductCard
              //   key={product.id}
              //   image={product.image}
              //   heading={product.name}
              //   quantity={product.remaining_quantity}
              // />
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
