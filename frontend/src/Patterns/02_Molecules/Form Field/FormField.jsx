import PropTypes from "prop-types";
import FormLabel from "Patterns/01_Atoms/Form Label/FormLabel";
import FormInput from "Patterns/01_Atoms/Form Input/FormInput";
import styles from "./FormField.module.scss";

const FormField = ({ name, labelText, inputText, inputType }) => {
  return (
    <div className={styles.formField}>
      {labelText && <FormLabel text={labelText} />}
      <FormInput name={name} text={inputText} type={inputType} />
    </div>
  );
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  inputText: PropTypes.string,
  inputType: PropTypes.string,
};

export default FormField;
