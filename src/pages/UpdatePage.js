import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import "./PageStyles.css";

const UpdatePage = () => {
  const { state: product } = useLocation();
  const [formData, setFormData] = useState(product);
  const [changeCount, setChangeCount] = useState(0);

  // Refs for input fields
  const categoryRef = useRef();
  const productRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();

  const validateInputs = () => {
    const { category, product, price, quantity } = formData;

    if (category === "Open this select menu") {
      categoryRef.current.focus();
      return false;
    }
    if (!product.trim()) {
      productRef.current.focus();
      return false;
    }
    if (!/^\d+(\.\d{1,2})?$/.test(price) || parseFloat(price) <= 0) {
      priceRef.current.focus();
      return false;
    }
    if (!/^\d+$/.test(quantity) || parseInt(quantity) <= 0) {
      quantityRef.current.focus();
      return false;
    }
    return true;
  };

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };

    setFormData(updatedData);
    setChangeCount((prev) => prev + 1);

    if (!validateInputs()) {
      console.log(`Validation failed for ${name}.`);
      return; // Prevent API call if validation fails
    }

    const url = `https://672887f6270bd0b97555fbea.mockapi.io/proudct/${formData.id}`;
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        console.log(`Field '${name}' updated successfully.`);
      } else {
        console.log(`Failed to update field '${name}'.`);
      }
    } catch (error) {
      console.error(`Error updating field '${name}':`, error);
    }
  };

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
