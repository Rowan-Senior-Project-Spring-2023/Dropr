import Heading from "Patterns/01_Atoms/Heading/Heading";
import Form from "Patterns/03_Organisms/Form/Form";
import Image from "Patterns/01_Atoms/Image/Image";
import styles from "./LoginAndSignup.module.scss";
import loginImage from "Assets/Login-and-Signup.webp";
import axios from "axios";
import { useState } from "react";


const CompanySignup = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    //companyEmail: "",
    companyDescription: "",
    companyPassword:  "",
    Link: "",
    image: ""
  });

  const { companyName, companyEmail, companyPassword, companyDescription, Link, image } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const data = {
      company_name: companyName,
      //company_Email: companyEmail,
      password: companyPassword,
      description: companyDescription,
      link: Link,
      image_path: image
    };
    axios
      .post("http://127.0.0.1:8000/companies/create", data)
      .then((response) => {
        console.log(data);
        console.log(response);
        alert(response);
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className={styles.page}>
      <main className={styles.actionArea}>
        <header>
          <Heading
            variant={"section"}
            text={"Join now and start selling your products to millions."}
            className={styles.heading}
          />
        </header>
        <Form
          type ="company"
          onSubmit={handleSubmit}
          onChange={handleChange}
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
