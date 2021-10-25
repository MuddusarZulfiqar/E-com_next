import React, { useState, useEffect, useMemo } from "react";

function ProductViews({ views }) {
  const [view, setView] = useState(1);
  useMemo(() => {
    const interval = setInterval(
      () => setView(Math.floor(Math.random() * 50 + 1)),
      10000
    );
    return () => {
      clearInterval(interval);
    };
  }, [view]);
  return (
    <div className="productPage__detail--view d-flex align-items-center">
      <span className="label fa fa-eye"></span>
      {<i className="d-inline-block counter">{views}</i>}
    </div>
  );
}

export default ProductViews;
