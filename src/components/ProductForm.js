import React from "react";
import "./ProductForm.css";

const ProductForm = ({
  formData,
  handleInputChange,
  handleSubmit,
  refs,
  isEditing,
}) => {
  const { categoryRef, productRef, priceRef, quantityRef } = refs;

  return (
    <div>
      <div className="formWrapper">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          ref={categoryRef}
          className="form-select"
        >
          <option value="Open this select menu">Open this select menu</option>
          <option value="Food">Food</option>
          <option value="Electronics">Electronics</option>
          <option value="Cloth">Cloth</option>
          <option value="Book">Book</option>
        </select>
      </div>
      <div className="formWrapper">
        <label htmlFor="product" className="form-label">
          Product
        </label>
        <input
          type="text"
          name="product"
          value={formData.product}
          onChange={handleInputChange}
          ref={productRef}
          placeholder="Product"
          className="form-control"
        />
      </div>
      <div className="formWrapper">
        <label htmlFor="price" className="form-label">
          Price
        </label>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          ref={priceRef}
          placeholder="Price"
          className="form-control"
        />
      </div>
      <div className="formWrapper">
        <label htmlFor="quantity" className="form-label">
          Quantity
        </label>
        <input
          type="text"
          name="quantity"
          value={formData.quantity}
          onChange={handleInputChange}
          ref={quantityRef}
          placeholder="Quantity"
          className="form-control"
        />
      </div>
      {!isEditing && (
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Save
        </button>
      )}
    </div>
  );
};

export default ProductForm;
