import Section from "Patterns/03_Organisms/Section/Section";
import SectionText from "Patterns/02_Molecules/Section Text/SectionText";
import SectionImage from "Patterns/02_Molecules/Section Image/SectionImage";
import Banner from "Patterns/03_Organisms/Banner/Banner";
import mainSectionImage from "Assets/vegalia.png";

const Landing = () => {
  return (
    <>
      <Section>
        <SectionText
          heading={"Go from zero to 1$"}
          description={
            "With Gumroad, anyone can earn their first dollar online. Just start with what you know, see what sticks, and get paid. It’s that easy."
          }
          cta={"Get started"}
        />
        <SectionImage src={mainSectionImage} alt={"Picture of Vegalia."} />
      </Section>
      <Banner
        text={"Share your work. Someone out there needs it."}
        size={"extra large"}
      />
    </>
  );
};

export default Landing;
