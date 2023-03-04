import FormField from "Patterns/02_Molecules/Form Field/FormField";
import styles from "./Form.module.scss";

const Form = () => {
  return (
    <form>
      <FormField
        name={"name"}
        labelText={"name label"}
        inputText={"input text"}
        inputType={"text"}
      />
    </form>
  );
};

export default Form;
