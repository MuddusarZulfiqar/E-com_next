import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import AsideBar from "@/components/collection/AsideBar";
import style from "@/components/collection/allCollection.module.scss";
import Fetch from "@/helper/fetch";
import Image from "next/image";
import Link from "next/link";
import cartDatas from "@/components/cartData";
function index() {
  const router = useRouter();
  const { collectionName } = router.query;
  const { cartData, updateData } = useContext(cartDatas);
  const [collectionProducts, setCollectionProducts] = useState([]);
  const [minPrice, setminPrice] = useState(0);
  const [maxPrice, setmaxPrice] = useState(0);
  const GetMinMax = (data) => {
    const minVal = data.reduce((prev, curr) =>
      prev.price < curr.price ? prev : curr
    );
    const maxVal = data.reduce((prev, curr) =>
      prev.price > curr.price ? prev : curr
    );
    setminPrice(minVal.price);
    setmaxPrice(maxVal.price);
  };
  const GetPriceProducts = async (min, max) => {
    const res = await fetch(
      `http://localhost:8000/product?category=${collectionName}&price_gte=${min}&price_lte=${max}`
    );
    const data = await res.json();
    setCollectionProducts(data);
  };
  const GetProducts = async () => {
    const res = await fetch(
      `http://localhost:8000/product?category=${collectionName}`
    );
    const data = await res.json();

    return data;
  };
  useEffect(() => {
    GetProducts()
      .then((data) => {
        setCollectionProducts(data);
        return data;
      })
      .then((data) => {
        if (data.length > 0) {
          GetMinMax(data);
        }
      });
  }, [collectionName, updateData]);
  return (
    <div className={style.collectionContainer}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <AsideBar
              priceFunc={GetPriceProducts}
              filterPrice={{ min: minPrice, max: maxPrice }}
            />
          </div>
          <div className="col-md-8">
            {collectionProducts.map((data) => (
              <>
                <div className="CollectionProduct mb-3 d-flex">
                  <div
                    className="CollectionProduct__image mr-3"
                    style={{ flex: "0 0 290px" }}
                  >
                    <Image
                      src={data.image}
                      width={290}
                      height={390}
                      objectFit="contain"
                    />
                  </div>
                  <div className="CollectionProduct__detail mb-2">
                    <Link href={`/product/${data.id}`}>
                      <a>
                        <h4>{data.title}</h4>
                      </a>
                    </Link>
                    <span className="mb-2 d-block">
                      <i>
                        <b className="text-theme" style={{ fontSize: "20px" }}>
                          $ {data.price}
                        </b>
                      </i>
                    </span>
                    <p className="mb-2 d-block" style={{ fontSize: "15px" }}>
                      {data.description}
                    </p>
                    <button
                      onClick={() => {
                        Fetch(data, 1, updateData);
                      }}
                      className="btn btn-theme"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
                <hr />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default index;
