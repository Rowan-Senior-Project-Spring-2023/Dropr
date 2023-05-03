import Heading from "Patterns/01_Atoms/Heading/Heading";
import Form from "Patterns/03_Organisms/Form/Form";
import Image from "Patterns/01_Atoms/Image/Image";
import styles from "./LoginAndSignup.module.scss";
import loginImage from "Assets/Login-and-Signup.webp";
import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const data = {
      username: email,
      password: password,
    };
    axios
      .post("http://127.0.0.1:8000/token", data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        Cookies.set("token", response.data.access_token);
        axios.get("http://localhost:8000/users/me");
        navigate("/home");
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
            text={"Welcome back!"}
            className={styles.heading}
          />
        </header>
        <Form
          type="login"
          className={styles.form}
          onSubmit={handleSubmit}
          onChange={handleChange}
        />
      </main>
      <aside className={styles.imageContainer}>
        <Image
          src={loginImage}
          alt={"Decorative image for the page."}
          className={styles.image}
        />
      </aside>
    </div>
  );
};

export default Login;

// useEffect(() =>  {
//   const res = axios
//     .post("http://127.0.0.1:8000/login", data)
//     .then((response) => {
//       console.log(response);
//       Cookies.set("token", response.data.access_token);
//       return response;
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });
//   })
// });
