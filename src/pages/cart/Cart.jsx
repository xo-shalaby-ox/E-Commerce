import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useShopContext } from "../../component/context/Context";
import { CartItem } from "./CartItem";
import { HomeProducts } from "../../HomeProducts";
import "./Cart.css";

export const Cart = () => {
  const [toggle, setToggle] = useState(false);
  const { cartItem, getTotalCartAmount } = useShopContext();
  const cartProducts = HomeProducts.filter(
    (product) => cartItem[product.id] !== 0
  );

  const Summary = () => {
    setTimeout(() => navigate("/order-summary"), 4000);
    setToggle(!toggle);
    setTimeout(() => window.location.reload(), 4500);
  };

  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart__container">
      <div className="cart__content section container">
        <div className="cart__product">
          {cartProducts.map((product) => (
            <CartItem key={product.id} data={product} />
          ))}
        </div>
        <div className="cart__item-cost">
          <div className="cart__cost-title">
            <h1 className="cart__cost-text">cost summary ..</h1>
          </div>
          <div className="cart__item-text">
            <p className="cart__cost-text">total cost : </p>
            <span className="cart__cost"> {totalAmount} $</span>
          </div>
          <div className="cart__checkout">
            <button className="checkout__back" onClick={() => navigate("/")}>
              continue shopping
            </button>
            <button className="place__order" onClick={Summary}>
              place order
            </button>
          </div>
          <div className={toggle ? "honeycomb active" : "honeycomb"}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
