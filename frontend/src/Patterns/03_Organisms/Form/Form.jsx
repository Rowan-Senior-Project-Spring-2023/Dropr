<<<<<<< HEAD
import React from "react";
=======
import PropTypes from "prop-types";
>>>>>>> 1f47a28879b517b04decbd7e5146e2d85eb00d5f
import FormField from "Patterns/02_Molecules/Form Field/FormField";
import Button from "Patterns/01_Atoms/Button/Button";
import styles from "./Form.module.scss";

<<<<<<< HEAD

const LoginForm = ({ action, method }) => {
=======
const Form = ({ variant, action, method }) => {
  return variant === "login" || variant === "signup" ? (
    <form action={action} method={method} className={styles.loginForm}>
const Form = ({ action, method }) => {
  const handleClick = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:8000/connected", {
      method: "POST", 
      headers: { "Access-Control-Allow-Origin": "*"}
    });
    alert(response)
  }

>>>>>>> 1f47a28879b517b04decbd7e5146e2d85eb00d5f
  return (
    <form action={action} method={method} className={styles.form}>
      <FormField
        name={"username"}
        labelText={"Username"}
        inputText={""}
        inputType={"username"}
      />
      <FormField
        name={"password"}
        labelText={"Password"}
        inputText={""}
        inputType={"password"}
      />
    </form>
  );
};

const UserForm = () => {
  return (
    <>
      <FormField
        name={"email"}
        labelText={"Email"}
        inputText={"email@domain.net"}
        inputType={"email"}
      />
      <FormField
        name={"username"}
        labelText={"Username"}
        inputText={""}
        inputType={"text"}
      />
      <FormField
        name={"password"}
        labelText={"Password"}
        inputText={""}
        inputType={"password"}
      />
<<<<<<< HEAD
      <FormField
        name={"full-name"}
        labelText={"Full Name"}
        inputText={""}
        inputType={"text"}
      />
    </>
  );
};

const CompanyForm = () => {
  return (
    <>
      <FormField
        name={"company-name"}
        labelText={"Company Name"}
        inputText={""}
        inputType={"text"}
      />
      <FormField
        name={"company-email"}
        labelText={"Company Email"}
        inputText={"email@domain.net"}
        inputType={"email"}
      />
      <FormField
        name={"company-username"}
        labelText={"Company Username"}
        inputText={""}
        inputType={"text"}
      />
      <FormField
        name={"company-password"}
        labelText={"Company Password"}
        inputText={""}
        inputType={"password"}
      />
    </>
  );
};

const Form = ({ action, method, type }) => {
  return (
    <form action={action} method={method} className={styles.form}>
      {type === "user" && <UserForm/>}
      {type === "company" && <CompanyForm/>}
      {type === "login" && <LoginForm/>}
      <Button text={"Log in"} type={"submit"} />
=======
      <Button variant={"form"} text={"Log in"} type={"submit"} />
>>>>>>> 1f47a28879b517b04decbd7e5146e2d85eb00d5f
    </form>
  ) : (
    <FormField name="search" inputText={"Search products"} inputType="search" />
  );
};

<<<<<<< HEAD
=======
Form.propTypes = {
  variant: PropTypes.oneOf(["login", "signup", "search"]),
  action: PropTypes.string,
  method: PropTypes.string,
};
>>>>>>> 1f47a28879b517b04decbd7e5146e2d85eb00d5f

export default Form;
