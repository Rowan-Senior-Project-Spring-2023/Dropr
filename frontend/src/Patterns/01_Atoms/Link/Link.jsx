import styles from "./Link.module.scss";

const Link = ({ href, description }) => {
  return <a href={href}>{description}</a>;
};

export default Link;
