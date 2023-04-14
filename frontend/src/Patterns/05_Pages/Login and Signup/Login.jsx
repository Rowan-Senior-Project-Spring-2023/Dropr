import Heading from "Patterns/01_Atoms/Heading/Heading";
import Form from "Patterns/03_Organisms/Form/Form";
import Image from "Patterns/01_Atoms/Image/Image";
import styles from "./LoginAndSignup.module.scss";
import loginImage from "Assets/Login-and-Signup.webp";
import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const defaultForm = {
  name: "",
}

const Login = () => {
  //const Auth = React.useContext(AuthApi);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const pullData = (info) =>{
    setName(info.name);
    setPassword(info.password);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      username: name,
      password: password,
    };

    try {
      const response = await axios.post("http://127.0.0.1:8000/login",  data);

      if (response && response.data)  {
        Cookies.set("token", response.data.access_token)
      }
    } catch (error) {
      throw new Error(error);
    }
     
  }


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
          variant="login"
          action={"/api"}
          method={"POST"}
          className={styles.form}
          onSubmit = {handleSubmit}
          func = {pullData}
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