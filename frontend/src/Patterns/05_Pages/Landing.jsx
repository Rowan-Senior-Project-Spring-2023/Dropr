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
          heading={"Dropr"}
          description={
            "Join millions of users around the globe waiting for the hottest drops!"
          }
          link={{ name: "Signup", to: "/signup" }}
        />
        <SectionImage src={mainSectionImage} alt={"Picture of Vegalia."} />
      </Section>
      <Banner
        heading={"Sign up to see the hottest brands!"}
        description={
          "Welcome to Dropr, where anyone can find amazing limited edition deals from the hottest brands!"
        }
        link={{ name: "Signup", to: "/signup" }}
        color={"white"}
      />
      <Section variant={"landing"}>
        <SectionText
          heading={"Sign up with your Company Today!"}
          description={
            "Want to sell your limited edition products? Sign your company up now to open your business to millions of users!"
          }
          link={{ name: "Company Signup", to: "/company-signup" }}
        />
        <SectionImage src={mainSectionImage} alt={"Picture of Vegalia."} />
      </Section>
      <Banner
        variant="no-description"
        heading={"Dropr supports all types of companies with all kinds of products!"}
        description={
          "Dropr supports all types of companies with all kinds of products!"
        }
        link={{ name: "Company Signup", to: "/company-signup" }}
        color={"teal"}
      />
      <Section variant={"landing"}>
        <SectionImage src={mainSectionImage} alt={"Picture of Vegalia."} />
        <SectionText
          heading={"Dropr"}
          description={
            "Join Now!"
          }
          link={{ name: "Company Signup", to: "/comapny-signup" }}
        />
      </Section>
    </main>
  );
};

export default Landing;
