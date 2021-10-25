import React from "react";
import style from "./saleAdd.module.scss";
function SaleAdd() {
  return (
    <div className={style.saleAdd}>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-6 text-center">
            <h3>Sale up to</h3>
          </div>
          <div className="col-md-6 text-center">
            <h3>30% off</h3>
          </div>
        </div>
        <div className={style.saleAdd__center}>
          <div className={style.saleAdd__center__inner}>
            <span>today only</span>
            <h4 className="text-theme">free</h4>
            <i>shipping</i>
            <span>on all order</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaleAdd;
