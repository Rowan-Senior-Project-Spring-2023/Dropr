
const RegisterProduct = () => {
  return (
    <div>
      <div>
        <h1>Register a product</h1>
        <form>
          <label htmlFor="product-name"><b>Product Name*</b></label>
          <input type="text" id="product-name" name="product-name" required/><br/>

          <label htmlFor="product-desc"><b>Product Description*</b></label>
          <textarea id="product-desc" name="product-desc" required></textarea><br/>

          <label htmlFor="start-quantity"><b>Start Quantity*</b></label>
          <input type="number" id="start-quantity" name="start-quantity" required/><br/>

          <label htmlFor="limit-per-person"><b>Limit Per Person*</b></label>
          <input type="number" id="limit-per-person" name="limit-per-person"/><br/>

          <label htmlFor="is-featured"><b>Featured?</b></label>
          <div>
          <input type="checkbox" id="is-featured" name="is-featured"/><br/>
          </div>

          <input type="submit" value="Submit"/>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default RegisterProduct;
