import React from "react";
import { HomeProducts } from "../../../../HomeProducts";
import { ProductData } from "../../productdata";
import "./Machine.css";

export const Machine = () => {
  return (
    <div id="machines" className="machine__slide">
      {HomeProducts.filter((product) => product.type === "machines").map(
        (product) => {
          return <ProductData key={product.id} product={product} />;
        }
      )}
    </div>
  );
};
