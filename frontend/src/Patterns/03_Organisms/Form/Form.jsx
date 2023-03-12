import FormField from "Patterns/02_Molecules/Form Field/FormField";
import Button from "Patterns/01_Atoms/Button/Button";
import styles from "./Form.module.scss";

const Form = ({ variant, action, method }) => {
  return (
    <form action={action} method={method} className={styles.loginForm}>
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
      <Button variant={"form"} text={"Log in"} type={"submit"} />
    </form>
  );
};

export default Form;
