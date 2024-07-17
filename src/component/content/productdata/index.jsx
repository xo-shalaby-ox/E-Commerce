import React, { useState } from "react";
import { useShopContext } from "../../context/Context";
import { NavLink } from "react-router-dom";

export const ProductData = (props) => {
  const [toggle, setToggle] = useState(false);
  const { id, title, image, productName, price } = props.product;
  const { cartItem, addToCart, removeFromCart, updateTotalCount } =
    useShopContext();

  const cartItemAmount = cartItem[id];
  return (
    <div key={id} className="content__data">
      <div className="prod__title-desc">
        <h1 className="title">{title}</h1>
        <div
          className={
            toggle ? "pro__heart-icone active__icon" : "pro__heart-icone"
          }
        >
          <i className="bx bxs-heart" onClick={() => setToggle(!toggle)}></i>
        </div>
      </div>
      <div className="prod__pic">
        <img className="image" src={image} alt="pic" />
      </div>
      <div className="prod__data">
        <h2 className="prod__name">{productName}</h2>
        <div className="prod__rate">
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
        </div>
        <span className="prod__price">{price}$</span>
      </div>
      <NavLink to={`/products/${id}`}>
        <div className="prod__show-more">
          <span>Show Details </span>
          <i className="bx bx-right-arrow-alt icone"></i>
        </div>
      </NavLink>
      <div className="prod__btn">
        <button
          className="prod__inc"
          onClick={() => {
            addToCart(id);
            updateTotalCount((prev) => prev + 1);
          }}
        >
          <i className="bx bx-plus"></i>
        </button>
        <span className="prod__count">{cartItemAmount}</span>
        {cartItemAmount > 0 && (
          <button
            className="prod__dec"
            onClick={() => {
              removeFromCart(id);
              updateTotalCount((prev) => prev - 1);
            }}
          >
            <i className="bx bx-minus"></i>
          </button>
        )}
      </div>
    </div>
  );
};
