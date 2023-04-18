import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ProductSearch from "Patterns/03_Organisms/Product Search/ProductSearch";
import CardContainer from "Patterns/03_Organisms/Card Container/CardContainer";
import ProductCard from "Patterns/03_Organisms/Product Card/ProductCard";
import styles from "./Home.module.scss";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [images, setImages] = useState([]);
  const [routeInfo, setRouteInfo] = useState(undefined);
  const location = useLocation();
  const category = location.state?.category;

  useEffect(() => {
    axios.get("http://localhost:8000/products/all").then((data) => {
      setProducts(data.data);
    });
  }, []);

  useEffect(() => {
    setRouteInfo(category); // get products specified by category in route
  }, [category]);

  useEffect(() => {
    if (products.length === 0) return;

    Promise.allSettled(
      products.map(async (product) => {
        return axios
          .get(`http://localhost:8000/products/image?product_key=${product.id}`)
          .then((data) => data.data);
      })
    ).then((results) => {
      results = results
        .filter((result) => result.status === "fulfilled")
        .map((result) => result.value);

      results.forEach(
        (result) =>
          (result.encode_image = `data:image;base64,${result.encode_image}`)
      );

      setImages(results);
    });
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
          {products &&
            products.map((product) => (
              <ProductCard
                key={product.id}
                image={
                  images.find((image) => image.key === product.id)?.encode_image
                }
                heading={product.name}
                quantity={product.remaining_quantity}
              />
            ))}
        </CardContainer>
      </main>
    </>
  );
};

export default Home;
