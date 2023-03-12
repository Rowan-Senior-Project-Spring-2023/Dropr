import Heading from "Patterns/01_Atoms/Heading/Heading";
import ProductCard from "Patterns/03_Organisms/Product Card/ProductCard";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <section>
        <ProductCard
          heading={"Archer Canine Vrchat 3.0 PC + Quest"}
          price={35}
        />
      </section>
    </>
  );
};

export default Home;
