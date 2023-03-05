import Heading from "Patterns/01_Atoms/Heading/Heading";
import Form from "Patterns/03_Organisms/Form/Form";
import styles from "./Login.module.scss";

const Login = () => {
  return (
    <section className={styles.loginArea}>
      <Heading level={1} text={"Welcome back"} />
      <Form />
    </section>
  );
};

export default Login;
