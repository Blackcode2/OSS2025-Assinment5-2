import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";

const CreatePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    category: "Open this select menu",
    product: "",
    price: "",
    quantity: "",
  });

  const categoryRef = useRef();
  const productRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();

  const validateInputs = () => {
    const { category, product, price, quantity } = formData;

    if (category === "Open this select menu") {
      categoryRef.current.focus();
      alert("Please select a valid category.");
      return false;
    }
    if (!product) {
      productRef.current.focus();
      alert("Product name cannot be empty.");
      return false;
    }
    if (!/^\d+(\.\d{1,2})?$/.test(price) || parseFloat(price) <= 0) {
      priceRef.current.focus();
      alert("Price must be a positive number with up to 2 decimal places.");
      return false;
    }
    if (!/^\d+$/.test(quantity) || parseInt(quantity) <= 0) {
      quantityRef.current.focus();
      alert("Quantity must be a positive integer.");
      return false;
    }
    return true;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!validateInputs()) return;

    const url = "https://672887f6270bd0b97555fbea.mockapi.io/proudct";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Product updated successfully!");
        navigate("/");
      } else {
        alert("Failed to create product. Please try again.");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div>
      <ProductForm
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        refs={{ categoryRef, productRef, priceRef, quantityRef }}
        isEditing={false}
      />
    </div>
  );
};

export default CreatePage;
