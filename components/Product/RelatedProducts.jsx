import React, { useEffect } from "react";
import Carousel from "@/components/common/baseCarousel";
import ProductCard from "../common/ProductCard";
function RelatedProducts({ ProductCategory, productId }) {
  const [related, setReleted] = React.useState([]);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const fetchData = async () => {
    const response = await fetch(
      `http://localhost:8000/product/?category=${ProductCategory}`
    );
    const data = await response.json();
    setReleted(data);
  };
  useEffect(() => {
    fetchData();
    console.log(related);
  }, []);

  return (
    <div className="relatedProducts">
      <h3 className="text-center">Related Product</h3>
      <Carousel settings={settings}>
        {related
          .filter((products) => products.id !== productId)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Carousel>
    </div>
  );
}

export default RelatedProducts;
