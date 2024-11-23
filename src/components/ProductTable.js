import React from "react";
import "./ProductTable.css";

const ProductTable = ({
  products,
  handleEditProduct,
  handleDeleteProduct,
  handleDetailProduct,
}) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>No.</th>
          <th>Category</th>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={product.id}>
            <td>{index + 1}</td>
            <td>{product.category}</td>
            <td>{product.product}</td>
            <td>${product.price}</td>
            <td>{product.quantity}</td>
            <td>
              <button
                className="btn btn-warning btn-sm"
                onClick={() => handleEditProduct(product)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDeleteProduct(product.id)}
              >
                Delete
              </button>
              <button
                className="btn btn-info btn-sm"
                onClick={() => handleDetailProduct(product)}
              >
                More
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
