import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import "./PageStyles.css";

const UpdatePage = () => {
  const { state: product } = useLocation();
  const [formData, setFormData] = useState(product);
  const [changeCount, setChangeCount] = useState(0);
  //console.log(product);

  const categoryRef = useRef();
  const productRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };

    setFormData(updatedData);
    setChangeCount((prev) => prev + 1);

    const url = `https://672887f6270bd0b97555fbea.mockapi.io/proudct/${product.id}`;
    try {
      await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [name]: value }),
      });
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  //   const validateInputs = () => {
  //     const { category, product, price, quantity } = formData;

  //     if (category === "Open this select menu") {
  //       categoryRef.current.focus();
  //       alert("Please select a valid category.");
  //       return false;
  //     }
  //     if (!product) {
  //       productRef.current.focus();
  //       alert("Product name cannot be empty.");
  //       return false;
  //     }
  //     if (!/^\d+(\.\d{1,2})?$/.test(price) || parseFloat(price) <= 0) {
  //       priceRef.current.focus();
  //       alert("Price must be a positive number with up to 2 decimal places.");
  //       return false;
  //     }
  //     if (!/^\d+$/.test(quantity) || parseInt(quantity) <= 0) {
  //       quantityRef.current.focus();
  //       alert("Quantity must be a positive integer.");
  //       return false;
  //     }
  //     return true;
  //   };

  return (
    <div className="page-container">
      <ProductForm
        formData={formData}
        handleInputChange={handleInputChange}
        refs={{ categoryRef, productRef, priceRef, quantityRef }}
        isEditing={true}
      />
      <p>Total changes made: {changeCount}</p>
    </div>
  );
};

export default UpdatePage;
