import React, { useState } from "react";
import BannerSlider from "@/components/Home/BannerSlider";
import ShippingCard from "@/components/Home/ShippingCard";
import style from "@/components/Home/home.module.scss";
import ShopLook from "@/components/Home/ShopLook";
import SaleAdd from "@/components/Home/SaleAdd";
import Blog from "@/components/Home/Blog";
import Subscribe from "@/components/Home/Subscribe";

export default function Home({ data }) {
  // console.log(data);
  var result = data.reduce(
    function (r, item) {
      var current = r.hash[item.category];

      if (!current) {
        current = r.hash[item.category] = {
          category: item.category,
          data: [],
        };

        r.arr.push(current);
      }

      current.data.push({
        id: item.id,
        content: item,
      });

      return r;
    },
    { hash: {}, arr: [] }
  ).arr;
  return (
    <div className={style.home}>
      <BannerSlider />
      <ShippingCard />
      <div className={style.allShops}>
        <div className={style.detail}>
          <h3>Shop this look</h3>
          <span>This is tailoring</span>
          <img src="/assets/home/downArrow.png" className="img-fluid" />
        </div>
        {result &&
          result
            .slice(0, 3)
            .map((item, index) => (
              <ShopLook
                key={index}
                slideList={item.data}
                layout={index % 2 == 0 ? "right" : "left"}
                border={true}
                catTitle={item.category}
              />
            ))}
      </div>
      <SaleAdd />
      <div className={style.detail}>
        <h3>Our blogs</h3>
        <span>News about Fashion trendsg</span>
        <img src="/assets/home/downArrow.png" className="img-fluid" />
      </div>
      <Blog />
      <Subscribe />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:8000/product`);
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
