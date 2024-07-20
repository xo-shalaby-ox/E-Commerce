import React, { useState, useEffect } from "react";
import { Sidebar } from "../../component/content/sidebar/Sidebar";
import { SlideHome } from "../../component/content/slidehome/SlideHome";
import { Suit } from "../../component/content/contentdata/suits/Suit";
import { Sportswear } from "../../component/content/contentdata/sportswear/Sportswear";
import { Clothes } from "../../component/content/contentdata/clothes/Clothes";
import { Dresses } from "../../component/content/contentdata/dresses/Dresses";
import { Shirts } from "../../component/content/contentdata/t-shirts/Shirts";
import { Shoes } from "../../component/content/contentdata/shoeses/Shoes";
import { Accessory } from "../../component/content/contentdata/accessories/Accessory";
import { Iphone } from "../../component/content/contentdata/iphone/Iphone";
import { Machine } from "../../component/content/contentdata/machine/Machine";
import { Footer } from "../../component/content/footer/Footer";
import { Services } from "../../component/content/services/Services";

import "./Home.css";

export const Home = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="home section">
        <div className="home__container container">
          <div className="home__content">
            <Sidebar />
            <SlideHome />
          </div>
        </div>
      </div>
      {/* ************************ SUITS ******************************* */}
      <div className="suit section">
        <div className="home__suit container">
          <div className="subtitle section">
            <h1 className="subtitle-text">suit</h1>
            <div className="typing-indicator">
              <div className="typing-circle"></div>
              <div className="typing-circle"></div>
              <div className="typing-circle"></div>
              <div className="typing-shadow"></div>
              <div className="typing-shadow"></div>
              <div className="typing-shadow"></div>
            </div>
          </div>
          <div className="suit__track">
            <Suit />
          </div>
        </div>
      </div>
      {/* ************************ SPORTSWEAR ******************************* */}
      <div className="sportswear section">
        <div className="home__sportswear container">
          <div className="subtitle section">
            <h1 className="subtitle-text">sportweat</h1>
            <div className="typing-indicator">
              <div className="typing-circle"></div>
              <div className="typing-circle"></div>
              <div className="typing-circle"></div>
              <div className="typing-shadow"></div>
              <div className="typing-shadow"></div>
              <div className="typing-shadow"></div>
            </div>
          </div>
          <div className="sportswear__track">
            <Sportswear />
          </div>
        </div>
      </div>
      {/* ************************ CLOTHES ******************************* */}
      <div className="clothes section">
        <div className="home__clothes container">
          <div className="subtitle section">
            <h1 className="subtitle-text">clothes</h1>
            <div className="typing-indicator">
              <div className="typing-circle"></div>
              <div className="typing-circle"></div>
              <div className="typing-circle"></div>
              <div className="typing-shadow"></div>
              <div className="typing-shadow"></div>
              <div className="typing-shadow"></div>
            </div>
          </div>
          <div className="clothes__track">
            <Clothes />
          </div>
        </div>
      </div>
      {/* ************************ DRESSES ******************************* */}
      <div className="dresses section">
        <div className="home__dresses container">
          <div className="subtitle section">
            <h1 className="subtitle-text">dresses</h1>
            <div className="typing-indicator">
              <div className="typing-circle"></div>
              <div className="typing-circle"></div>
              <div className="typing-circle"></div>
              <div className="typing-shadow"></div>
              <div className="typing-shadow"></div>
              <div className="typing-shadow"></div>
            </div>
          </div>
          <div className="dresses__track">
            <Dresses />
          </div>
        </div>
      </div>
      {/* ************************ T-SHIRTS ******************************* */}
      <div className="t-Shirts section">
        <div className="home__t-Shirts container">
          <div className="subtitle section">
            <h1 className="subtitle-text">t-Shirts</h1>
            <div className="typing-indicator">
              <div className="typing-circle"></div>
              <div className="typing-circle"></div>
              <div className="typing-circle"></div>
              <div className="typing-shadow"></div>
              <div className="typing-shadow"></div>
              <div className="typing-shadow"></div>
            </div>
          </div>
          <div className="t-Shirts__track">
            <Shirts />
          </div>
        </div>
      </div>
      {/* ************************ SHOESES ******************************* */}
      <div className="shoes section">
        <div className="home__shoes container">
          <div className="subtitle section">
            <h1 className="subtitle-text">shoes</h1>
            <div className="typing-indicator">
              <div className="typing-circle"></div>
              <div className="typing-circle"></div>
              <div className="typing-circle"></div>
              <div className="typing-shadow"></div>
              <div className="typing-shadow"></div>
              <div className="typing-shadow"></div>
            </div>
          </div>
          <div className="shoes__track">
            <Shoes />
          </div>
        </div>
      </div>
      {/* ************************ ACCESSORIES ******************************* */}
      <div className="accessory section">
        <div className="home__accessory container">
          <div className="subtitle section">
            <h1 className="subtitle-text">accessory</h1>
            <div className="typing-indicator">
              <div className="typing-circle"></div>
              <div className="typing-circle"></div>
              <div className="typing-circle"></div>
              <div className="typing-shadow"></div>
              <div className="typing-shadow"></div>
              <div className="typing-shadow"></div>
            </div>
          </div>
          <div className="accessory__track">
            <Accessory />
          </div>
        </div>
      </div>
      {/* ************************ IPHONES ******************************* */}
      <div className="iphone section">
        <div className="home__iphone container">
          <div className="subtitle section">
            <h1 className="subtitle-text">phones</h1>
            <div className="typing-indicator">
              <div className="typing-circle"></div>
              <div className="typing-circle"></div>
              <div className="typing-circle"></div>
              <div className="typing-shadow"></div>
              <div className="typing-shadow"></div>
              <div className="typing-shadow"></div>
            </div>
          </div>
          <div className="iphone__track">
            <Iphone />
          </div>
        </div>
      </div>
      {/* ************************ MACHINES ******************************* */}
      <div className="machine section">
        <div className="home__machine container">
          <div className="subtitle section">
            <h1 className="subtitle-text">machine</h1>
            <div className="typing-indicator">
              <div className="typing-circle"></div>
              <div className="typing-circle"></div>
              <div className="typing-circle"></div>
              <div className="typing-shadow"></div>
              <div className="typing-shadow"></div>
              <div className="typing-shadow"></div>
            </div>
          </div>
          <div className="machine__track">
            <Machine />
          </div>
        </div>
      </div>
      {/* ************************ SERVICES ******************************* */}
      <div className="services section">
        <div className="home__services container">
          <div className="subtitle section">
            <h1 className="subtitle-text">services</h1>
            <div className="typing-indicator">
              <div className="typing-circle"></div>
              <div className="typing-circle"></div>
              <div className="typing-circle"></div>
              <div className="typing-shadow"></div>
              <div className="typing-shadow"></div>
              <div className="typing-shadow"></div>
            </div>
          </div>
          <div className="services__track">
            <Services />
          </div>
        </div>
      </div>
      {/* ************************ FOOTER ******************************* */}
      <div className="footer section">
        <Footer />
      </div>
      {showButton && (
        <div className="up">
          <button className="btn__up" onClick={handleScrollToTop}>
            <i className="bx bx-up-arrow-alt"></i>
          </button>
        </div>
      )}
    </>
  );
};
