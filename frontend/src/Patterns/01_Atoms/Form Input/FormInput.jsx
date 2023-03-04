const FormInput = ({ name, text, type = "text" }) => {
  return <input name={name} type={type} placeholder={text} />;
};

export default FormInput;
