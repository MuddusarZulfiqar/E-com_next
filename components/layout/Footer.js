import React from "react";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__upper">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h4 className="footer__upper--title">Contact us</h4>
              <ul className="footer__upper--list">
                <li>
                  <a href="">Canifa Shop</a>
                </li>
                <li>
                  <span>54/29 West 21st Street, New York, USA</span>
                </li>
                <li>
                  <a href="">https://canifa.com</a>
                </li>
                <li>
                  <a href="">
                    <b>Tell: </b>+92-348-6615073
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4 className="footer__upper--title">Qucik link</h4>
              <ul className="footer__upper--list">
                <li>
                  <a href="">My account</a>
                </li>
                <li>
                  <span>Wishlist</span>
                </li>
                <li>
                  <a href="">Order tracking </a>
                </li>
                <li>
                  <a href="">Shipping info</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4 className="footer__upper--title">Customer care</h4>
              <ul className="footer__upper--list">
                <li>
                  <a href="">Customer service</a>
                </li>
                <li>
                  <span>Track my order</span>
                </li>
                <li>
                  <a href="">Shipping & delivery</a>
                </li>
                <li>
                  <a href="">Contact us</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4 className="footer__upper--title">Order tracking</h4>
              <ul className="footer__upper--list">
                <li>
                  <a href="">Help</a>
                </li>
                <li>
                  <span>Gift Cards</span>
                </li>
                <li>
                  <a href="">Order Status</a>
                </li>
                <li>
                  <a href="">Free Shipping</a>
                </li>
                <li>
                  <a href="">Returns & Exchanges</a>
                </li>
                <li>
                  <a href="">International</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__upper--social">
            <ul>
              <li>
                <a href="">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-google-plus"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__lower">
        <div className="container">
          <p>
            © 2020 Canifa. Design with <i className="fa fa-heart"></i> by
            Parasyteartx
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
