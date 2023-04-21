import React from "react";
import PropTypes from "prop-types";
import FormField from "Patterns/02_Molecules/Form Field/FormField";
import Button from "Patterns/01_Atoms/Button/Button";
import styles from "./Form.module.scss";
import { useState } from "react";

const LoginForm = ({ variant, action, method }) => {
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
      <FormField
        name={"Phone"}
        labelText={"Phone number"}
        inputText={""}
        inputType={"tel"}
      />
      <Button variant={"form"} text={"Register"} type={"submit"} />
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
        name={"company-description"}
        labelText={"Compay Description"}
        inputText={""}
        inputType={"longtext"}
      />
      <FormField
        name={"company-password"}
        labelText={"Company Password"}
        inputText={""}
        inputType={"password"}
      />
      <FormField
        name={"company-image"}
        labelText={"Company Image"}
        inputType="file" accept="image/*" 
      />

      <Button variant={"form"} text={"Register"} type={"submit"} />
    </>
  );
};

const Form = ({ action, method, onSubmit, onChange })  => {
  return (
    <form action={action} method={method} onSubmit={onSubmit} onChange={onChange} className={styles.form}>
      {type === "user" && <UserForm/>}
      {type === "company" && <CompanyForm/>}
      {type === "login" && <LoginForm/>}
    </form>
  );
};

Form.propTypes = {
  variant: PropTypes.oneOf(["login", "signup", "search"]),
  action: PropTypes.string,
  method: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default Form;
