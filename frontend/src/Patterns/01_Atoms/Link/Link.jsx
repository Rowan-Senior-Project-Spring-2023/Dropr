import { Link } from "react-router-dom";
import styles from "./Link.module.scss";

const Link = ({ as }) => {
  const Component = as;
  return <Component to={props.destination}>{props.name}</Component>;
};
