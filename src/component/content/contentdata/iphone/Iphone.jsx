import React from "react";
import { HomeProducts } from "../../../../HomeProducts";
import { ProductData } from "../../productdata";
import "./Iphone.css";

export const Iphone = () => {
  return (
    <div id="iphone" className="iphone__slide">
      {HomeProducts.filter((product) => product.type === "iphone").map(
        (product) => {
          return <ProductData key={product.id} product={product} />;
        }
      )}
    </div>
  );
};
