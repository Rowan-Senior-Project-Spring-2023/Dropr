import { Link } from "react-router-dom";
import "../00_Tokens/variables";

const Link = (props) => {
  return <Link to={props.destination}>{props.name}</Link>;
};
