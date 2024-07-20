import React, { useState, useEffect } from "react";
import { useShopContext } from "../../component/context/Context";

export const CartItem = (props) => {
  const [value, setValue] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const { id, image, productName, price } = props.data;
  const {
    cartItem,
    addToCart,
    removeFromCart,
    updateCartItem,
    updateTotalCount,
  } = useShopContext();

  const englishLettersRegex = /^[A-Za-z]+$/;

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    if (englishLettersRegex.test(inputValue) || inputValue === "") {
      setValue(inputValue);
      localStorage.setItem("cartItemColor", inputValue);
    }
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size === selectedSize ? "" : size);
    localStorage.setItem("cartItemSize", size);
  };

  useEffect(() => {
    const storedValue = localStorage.getItem("cartItemColor");
    if (storedValue) {
      setValue(storedValue);
    }
  }, []);

  useEffect(() => {
    const storedSize = localStorage.getItem("cartItemSize");
    if (storedSize) {
      setSelectedSize(storedSize);
    }
  }, []);
  return (
    <div className="product">
      <div className="cart__item">
        <div className="cart__item-prod">
          <div className="cart__item-image">
            <img src={image} alt="pic" />
          </div>
          <div className="cart__item-desc">
            <h1 className="cart__item-name">{productName} ..</h1>
            <span className="cart__item-price">price : {price} $</span>
            <input
              className="cart__item-color"
              type="text"
              value={value}
              placeholder="color"
              onChange={handleInputChange}
              required
            />
            <div className="cart__item-size">
              <div
                className={`size ${selectedSize === "S" ? "active" : ""}`}
                onClick={() => handleSizeClick("S")}
              >
                S
              </div>
              <div
                className={`size ${selectedSize === "M" ? "active" : ""}`}
                onClick={() => handleSizeClick("M")}
              >
                M
              </div>
              <div
                className={`size ${selectedSize === "L" ? "active" : ""}`}
                onClick={() => handleSizeClick("L")}
              >
                L
              </div>
              <div
                className={`size ${selectedSize === "XL" ? "active" : ""}`}
                onClick={() => handleSizeClick("XL")}
              >
                XL
              </div>
              <div
                className={`size ${selectedSize === "2XL" ? "active" : ""}`}
                onClick={() => handleSizeClick("2XL")}
              >
                2XL
              </div>
            </div>
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
