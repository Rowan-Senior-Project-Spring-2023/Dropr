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
            variant={"section"}
            text={"Join now and start subscribing to over 100,000 products."}
            className={styles.heading}
          />
        </header>
<<<<<<< HEAD
        <Form action={"/api"} method={"POST"} type = {"user"} className={styles.form} />
=======
        <Form
          variant="signup"
          action={"/api"}
          method={"POST"}
          className={styles.form}
        />
>>>>>>> 1f47a28879b517b04decbd7e5146e2d85eb00d5f
      </main>
      <aside className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
        <Image
           src={loginImage}
           alt={"Background image for the Login page."}
            className={styles.image}
        />
        </div>
      </aside>

    </div>
  );
};

export default Signup;
