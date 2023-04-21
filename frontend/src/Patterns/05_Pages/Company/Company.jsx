import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import CompanyHeader from "Patterns/03_Organisms/CompanyHeader/CompanyHeader";
import CardContainer from "Patterns/03_Organisms/Card Container/CardContainer";
import ProductCard from "Patterns/03_Organisms/Product Card/ProductCard";
import styles from "./Company.module.scss";
import Paragraph from "Patterns/01_Atoms/Paragraph/Paragraph";
import Heading from "Patterns/01_Atoms/Heading/Heading";
import Header from "Patterns/03_Organisms/Header/Header";
import Link from "Patterns/01_Atoms/Link/Link";
import Section from "Patterns/03_Organisms/Section/Section";

// Definitely would like to refactor this since we're repeating code from <App />
// this will be good enough for now
// Perhaps we can render <Company /> inside a main <App /> component & route...

const Company = () => {
  const [products, setProducts] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    if (images.length === 0) return;

    setLoading(false);
  }, [images]);

  return (
    <>
      {/* This is the only thing we're changing, rest can be refactored into some <App /> component */}
      <Section>
        <Header>
          <Heading variant={"section"} text={"Company name"} />
          <Paragraph text={"Company description"} />
          <Link
            href={
              "https://daveredfern.com/use-sass-placeholders-and-extend-wisely-a-cautionary-tale/"
            }
            description={"example link"}
          />
        </Header>
      </Section>
      {/* ==================== */}
      <main className={styles.main}>
        {!loading && (
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
                  id={product.id}
                  image={
                    images.find((image) => image.key === product.id)
                      ?.encode_image
                  }
                  heading={product.name}
                  price={product.price}
                />
              ))}
          </CardContainer>
        )}
      </main>
    </>
  );
};

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default Company;
