import styles from "./RegisterProduct.module.scss";

const RegisterProduct = () => {
  return (
    <div>
      <h1>Register a product</h1>
      <form action="/api/company/{company_id}/create_product" method="POST">
        {/* action is the url to which we send the server, method is the method, POST is where we send data to the server */}
        <input type="text" placeholder="product name" name="name"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterProduct;
