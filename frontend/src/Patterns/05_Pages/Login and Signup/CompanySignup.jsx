import Heading from "Patterns/01_Atoms/Heading/Heading";
import Form from "Patterns/03_Organisms/Form/Form";
import Image from "Patterns/01_Atoms/Image/Image";
import styles from "./LoginAndSignup.module.scss";
import loginImage from "Assets/Login-and-Signup.webp";

const CompanySignup = () => {
  return (
    <div className={styles.page}>
      <main className={styles.actionArea}>
        <header>
          <Heading
            variant={"registration"}
            text={"Join now and start selling your products to millions."}
            className={styles.heading}
          />
        </header>
        <Form
          type="company"
          action={"/api"}
          method={"POST"}
          className={styles.form}
        />
      </main>
      <aside className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <Image
            src={loginImage}
            alt={"Background image for the Company Register page."}
            className={styles.image}
          />
        </div>
      </aside>
    </div>
  );
};

export default CompanySignup;
