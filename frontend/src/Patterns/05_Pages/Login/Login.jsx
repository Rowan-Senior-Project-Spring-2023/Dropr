import Heading from "Patterns/01_Atoms/Heading/Heading";
import Form from "Patterns/03_Organisms/Form/Form";
import styles from "./Login.module.scss";

const Login = () => {
  return (
    <>
      <main className={styles.loginArea}>
        <header>
          <Heading level={1} text={"Welcome back"} className={styles.heading} />
        </header>
        <Form className={styles.form} />
      </main>
      <aside></aside>
    </>
  );
};

export default Login;
