import Heading from "Patterns/01_Atoms/Heading/Heading";
import Form from "Patterns/03_Organisms/Form/Form";
import Image from "Patterns/01_Atoms/Image/Image";
import styles from "./Login.module.scss";
import loginImage from "Assets/Login-and-Signup.webp";

const Login = () => {
  return (
    <div className={styles.page}>
      <main className={styles.loginArea}>
        <header>
          <Heading
            level={1}
            text={"Welcome back!"}
            className={styles.heading}
          />
        </header>
        <Form action={"/api"} method={"POST"} className={styles.form} />
      </main>
      <aside className={styles.imageContainer}>
        <Image
          src={loginImage}
          alt={"Background image for the Login page."}
          className={styles.image}
        />
      </aside>
    </div>
  );
};

export default Login;
