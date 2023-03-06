import styles from "./FormLabel.module.scss";

const FormLabel = ({ htmlFor, text }) => {
  return (
    <label htmlFor={htmlFor} className={styles.label}>
      {text}
    </label>
  );
};

export default FormLabel;
