import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { HomeProducts } from "../../../HomeProducts";
import ProductItem from "../../../component/ProductItem/index";
import "./SlideHome.css";

export const SlideHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };
  return (
    <div className="slide__Edit">
      <Slider {...settings}>
        {HomeProducts.filter((product) => product.type === "slider").map(
          (product) => {
            return <ProductItem key={product.id} product={product} />;
          }
        )}
      </Slider>
    </div>
  );
};
