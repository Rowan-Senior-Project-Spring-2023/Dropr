import FormField from "Patterns/02_Molecules/Form Field/FormField";
import Button from "Patterns/01_Atoms/Button/Button";
import styles from "./Form.module.scss";

const Form = ({ action, method }) => {
  const handleClick = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:8000/connected", {
      method: "POST", 
      headers: { "Access-Control-Allow-Origin": "*"}
    });
    alert(response)
  }

  return (
    <form action={action} method={method} className={styles.form}>
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
      <Button text={"Log in"} type={"submit"} onClick={handleClick}/>
    </form>
  );
};

export default Form;
