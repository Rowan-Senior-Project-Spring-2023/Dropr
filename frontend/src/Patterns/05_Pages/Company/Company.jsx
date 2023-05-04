import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardContainer from "Patterns/03_Organisms/Card Container/CardContainer";
import ProductCard from "Patterns/03_Organisms/Product Card/ProductCard";
import styles from "./Company.module.scss";
import Header from "Patterns/03_Organisms/Header/Header";
import Section from "Patterns/03_Organisms/Section/Section";

// Definitely would like to refactor this since we're repeating code from <App />
// this will be good enough for now
// Perhaps we can render <Company /> inside a main <App /> component & route...

const Company = () => {
  const [company, setCompany] = useState();
  const [products, setProducts] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [routeInfo, setRouteInfo] = useState(undefined);
  const { companyId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/companies/?company_id=${companyId}`)
      .then((data) => {
        setCompany(data.data.company);
        setProducts(data.data.products);
        console.log(data.data.company);
      });
  }, []);

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
        .map((result) => result.value.image);

      setImages(results);
      console.log(results);
    });
  }, [products]);

  useEffect(() => {
    if (images.length === 0) return;

    setLoading(false);
  }, [images]);

  if (!loading) {
    return (
      <>
        {/* This is the only thing we're changing, rest can be refactored into some <App /> component */}
        <Section>
          <Header
            variant={"company"}
            heading={company.name}
            description={company.description}
          />
        </Section>
        {/* ==================== */}
        <main className={styles.main}>
          {!loading && (
            <CardContainer
              heading={
                company.name
                  ? `Trending drops in ${capitalize(company.name)}`
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
  }
};

const capitalize = (string) => {
  if (typeof string !== "string") return "Company Name";

  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default Company;
