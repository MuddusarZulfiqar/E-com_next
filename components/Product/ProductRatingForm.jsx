import React, { useState } from "react";
import Rating from "react-rating";
function ProductRatingForm({ reviewGet }) {
  const [formData, SetformData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [star, setStar] = useState(0);
  const SubmitHandler = (e) => {
    e.preventDefault();
    reviewGet({
      ...formData,
      id: new Date().getTime(),
      rate: star,
      time: new Date().toString().split(" ").splice(1, 3).join(" "),
    });
    SetformData({ name: "", email: "", message: "" });
    setStar(0);
  };
  const inputChange = (e) => {
    const { name, value } = e.target;
    SetformData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <div className="formRating">
      <h4>Add Your Rating</h4>
      <form onSubmit={(e) => SubmitHandler(e)}>
        <label>your rating:</label>
        <Rating
          initialRating={star}
          emptySymbol="fa fa-star-o fa-2x"
          fullSymbol="fa fa-star-o fa-2x active"
          onChange={(rate) => setStar(rate)}
          fractions={2}
        />
        <div className="form-row mt-2">
          <div className="col">
            <div className="form-group">
              <input
                value={formData.name}
                name="name"
                type="text"
                className="form-control"
                onChange={inputChange}
                required
              />
              <label className="control-label">Name</label>
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <input
                value={formData.email}
                name="email"
                type="text"
                className="form-control"
                onChange={inputChange}
                required
              />
              <label className="control-label">Email</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <textarea
            name="message"
            value={formData.message}
            className="form-control"
            onChange={inputChange}
            required
          />
          <label className="control-label">Your Review</label>
        </div>
        <button type="submit" className="btn btn-theme">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ProductRatingForm;
