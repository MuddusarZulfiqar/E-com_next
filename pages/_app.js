import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/index.scss";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import Head from "next/head";
import CartContext from "@/components/cartData";
function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);
  const getProductCart = async () => {
    const res = await fetch(`http://localhost:8000/cart`);
    const data = await res.json();
    setCart(data);
  };
  useEffect(() => {
    getProductCart();
  }, []);
  if (Component.getLayout) {
    return Component.getLayout(
      <CartContext.Provider value={{ cartData: cart }}>
        <Component {...pageProps} />
      </CartContext.Provider>
    );
  }
  return (
    <>
      <CartContext.Provider
        value={{ cartData: cart, updateData: getProductCart }}
      >
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          />
        </Head>
        <Header />
        <div className="content-wrapper">
          <Component {...pageProps} />
        </div>
        <Footer />
      </CartContext.Provider>
    </>
  );
}

export default MyApp;
