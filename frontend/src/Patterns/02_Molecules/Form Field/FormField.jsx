import FormLabel from "Patterns/01_Atoms/Form Label/FormLabel";
import FormInput from "Patterns/01_Atoms/Form Input/FormInput";
import styles from "./FormField.module.scss";

const FormField = ({ name, labelText, inputText, inputType }) => {
  return (
    <div className={styles.formField}>
      <FormLabel text={labelText} />
      <FormInput name={name} text={inputText} type={inputType} />
    </div>
  );
};

export default FormField;
