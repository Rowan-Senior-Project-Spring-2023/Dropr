import HeroText from "Patterns/02_Molecules/SectionText";
import HeroImage from "Patterns/02_Molecules/SectionImage";
import styles from "Styles/Components/Section.module.scss";

const Section = (props) => {
  return (
    <main className={styles.container}>
      <HeroText
        heading={"Go from zero to 1$"}
        description={
          "With Gumroad, anyone can earn their first dollar online. Just start with what you know, see what sticks, and get paid. It’s that easy."
        }
        cta={"asdadsa"}
      />
      <HeroImage src={""} alt={"This is alt text for an image."} />
    </main>
  );
};

export default Section;
