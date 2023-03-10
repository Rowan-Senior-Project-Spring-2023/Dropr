import Image from "Patterns/01_Atoms/Image/Image";
import Header from "Patterns/02_Molecules/Header/Header";
import Footer from "Patterns/02_Molecules/Footer/Footer";
import styles from "./ProductCard.module.scss";

const ProductCard = (props) => {
  return (
    <article>
      <Image />
      <Header />
      <Footer />
    </article>
  );
};

export default ProductCard;
