import React from "react";
import { useShopContext } from "../../component/context/Context";

export const CartItem = (props) => {
  const { id, image, productName, price } = props.data;
  const {
    cartItem,
    addToCart,
    removeFromCart,
    updateCartItem,
    updateTotalCount,
  } = useShopContext();

  return (
    <div className="product">
      <div className="cart__item">
        <div className="cart__item-prod">
          <div className="cart__item-image">
            <img src={image} alt="pic" />
          </div>
          <div className="cart__item-title">
            <h1 className="cart__item-name">{productName} ..</h1>
            <span className="cart__item-price">price : {price} $</span>
          </div>
        </div>
        <div className="cart__item-btn">
          <button
            className="cart__btn-inc"
            onClick={() => {
              addToCart(id);
              updateTotalCount((prev) => prev + 1);
            }}
          >
            <i className="bx bx-plus"></i>
          </button>
          <input
            type="text"
            value={cartItem[id]}
            onChange={(e) => updateCartItem(Number(e.target.value), id)}
          />
          <button
            className="cart__btn-dec"
            onClick={() => {
              removeFromCart(id);
              updateTotalCount((prev) => prev - 1);
            }}
          >
            <i className="bx bx-minus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
