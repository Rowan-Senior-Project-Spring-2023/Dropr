import styles from "./Section.module.scss";

const Section = ({ children }) => {
  let classNames = "";
  children.length > 1
    ? (classNames += styles.containerTwoChildren)
    : (classNames += styles.containerOneChild);

  return <section className={classNames}>{children}</section>;
};

export default Section;
