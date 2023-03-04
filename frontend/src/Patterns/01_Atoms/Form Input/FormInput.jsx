const FormInput = ({ text, type = "text" }) => {
  return <input type={type}>{text}</input>;
};

export default FormInput;
