import React, { useState } from "react";
import { useShopContext } from "../../component/context/Context";
import { HomeProducts } from "../../HomeProducts";
import { useParams, useNavigate } from "react-router-dom";
import { ProductPictures } from "../../ProductPictures";

import "./indexInfo.css";

export const ProductInfo = () => {
  const { cartItem, addToCart, removeFromCart, updateTotalCount } =
    useShopContext();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [toggle, setToggle] = useState(0);
  const { productId } = useParams();
  const navigate = useNavigate();

  const getProduct = () => {
    return HomeProducts.find((item) => item.id === Number(productId));
  };

  const getPics = () => {
    return ProductPictures.find((item) => item.productId === Number(productId));
  };

  const product = getProduct();
  const productPics = getPics();

  const arraypic = productPics
    ? Array.from([
        productPics.picOne,
        productPics.picTwo,
        productPics.picThree,
        productPics.picFour,
      ])
    : [];

  const handleImageCLick = (index) => {
    setCurrentImageIndex(index);
  };

  if (!product) {
    return <h1>No Product Founded</h1>;
  }

  const cartItemAmount = cartItem[product.id];
  return (
    <>
      {productPics && (
        <div className="show__details section">
          <div className="show__details-content">
            <div className="show__details-title">
              <h1 className="title__text">{product.title}</h1>
              <div
                className={
                  toggle ? "pro__heart-icone active__icon" : "pro__heart-icone"
                }
              >
                <i
                  className="bx bxs-heart"
                  onClick={() => setToggle(!toggle)}
                ></i>
              </div>
            </div>
            <div className="show__details-desc">
              <div className="show__details-img">
                <img src={arraypic[currentImageIndex]} alt="pic" />
              </div>
              <div className="show__details-data">
                <h1 className="data__name">{product.productName}</h1>
                <div className="data__rate">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                </div>
                <span className="data__price">{product.price}$</span>
              </div>
            </div>
            <div className="show__details-images">
              <div className="images__list">
                {arraypic.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt="pic"
                    className="images__img"
                    style={{
                      opacity: currentImageIndex === index ? 1 : 0.6,
                      transform:
                        currentImageIndex === index ? "scale(1.1)" : "",
                    }}
                    onClick={() => handleImageCLick(index)}
                  />
                ))}
              </div>
            </div>
            <div className="show__details-btn">
              <button
                className="btn__inc"
                onClick={() => {
                  addToCart(product.id);
                  updateTotalCount((prev) => prev + 1);
                }}
              >
                <i className="bx bx-plus"></i>
              </button>
              <span className="btn__count">{cartItemAmount}</span>
              {cartItemAmount > 0 && (
                <button
                  className="btn__dec"
                  onClick={() => {
                    removeFromCart(product.id);
                    updateTotalCount((prev) => prev - 1);
                  }}
                >
                  <i className="bx bx-minus"></i>
                </button>
              )}
            </div>
            <button
              className="show__details-back"
              onClick={() => navigate("/")}
            >
              continue shopping
            </button>
          </div>
        </div>
      )}
    </>
  );
};
