import React from "react";
import style from "./shopLook.module.scss";
import Image from "next/image";
import Carousel from "@/components/common/baseCarousel";
import ProductCard from "../common/ProductCard";
import Link from "next/link";
function ShopLook({ layout, slideList, catTitle }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div
      className={`${style.shopeLook} ${
        layout == "left" ? style.layoutLeft : style.layoutRight
      } layoutDisplay`}
    >
      <div className="container-fluid">
        <div className={style.shopeLook__container}>
          <div className={style.shopeLook__container__collection}>
            <Image
              src={`https://source.unsplash.com/${catTitle}`}
              alt="Collection"
              width="100%"
              height="100%"
              layout="fill"
              objectFit="contain"
            />
            <h3 className={style.shopeLook__container__title}>{catTitle}</h3>
            <Link href={`/collection/${catTitle}`}>
              <a className="abs-link"></a>
            </Link>
          </div>
          <div className={style.shopeLook__container__list}>
            <Carousel settings={settings}>
              {slideList.map((product) => (
                <ProductCard key={product.id} product={product.content} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopLook;
