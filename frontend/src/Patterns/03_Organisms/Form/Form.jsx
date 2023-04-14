import PropTypes from "prop-types";
import FormField from "Patterns/02_Molecules/Form Field/FormField";
import Button from "Patterns/01_Atoms/Button/Button";
import styles from "./Form.module.scss";
import { useState } from "react";

const Form = ({ action, method, onSubmit, onChange }) => {

  return (
    <form action={action} method={method} className={styles.form} onSubmit={onSubmit} onChange={onChange} >
      <FormField
        name={"email"}
        labelText={"Email"}
        inputText={"email@domain.net"}
        inputType={"email"}
        value={"email"}
        />
      <FormField
        name={"password"}
        labelText={"Password"}
        inputText={""}
        inputType={"password"}
        value={"password"}
      />
      <Button variant={"form"} text={"Log in"} type={"submit"} />
    </form>
  )
}

Form.propTypes = {
  variant: PropTypes.oneOf(["login", "signup", "search"]),
  action: PropTypes.string,
  method: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default Form;
