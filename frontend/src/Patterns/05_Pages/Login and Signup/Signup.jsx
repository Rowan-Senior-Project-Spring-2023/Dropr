import Heading from "Patterns/01_Atoms/Heading/Heading";
import Form from "Patterns/03_Organisms/Form/Form";
import Image from "Patterns/01_Atoms/Image/Image";
import styles from "./LoginAndSignup.module.scss";
import loginImage from "Assets/Login-and-Signup.webp";

const Signup = () => {
  return (
    <div className={styles.page}>
      <main className={styles.actionArea}>
        <header>
          <Heading
            level={1}
            text={"Join now and start subscribing to over 100,000 products."}
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

export default Signup;
