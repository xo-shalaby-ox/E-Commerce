import React, { useState } from "react";
import "./Sidebar.css";

export const Sidebar = () => {
  const [Toggle, setShow] = useState(false);
  const [activeLink, setActiveLink] = useState("#suits");
  return (
    <>
      <div
        className={
          Toggle
            ? "home__nav-side flex active__category"
            : "home__nav-side flex"
        }
      >
        <div className="catiegory__title flex">
          <div className="title__text">
            <p>category</p>
          </div>
          <i className="bx bx-x" onClick={() => setShow(!Toggle)}></i>
        </div>
        <div className="catiegory__links">
          <ul className="links flex">
            <li className="link__item">
              <a
                href="#suits"
                className={
                  activeLink === "#suits" ? "link active__link" : "link"
                }
                onClick={() => setActiveLink("#suits")}
              >
                suits
              </a>
            </li>
            <li className="link__item">
              <a
                href="#sportswear"
                className={
                  activeLink === "#sportswear" ? "link active__link" : "link"
                }
                onClick={() => setActiveLink("#sportswear")}
              >
                sportswear
              </a>
            </li>
            <li className="link__item">
              <a
                href="#clothes"
                className={
                  activeLink === "#clothes" ? "link active__link" : "link"
                }
                onClick={() => setActiveLink("#clothes")}
              >
                clothes
              </a>
            </li>
            <li className="link__item">
              <a
                href="#dresses"
                className={
                  activeLink === "#dresses" ? "link active__link" : "link"
                }
                onClick={() => setActiveLink("#dresses")}
              >
                dresses
              </a>
            </li>
            <li className="link__item">
              <a
                href="#t-Shirts"
                className={
                  activeLink === "#t-Shirts" ? "link active__link" : "link"
                }
                onClick={() => setActiveLink("#t-Shirts")}
              >
                t-Shirts
              </a>
            </li>
            <li className="link__item">
              <a
                href="#shoes"
                className={
                  activeLink === "#shoes" ? "link active__link" : "link"
                }
                onClick={() => setActiveLink("#shoes")}
              >
                shoes
              </a>
            </li>
            <li className="link__item">
              <a
                href="#accessories"
                className={
                  activeLink === "#accessories" ? "link active__link" : "link"
                }
                onClick={() => setActiveLink("#accessories")}
              >
                accessories
              </a>
            </li>
            <li className="link__item">
              <a
                href="#iphone"
                className={
                  activeLink === "#iphone" ? "link active__link" : "link"
                }
                onClick={() => setActiveLink("#iphone")}
              >
                iphons
              </a>
            </li>
            <li className="link__item">
              <a
                href="#machines"
                className={
                  activeLink === "#machines" ? "link active__link" : "link"
                }
                onClick={() => setActiveLink("#machines")}
              >
                machines
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav__tog">
        <i className="bx bx-customize" onClick={() => setShow(!Toggle)}></i>
      </div>
    </>
  );
};
