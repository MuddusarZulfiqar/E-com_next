import React from "react";
import style from "./shippingCard.module.scss";
function ShippingCard() {
  return (
    <div className={style.shippingCard}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className={style.innerCard}>
              <div className={style.innerCard__upper}>
                <i className="fa fa-star"></i>
              </div>
              <div className={style.innerCard__lower}>
                <div className={style.innerCard__lower__details}>
                  <span>Weekly</span>
                  <h3>Promotions</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={style.innerCard}>
              <div className={style.innerCard__upper}>
                <i className="fa fa-long-arrow-right"></i>
              </div>
              <div className={style.innerCard__lower__details}>
                <span>Worldwide</span>
                <h3>Free Shipping</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={style.innerCard}>
              <div className={style.innerCard__upper}>
                <i className="fa fa-repeat"></i>
              </div>
              <div className={style.innerCard__lower__details}>
                <span>In 30 days </span>
                <h3>Free Returns</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippingCard;
