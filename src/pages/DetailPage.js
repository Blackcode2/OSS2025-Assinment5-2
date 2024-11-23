import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./PageStyles.css";

const DetailPage = () => {
  const location = useLocation(); // Get location to access state
  const navigate = useNavigate();

  // Access the product from location.state
  const product = location.state?.product;

  if (!product) {
    navigate("/");
    return null;
  }

  return (
    <div className="page-container">
      <h1>Product Details</h1>
      <table className="table">
        <tbody>
          <tr>
            <th>ID</th>
            <td>{product.id || "N/A"}</td>
          </tr>
          <tr>
            <th>Category</th>
            <td>{product.category || "N/A"}</td>
          </tr>
          <tr>
            <th>Product Name</th>
            <td>{product.product || "N/A"}</td>
          </tr>
          <tr>
            <th>Price</th>
            <td>{product.price ? `$${product.price}` : "N/A"}</td>
          </tr>
          <tr>
            <th>Quantity</th>
            <td>{product.quantity || "N/A"}</td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-secondary" onClick={() => navigate("/")}>
        Back to List
      </button>
    </div>
  );
};

export default DetailPage;
