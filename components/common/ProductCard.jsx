import React, { useContext } from "react";
import Fetch from "@/helper/fetch";
import cartDatas from "@/components/cartData";
import Link from "next/link";
import { useRouter } from "next/router";
function ProductCard({ product }) {
  const router = useRouter();
  const { cartData, updateData } = useContext(cartDatas);
  const { image, title, discount, price, id } = product;
  const formatNumber = (inputNumber) => {
    let formetedNumber = Number(inputNumber)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,");
    let splitArray = formetedNumber.split(".");
    if (splitArray.length > 1) {
      formetedNumber = splitArray[0];
    }
    return formetedNumber;
  };
  return (
    <div className="productCard mt-3">
      <div className="productCard__image">
        <img src={image} />
      </div>
      {discount && <span className="productCard__label">{discount}</span>}

      <div className="productCard__detail d-relative">
        <span className="productCard__detail--title">{title}</span>
        <span className="productCard__detail--price">
          {formatNumber(price)}$
        </span>
        <Link href={`/product/${product.id}`}>
          <a className="abs-link"></a>
        </Link>
      </div>
      <button
        className="btn btn-theme productCard__cart"
        onClick={() => {
          Fetch(product, 1, updateData);
        }}
      >
        <i className="fa fa-shopping-cart"></i> add to cart
      </button>
      <div className="productCard__icons">
        <a href="#" className="productCard__icons--icon">
          <i className="fa fa-heart-o" aria-hidden="true"></i>
        </a>
        <a href={image} target="_blank" className="productCard__icons--icon">
          <i className="fa fa-search" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
