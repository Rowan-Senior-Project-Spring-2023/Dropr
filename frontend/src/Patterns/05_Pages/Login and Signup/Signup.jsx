import Heading from "Patterns/01_Atoms/Heading/Heading";
import Form from "Patterns/03_Organisms/Form/Form";
import Image from "Patterns/01_Atoms/Image/Image";
import styles from "./LoginAndSignup.module.scss";
import loginImage from "Assets/Login-and-Signup.webp";
import { useState } from "react";
import axios from "axios"
import React from 'react';

const Signup = () => {
 
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password:  "",
    fullName: "",
  });

  const { username, email, password, fullName } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const data = {
      username: username,
      emails: email,
      password: password,
      full_name: fullName,
      disabled: false
    };
    axios
      .post("http://127.0.0.1:8000/createUser", data)
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
            text={"Join now and start subscribing to over 100,000 products."}
            className={styles.heading}
          />
        </header>
        <Form
          variant="signup"
          className={styles.form}
          onSubmit={handleSubmit}
          onChange={handleChange}
        />
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
