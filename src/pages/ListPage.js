import React, { useEffect, useState } from "react";
import ProductTable from "../components/ProductTable";
import { useNavigate } from "react-router-dom";

const ListPage = () => {
  const [products, setProducts] = useState([]);
  const url = "https://672887f6270bd0b97555fbea.mockapi.io/proudct";
  const navigate = useNavigate();

  const loadProducts = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error loading products:", error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleEditProduct = (product) => {
    navigate("/update", { state: product });
  };

  const handleDeleteProduct = async (id) => {
    try {
      await fetch(`${url}/${id}`, { method: "DELETE" });
      loadProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleDetailProduct = (product) => {
    navigate("/detail", { state: { product } }); // Wrap product in an object to avoid conflicts
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={() => navigate("/create")}>
        Add Product
      </button>
      <ProductTable
        products={products}
        handleEditProduct={handleEditProduct}
        handleDeleteProduct={handleDeleteProduct}
        handleDetailProduct={handleDetailProduct}
      />
    </div>
  );
};

export default ListPage;
