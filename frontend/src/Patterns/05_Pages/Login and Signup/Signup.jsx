import Heading from "Patterns/01_Atoms/Heading/Heading";
import Form from "Patterns/03_Organisms/Form/Form";
import Image from "Patterns/01_Atoms/Image/Image";
import styles from "./LoginAndSignup.module.scss";
import loginImage from "Assets/Login-and-Signup.webp";
import { useState } from "react";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    fullName: "",
    phone: "",
  });

  const { username, email, password, fullName, phone } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const data = {
      username: username,
      email: email,
      hashed_password: password,
      phone_number: phone,
      full_name: fullName,
    };
    axios
      .post("http://localhost:8000/createUser", data)
      .then((response) => {
        console.log(response);
        navigate("/login");
        //alert(response);
      })
      .catch((error) => {
        //alert(error);
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
          type="user"
          className={styles.form}
          onSubmit={handleSubmit}
          onChange={handleChange}
        />
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
