import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import cartContext from "@/components/cartData";
function Header() {
  const { cartData } = useContext(cartContext);
  const [openSide, isOpenSide] = useState(false);
  return (
    <div className={`main-header ${openSide ? "active_menu" : ""}`}>
      <aside>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/">
          <a>Shop</a>
        </Link>
        <Link href="/">
          <a>Product</a>
        </Link>
        <Link href="/">
          <a>Blog</a>
        </Link>
        <Link href="/page">
          <a>Page</a>
        </Link>
        <Link href="/">
          <a>Category</a>
        </Link>
      </aside>
      <header
        style={{
          boxShadow: "0 0 10px 0px rgb(0,0,0, 0.2)",
          backgroundColor: "#fff",
          zIndex: 100,
        }}
      >
        <div className="container-fluid">
          <div className="header">
            <div className="header__left">
              <span className="icon-bar" onClick={() => isOpenSide(!openSide)}>
                {openSide ? (
                  <i className="fa fa-times" aria-hidden="true"></i>
                ) : (
                  <i className="fa fa-bars" aria-hidden="true"></i>
                )}
              </span>
              <Link href="/user">
                <a className="icon-user">
                  <i className="fa fa-user" aria-hidden="true"></i>
                </a>
              </Link>
            </div>
            <div className="header__center">
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/">
                <a>Shop</a>
              </Link>
              <Link href="/product/all">
                <a>Product</a>
              </Link>
              <Link href="/">
                <a>
                  <img src="./assets/logo.png" className="img-fluid" />
                </a>
              </Link>
              <Link href="/">
                <a>Blog</a>
              </Link>
              <Link href="/page">
                <a>Page</a>
              </Link>
              <Link href="/collection/all">
                <a>Category</a>
              </Link>
            </div>
            <div className="header__right">
              <Link href="/cart">
                <a className="icon-cart">
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                  <span>{cartData.length}</span>
                </a>
              </Link>
              <Link href="/user">
                <a className="icon-search">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
