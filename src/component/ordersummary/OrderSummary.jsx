import React from "react";
import { useNavigate } from "react-router-dom";
import "./OrderSummary.css";

export const OrderSummary = () => {
  const Navigate = useNavigate();

  return (
    <div className="summary">
      <div className="content section container">
        <h1 className="summary__text"> order confirmed</h1>
        <p className="text"> thank you for shopping ..!</p>
        <button className="summary__btn" onClick={() => Navigate("/cart")}>
          back to cart
        </button>
      </div>
    </div>
  );
};
