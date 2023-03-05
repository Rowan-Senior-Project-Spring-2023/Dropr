import styles from "./FormInput.module.scss";

const FormInput = ({ name, text, type = "text" }) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={text}
      className={styles.input}
    />
  );
};

export default FormInput;
