import React from "react";
import style from "./subscribe.module.scss";
function Subscribe() {
  return (
    <div className={style.subscribe}>
      <div className="container">
        <div className={style.inner}>
          <div className={style.title}>
            <h4>Subscribe email</h4>
            <span>Get the latest news & updates from Canifa</span>
          </div>
          <form className="d-flex">
            <div className="form-group m-0">
              <input type="text" className="form-control h-100" required />
              <label className="control-label" style={{ top: "23px" }}>
                Your Subscribe
              </label>
            </div>
            <input
              type="submit"
              value="Subscribe"
              className="btn btn-border-theme text-black mx-2"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
