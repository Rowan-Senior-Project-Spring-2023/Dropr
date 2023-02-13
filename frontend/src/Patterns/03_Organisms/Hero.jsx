import HeroText from "Patterns/02_Molecules/HeroText";
import HeroImage from "Patterns/02_Molecules/HeroImage";
import styles from "Styles/Components/Hero.module.scss";

const Hero = (props) => {
  return (
    <main className={styles.container}>
      <HeroText
        heading={"This is a header"}
        description={"This is some description text."}
        cta={"Get started"}
      />
      <HeroImage src={""} alt={"This is alt text for an image."} />
    </main>
  );
};

export default Hero;
