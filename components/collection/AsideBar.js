import React, { useState, useEffect, useContext, useRef } from "react";
import { Scrollbar } from "smooth-scrollbar-react";
import style from "./collection.module.scss";
import Image from "next/image";
import Fetch from "@/helper/fetch";
import Link from "next/link";
import cartDatas from "@/components/cartData";
import Slider, { Range, SliderTooltip } from "rc-slider";
import "rc-slider/assets/index.css";
const handle = (props) => {
  const { createSliderWithTooltip } = Slider;
  const Range = createSliderWithTooltip(Slider.Range);
  const { Handle } = Slider;
  const { value, dragging, index, ...restProps } = props;
  console.log(props);
  return (
    <SliderTooltip
      prefixCls="rc-slider-tooltip"
      overlay={`${value} $`}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </SliderTooltip>
  );
};
function AsideBar({ priceFunc, filterPrice }) {
  const { updateData } = useContext(cartDatas);
  const [cart, setCart] = useState([]);
  const [slideVal, setSlideVal] = useState([0, 0]);
  const CartSet = async () => {
    const res = await fetch(`http://localhost:8000/cart`);
    const data = await res.json();
    setCart(data);
  };

  useEffect(() => {
    CartSet();
  }, [updateData, cart]);
  return (
    <div className={style.aside}>
      <div className={style.cart}>
        <h3>Cart</h3>
        <div className={style.cart__inner}>
          {cart.length >= 1 ? (
            <div
              className="sample-container customScroll"
              style={{ maxHeight: 385 }}
            >
              <div className="scroll-innerContent">
                {cart.map((carrItem) => (
                  <div className={style.collectionCard} key={carrItem.id}>
                    <div className={style.collectionCard__image}>
                      <Image
                        alt={carrItem.title}
                        src={carrItem.image}
                        width={90}
                        height={120}
                        objectFit="contain"
                      />
                    </div>
                    <div className={style.collection__detail}>
                      <Link href={`/product/${carrItem.id}`}>
                        <a>
                          <h4 title={carrItem.title}>{carrItem.title}</h4>
                        </a>
                      </Link>
                      <span>
                        {carrItem.quantity} x {carrItem.price}$
                      </span>
                    </div>
                    <button
                      onClick={() => Fetch(carrItem, 0, updateData)}
                      className={style.collectionCard__delete}
                    >
                      <i className="fa fa-times"></i>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <h5>Cart is empity</h5>
          )}
          <div className={style.innerButton}>
            <Link href="/cart">
              <a className="btn btn-border-gray">view cart</a>
            </Link>
            <button className="btn btn-theme">Checkout</button>
          </div>
        </div>
      </div>
      <div>
        <h3>Filter by price</h3>
        {filterPrice.min != 0 || filterPrice.max != 0 ? (
          <>
            <Range
              min={filterPrice.min}
              max={filterPrice.max}
              defaultValue={slideVal}
              allowCross={false}
              onAfterChange={(val) => {
                setSlideVal(val);
                priceFunc(val[0], val[1]);
              }}
              handle={handle}
            />
            <br />
            <span>
              <b>Price: {`$ ${slideVal[0]} - $ ${slideVal[1]}`}</b>
            </span>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default AsideBar;
