import PropTypes from "prop-types";
import FormField from "Patterns/02_Molecules/Form Field/FormField";
import Button from "Patterns/01_Atoms/Button/Button";
import styles from "./Form.module.scss";

const Form = ({ variant, action, method }) => {
  return variant === "login" || variant === "signup" ? (
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
  ) : (
    <FormField
      name="search"
      labelText={""}
      inputText={"Search products"}
      inputType="search"
    />
  );
};

Form.propTypes = {
  variant: PropTypes.oneOf(["login", "signup", "search"]),
  action: PropTypes.string,
  method: PropTypes.string,
};

export default Form;
