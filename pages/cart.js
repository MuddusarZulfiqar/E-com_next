import React, { useState, useEffect } from "react";

function cart() {
  const [cartItems, setCartItems] = useState([]);
  const GetCartItems = async () => {
    const res = await fetch(`http://localhost:8000/cart`);
    const result = await res.json();
    setCartItems(result);
  };
  useEffect(() => {
    GetCartItems();
  }, []);
  return (
    <div>
      <div className="container">
        {cartItems &&
          cartItems.map((CartItem, index) => (
            <h4 key={index}>{CartItem.title}</h4>
          ))}
      </div>
    </div>
  );
}

export default cart;
