import React from "react";
import * as Bootstrap from "react-bootstrap";
import ReviewCard from "./ReviewCard";
import ProductRatingForm from "@/components/Product/ProductRatingForm";
function ProductDesc({ product, reviewGet }) {
  const { description, reviews, title } = product;
  // const reverseReview = [...reviews.reverse()];
  return (
    <div className="productPage__tabs">
      <Bootstrap.Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className=""
      >
        <Bootstrap.Tab eventKey="home" title="description">
          <p>{description}</p>
        </Bootstrap.Tab>
        <Bootstrap.Tab eventKey="profile" title={`reviews(${reviews.length})`}>
          <div className="reviews">
            <h4>
              There are <span>{reviews.length} reviews</span> for “{title}”
            </h4>
            {reviews &&
              reviews
                .slice(0)
                .reverse()
                .map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
            <ProductRatingForm reviewGet={reviewGet} />
          </div>
        </Bootstrap.Tab>
      </Bootstrap.Tabs>
    </div>
  );
}

export default ProductDesc;
