import React, { useState, useEffect, useContext, useMemo } from "react";
import { useRouter } from "next/router";
import Fetch from "@/helper/fetch";
import cartDatas from "@/components/cartData";
import ReactImageMagnify from "react-image-magnify";
import Rating from "react-rating";
import ProductDesc from "@/components/Product/ProductDesc";
import ProductViews from "@/components/Product/ProductViews";
import RelatedProducts from "@/components/Product/RelatedProducts";
function Product() {
  const { updateData } = useContext(cartDatas);
  const router = useRouter();
  const { productId } = router.query;
  const [product, setProduct] = useState({});
  const [inputNumber, setInputNumber] = useState(1);
  const [review, setReview] = useState({});
  const fetchData = async () => {
    const response = await fetch(`http://localhost:8000/product/${productId}`);
    const data = await response.json();
    setProduct(data);
  };
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
  const getReview = async (e) => {
    const allDetil = { ...product, reviews: [...product.reviews, e] };
    if (review) {
      const response = await fetch(
        `http://localhost:8000/product/${productId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(allDetil),
        }
      );
      const data = await response.json();
      if (response.status === 200 || response.status === 201) {
        setReview(e);
      } else {
      }
    }
  };
  useEffect(() => {
    fetchData();
    return () => {
      setProduct({});
    };
  }, [review, productId]);
  return (
    <div className="productPage">
      {productId && (
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="productPage__image">
                {product.image && (
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        src: product.image,
                        alt: product.title,
                        isFluidWidth: true,
                      },
                      largeImage: {
                        src: product.image,
                        width: 1000,
                        height: 1500,
                      },
                    }}
                  />
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="productPage__detail">
                <h4 className="productPage__detail--title">{product.title}</h4>
                <div className="productPage__detail--star">
                  {product.rating && (
                    <Rating
                      initialRating={product.rating.rate}
                      emptySymbol="fa fa-star-o fa-2x"
                      fullSymbol="fa fa-star-o active fa-2x"
                      readonly
                    />
                  )}
                </div>
                <span className="productPage__detail--price">
                  {formatNumber(product.price)}$
                </span>
                <p className="productPage__detail--desc">
                  {product.description}
                </p>
                {product.rating && (
                  <ProductViews views={product.rating.count} />
                )}
                <div className="productPage__detail--quantity">
                  <span className="label">Quantity:</span>
                  <input
                    value={inputNumber}
                    min="1"
                    onChange={(e) => {
                      setInputNumber(e.target.value);
                    }}
                    type="number"
                    className="form-control"
                    required
                  ></input>
                  <button
                    onClick={() => {
                      Fetch(product, inputNumber, updateData);
                      setInputNumber(1);
                    }}
                    className="btn btn-theme"
                  >
                    add to cart
                  </button>
                  <a href="#">
                    <i className="fa fa-heart"></i>
                  </a>
                </div>
                <div className="productPage__detail--category d-flex align-items-center">
                  <span className="label">category:</span>
                  <i>{product.category}</i>
                </div>
              </div>
            </div>
          </div>
          {product.rating && (
            <ProductDesc product={product} reviewGet={getReview} />
          )}
          {product.category && (
            <RelatedProducts
              ProductCategory={product.category}
              productId={product.id}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Product;
