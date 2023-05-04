import Heading from "Patterns/01_Atoms/Heading/Heading";
import Form from "Patterns/03_Organisms/Form/Form";
import Image from "Patterns/01_Atoms/Image/Image";
import styles from "../Login and Signup/LoginAndSignup.module.scss";
import loginImage from "Assets/Login-and-Signup.webp";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const RegisterProduct = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      productName: "",
      productDescription: "",
      productPrice:  "",
      productCategory:  "",
      productImage: "",
      productFeatured: "",
      productOpen: ""
    });

  const { productName, productDescription, productPrice, productCategory, productImage, productFeatured, productOpen } = formData;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const data = {
      product_name: productName,
      description: productDescription,
      price: productPrice,
      category: productCategory,
      image_link: productImage,
      is_featured: productFeatured,
      is_open: productOpen,

    };

    axios
    .post("http://127.0.0.1:8000/products/create", data,   {
      headers: {
        //'Content-Type': 'multipart/form-data; boundary= ${bodyFormData._boundary}'
      }
    })
    .then((response) => {
      console.log(response);
      navigate("/home");
    })
    .catch((error) => {
      alert(error);
    });
  };



  const handleChange = (e) => {    
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
