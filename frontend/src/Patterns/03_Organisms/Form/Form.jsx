import FormField from "Patterns/02_Molecules/Form Field/FormField";
import Button from "Patterns/01_Atoms/Button/Button";
import styles from "./Form.module.scss";

const Form = () => {
  return (
    <form className={styles.form}>
      <FormField
        name={"email"}
        labelText={"Email"}
        inputText={"email@domain.net"}
        inputType={"text"}
      />
      <FormField
        name={"password"}
        labelText={"Password"}
        inputText={""}
        inputType={"password"}
      />
      <Button text={"Log in"} type={"submit"} />
    </form>
  );
};

export default Form;
