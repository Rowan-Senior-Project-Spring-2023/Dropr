import Image from "Patterns/01_Atoms/Image/Image";
import Header from "Patterns/02_Molecules/Header/Header";
import Heading from "Patterns/01_Atoms/Heading/Heading";
import Footer from "Patterns/02_Molecules/Footer/Footer";
import styles from "./ProductCard.module.scss";
import exampleImage from "Assets/ezgif-1-af2e163fba.webp";

const ProductCard = ({ heading, price }) => {
  return (
    <article className={styles.productCard}>
      <Image src={exampleImage} alt={"Example product card image"} />
      <Header variant={"card"} heading={heading} />
      <Footer variant={"card"} price={price} />
    </article>
  );
};

export default ProductCard;
