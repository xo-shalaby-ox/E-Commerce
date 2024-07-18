import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { HomeProducts } from "../../../../HomeProducts";
import { ProductData } from "../../productdata";
import "./Sportswear.css";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="bx bx-chevrons-right"></i>
      </button>
    </div>
  );
};
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="bx bx-chevrons-left"></i>
      </button>
    </div>
  );
};

export const Sportswear = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div id="sportswear" className="sportswear__slide">
      <Slider {...settings}>
        {HomeProducts.filter((product) => product.type === "sportswear").map(
          (product) => {
            return <ProductData key={product.id} product={product} />;
          }
        )}
      </Slider>
    </div>
  );
};
