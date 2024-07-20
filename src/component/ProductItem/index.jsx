import React from "react";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div key={product.id} className="slide__content">
      <div className="slide__description">
        <h1>{product.productName}</h1>
        <span>{product.title}</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. quis eos?
        </p>
        <button className="slide__btn" onClick={() => navigate("/about")}>
          view printed work
        </button>
      </div>
      <div className="slide__img">
        <img src={product.image} alt="pic" />
      </div>
    </div>
  );
};

export default ProductItem;
