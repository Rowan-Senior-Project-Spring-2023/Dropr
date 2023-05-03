import Heading from "Patterns/01_Atoms/Heading/Heading";
import Form from "Patterns/03_Organisms/Form/Form";
import Image from "Patterns/01_Atoms/Image/Image";
import styles from "../Login and Signup/LoginAndSignup.module.scss";
import loginImage from "Assets/Login-and-Signup.webp";

const RegisterProduct = () => {
  const handleSubmit = () => {};
  const handleChange = () => {};

  return (
    <div className={styles.page}>
      <main className={styles.actionArea}>
        <header>
          <Heading
            variant={"section"}
            text={"Register a product for your company."}
            className={styles.heading}
          />
        </header>
        <Form
          type="product"
          className={styles.form}
          onSubmit={handleSubmit}
          onChange={handleChange}
        />
      </main>
      <aside className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <Image
            src={loginImage}
            alt={"Decorative image for the page."}
            className={styles.image}
          />
        </div>
      </aside>
    </div>
  );
};

export default RegisterProduct;
