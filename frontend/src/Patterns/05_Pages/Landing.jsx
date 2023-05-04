import Navbar from "Patterns/03_Organisms/Navbar/Navbar";
import Section from "Patterns/03_Organisms/Section/Section";
import SectionText from "Patterns/02_Molecules/Section Text/SectionText";
import SectionImage from "Patterns/02_Molecules/Section Image/SectionImage";
import Banner from "Patterns/03_Organisms/Banner/Banner";
import mainSectionImage from "Assets/vegalia.png";

const Landing = () => {
  return (
    <main>
      <Navbar
        links={[
          { name: "Landing", to: "/" },
          { name: "Home", to: "/home" },
          { name: "Sign up", to: "/signup" },
          { name: "Log in", to: "/login" },
        ]}
      />
      <Section variant={"landing"}>
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
        heading={"Make your own road"}
        description={
          "With Gumroad, anyone can earn their first dollar online. Just start with what you know, see what sticks, and get paid. It’s that easy."
        }
        cta={"Get started"}
        color={"white"}
      />
      <Section variant={"landing"}>
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
        variant="no-description"
        heading={"Share your work. Someone out there needs it."}
        description={
          "Whether you need more balance, flexibility, or just a different gig, we make it easier to chart a new path. You don't have to be a tech expert or even understand how to start a business. You just gotta take what you know and sell it."
        }
        cta={"Explore Features"}
        color={"teal"}
      />
      <Section variant={"landing"}>
        <SectionImage src={mainSectionImage} alt={"Picture of Vegalia."} />
        <SectionText
          heading={"Go from zero to 1$"}
          description={
            "With Gumroad, anyone can earn their first dollar online. Just start with what you know, see what sticks, and get paid. It’s that easy."
          }
          cta={"Get started"}
        />
      </Section>
    </main>
  );
};

export default Landing;
