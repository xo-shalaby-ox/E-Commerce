import React from "react";
// NAPLIN
import napkinOne from "../../assets/pic-one-1.jpg";
import napkinTwo from "../../assets/pic-one-2.jpg";
import napkinThree from "../../assets/pic-one-3.jpg";
import napkinFour from "../../assets/pic-one-4.jpg";
//BAGS
import bagOne from "../../assets/pic-two-1.jpg";
import bagTwo from "../../assets/pic-two-2.jpg";
import bagThree from "../../assets/pic-two-3.jpg";
import bagFour from "../../assets/pic-two-4.jpg";
//SWEATSHIRT
import sweatshirtOne from "../../assets/pic-three-1.jpg";
import sweatshirtTwo from "../../assets/pic-three-2.jpg";
import sweatshirtThree from "../../assets/pic-three-3.jpg";
import sweatshirtFour from "../../assets/pic-three-4.jpg";
//CUP
import cupOne from "../../assets/pic-four-1.jpg";
import cupTwo from "../../assets/pic-four-2.jpg";
import cupThree from "../../assets/pic-four-3.jpg";
import cupFour from "../../assets/pic-four-4.jpg";
// NOTE BOOK
import noteOne from "../../assets/pic-five-1.jpg";
import noteTwo from "../../assets/pic-five-2.jpg";
import noteThree from "../../assets/pic-five-3.jpg";
import noteFour from "../../assets/pic-five-4.jpg";

import "./Index.css";

export const About = () => {
  return (
    <div className="about section">
      <div className="about__container container ">
        <div className="about__content">
          <h1 className="about__subtitle"> we print your passion </h1>
          <div className="about__data">
            <div className="data__one">
              <div className="one__image">
                <div className="one">
                  <img className="image" src={napkinOne} alt="pic" />
                </div>
                <div className="two">
                  <img className="image" src={napkinTwo} alt="pic" />
                </div>
                <div className="three">
                  <img className="image" src={napkinThree} alt="pic" />
                </div>
                <div className="four">
                  <img className="image" src={napkinFour} alt="pic" />
                </div>
              </div>
              <div className="one__text">
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet modi placeat eum eligendi, itaque corrupti fuga
                  suscipit vitae ratione quidem cum non maxime similique,
                  temporibus laboriosam aperiam, architecto sed vel!
                </p>
              </div>
            </div>
            <div className="data__two">
              <div className="two__text">
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet modi placeat eum eligendi, itaque corrupti fuga
                  suscipit vitae ratione quidem cum non maxime similique,
                  temporibus laboriosam aperiam, architecto sed vel!
                </p>
              </div>
              <div className="two__image">
                <div className="one">
                  <img className="image" src={bagOne} alt="pic" />
                </div>
                <div className="two">
                  <img className="image" src={bagTwo} alt="pic" />
                </div>
                <div className="three">
                  <img className="image" src={bagThree} alt="pic" />
                </div>
                <div className="four">
                  <img className="image" src={bagFour} alt="pic" />
                </div>
              </div>
            </div>
            <div className="data__three">
              <div className="three__image">
                <div className="one">
                  <img className="image" src={sweatshirtOne} alt="pic" />
                </div>
                <div className="two">
                  <img className="image" src={sweatshirtTwo} alt="pic" />
                </div>
                <div className="three">
                  <img className="image" src={sweatshirtThree} alt="pic" />
                </div>
                <div className="four">
                  <img className="image" src={sweatshirtFour} alt="pic" />
                </div>
              </div>
              <div className="three__text">
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet modi placeat eum eligendi, itaque corrupti fuga
                  suscipit vitae ratione quidem cum non maxime similique,
                  temporibus laboriosam aperiam, architecto sed vel!
                </p>
              </div>
            </div>
            <div className="data__four">
              <div className="four__text">
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet modi placeat eum eligendi, itaque corrupti fuga
                  suscipit vitae ratione quidem cum non maxime similique,
                  temporibus laboriosam aperiam, architecto sed vel!
                </p>
              </div>

              <div className="four__image">
                <div className="one">
                  <img className="image" src={cupOne} alt="pic" />
                </div>
                <div className="two">
                  <img className="image" src={cupTwo} alt="pic" />
                </div>
                <div className="three">
                  <img className="image" src={cupThree} alt="pic" />
                </div>
                <div className="four">
                  <img className="image" src={cupFour} alt="pic" />
                </div>
              </div>
            </div>
            <div className="data__five">
              <div className="five__image">
                <div className="one">
                  <img className="image" src={noteOne} alt="pic" />
                </div>
                <div className="two">
                  <img className="image" src={noteTwo} alt="pic" />
                </div>
                <div className="three">
                  <img className="image" src={noteThree} alt="pic" />
                </div>
                <div className="four">
                  <img className="image" src={noteFour} alt="pic" />
                </div>
              </div>
              <div className="five__text">
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet modi placeat eum eligendi, itaque corrupti fuga
                  suscipit vitae ratione quidem cum non maxime similique,
                  temporibus laboriosam aperiam, architecto sed vel!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
