import React from "react";
import PropTypes from "prop-types";
import FormField from "Patterns/02_Molecules/Form Field/FormField";
import Button from "Patterns/01_Atoms/Button/Button";
import styles from "./Form.module.scss";

const LoginForm = () => {
  return (
    <>
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
    </>
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
        name={"fullName"}
        labelText={"Full Name"}
        inputText={""}
        inputType={"text"}
      />
      <FormField
        name={"phone"}
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
        name={"companyName"}
        labelText={"Company Name"}
        inputText={""}
        inputType={"text"}
      />

      <FormField
        name={"companyDescription"}
        labelText={"Compay Description"}
        inputText={""}
        inputType={"longtext"}
      />
      <FormField
        name={"companyPassword"}
        labelText={"Company Password"}
        inputText={""}
        inputType={"password"}
      />
      <FormField
        name={"Link"}
        labelText={"Company link"}
        inputText={""}
        inputType={"link"}
      />
      <FormField
        name={"company-image"}
        labelText={"Company Image"}
        inputType="file"
        accept="image/*"
      />
      <Button variant={"form"} text={"Register"} type={"submit"} />
    </>
  );
};

const Search = () => {
  return (
    <FormField name="search" inputText={"Search products"} inputType="search" />
  );
};

const RegisterProduct = () => {
  return (
    <>
      <FormField
        name={"productName"}
        labelText={"Product Name"}
        inputType={"text"}
      />
      <FormField
        name={"productDescription"}
        labelText={"Product Description"}
        inputType="text"
      />
      <FormField
        name={"productPrice"}
        labelText={"Product Price"}
        inputType={"text"}
      />
      <FormField
        name={"productCategory"}
        labelText={"Product Category"}
        inputType={"text"}
      />
      <FormField
        name={"productImage"}
        labelText={"Product Image Link"}
        inputType={"text"}
      />
      <FormField
        name={"productOpen"}
        labelText={"Product Is Open?"}
        inputType={"text"}
      />
      <FormField
        name={"productFeatured"}
        labelText={"Product Is Featured?"}
        inputType={"text"}
      />
      <Button variant={"form"} text={"Create product"} type={"submit"} />
    </>
  );
};

const Form = ({ action, method, onSubmit, onChange, type }) => {
  return (
    <form
      action={action}
      method={method}
      onSubmit={onSubmit}
      onChange={onChange}
      className={styles.form}
    >
      {type === "user" && <UserForm />}
      {type === "company" && <CompanyForm />}
      {type === "login" && <LoginForm />}
      {type === "search" && <Search />}
      {type === "product" && <RegisterProduct />}
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
