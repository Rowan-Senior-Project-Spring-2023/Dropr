import { Outlet } from "react-router-dom";
import Section from "Patterns/03_Organisms/Section/Section";
import SectionText from "Patterns/02_Molecules/Section Text/SectionText";
import SectionImage from "Patterns/02_Molecules/Section Image/SectionImage";

const Root = (props) => {
  return (
    <Section
      // key prop is arbitrary for now
      children={[
        <SectionText
          heading={"Go from zero to 1$"}
          description={
            "With Gumroad, anyone can earn their first dollar online. Just start with what you know, see what sticks, and get paid. It’s that easy."
          }
          cta={"Get started"}
          key={1}
        />,
        <SectionImage
          src={""}
          alt={"This is alt text for an image."}
          key={2}
        />,
      ]}
    />
  );
};

export default Root;
