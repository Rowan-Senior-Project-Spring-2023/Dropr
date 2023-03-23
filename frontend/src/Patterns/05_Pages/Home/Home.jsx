import ProductSearch from "Patterns/03_Organisms/Product Search/ProductSearch";
import CardContainer from "Patterns/03_Organisms/Card Container/CardContainer";
import Card from "Patterns/03_Organisms/Card/Card";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <ProductSearch />
      <main className={styles.main}>
        <CardContainer>
          <Card heading={"Archer Canine Vrchat 3.0 PC + Quest"} price={35} />
          <Card heading={"Archer Canine Vrchat 3.0 PC + Quest"} price={35} />
          <Card heading={"Archer Canine Vrchat 3.0 PC + Quest"} price={35} />
          <Card heading={"Archer Canine Vrchat 3.0 PC + Quest"} price={35} />
          <Card heading={"Archer Canine Vrchat 3.0 PC + Quest"} price={35} />
          <Card heading={"Archer Canine Vrchat 3.0 PC + Quest"} price={35} />
        </CardContainer>
      </main>
    </>
  );
};

export default Home;
