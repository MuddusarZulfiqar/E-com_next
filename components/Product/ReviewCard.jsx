import React from "react";
import Image from "next/image";
import Rating from "react-rating";
function ReviewCard({ review }) {
  const { name, time, message, rate } = review;
  return (
    <>
      <div className="productPage__tabs--review">
        <div className="productPage__tabs--review-avator">
          <Image src="/assets/product/avator.png" width={67} height={67} />
        </div>
        <div className="productPage__tabs--review-detail">
          <div className="header">
            <div className="header__title">
              <h5>{name}</h5>
              <span>{time}</span>
            </div>
            <div className="header__review">
              <Rating
                initialRating={rate}
                emptySymbol="fa fa-star-o"
                fullSymbol="fa fa-star-o active"
                readonly
              />
            </div>
          </div>
          <div className="details">
            <p>{message}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewCard;
