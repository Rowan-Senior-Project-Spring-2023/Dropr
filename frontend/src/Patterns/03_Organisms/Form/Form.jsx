import React from "react";
import FormField from "Patterns/02_Molecules/Form Field/FormField";
import Button from "Patterns/01_Atoms/Button/Button";
import styles from "./Form.module.scss";


const LoginForm = ({ action, method }) => {
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
    </form>
  );
};


export default Form;
