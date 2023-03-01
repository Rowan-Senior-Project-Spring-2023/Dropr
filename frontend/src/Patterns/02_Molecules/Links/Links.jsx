import Link from "../../01_Atoms/Link/Link";

const Links = (props) => {
  return (
    props.links &&
    props.links.map((link) => {
      <Link name={link.name} destination={link.destination} />;
    })
  );
};

export default Links;
