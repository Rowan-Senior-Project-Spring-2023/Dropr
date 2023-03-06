import { Link } from "react-router-dom";

const Link = (props) => {
  return <Link to={props.destination}>{props.name}</Link>;
};
