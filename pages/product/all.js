import ProductCard from "@/components/common/ProductCard";
import React, { useState, useEffect } from "react";
import Link from "next/Link";
function all() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [TotalPages, setTotalPages] = useState(1);
  const [ProductList, setProductList] = useState(5);
  const FetchAll = async () => {
    const response = await fetch(`http://localhost:8000/product`);
    const data = await response.json();
    setAllProducts(data);
  };
  const fetchProducts = async (page, listProduct) => {
    const response = await fetch(
      `http://localhost:8000/product?_page=${page}&_limit=${listProduct}`
    );
    const data = await response.json();
    setProducts(data);
  };
  useEffect(() => {
    // fetchProducts(TotalPages, ProductList);
    FetchAll();
  }, []);
  return (
    <div className="mt-5">
      <div className="container">
        <h4 className="mt-5">
          Show Products {allProducts.length} out of {allProducts.length}
        </h4>
        <div className="row">
          {allProducts &&
            allProducts.map((item, index) => (
              <div key={index} className="col-md-4 mb-3">
                <ProductCard product={item} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default all;
