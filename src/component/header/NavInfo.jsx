import React from "react";

export const NavInfo = () => {
  return (
    <div className="nav__information">
      <div className="nav__info container flex">
        <div className="nav__contact flex">
          <div className="nav__tel flex">
            <i className="uil uil-phone"></i>
            <span>+20100 102 8922</span>
          </div>
          <div className="nav__account flex">
            <i className="uil uil-envelope-minus"></i>
            <span>SHOP@gamil.com</span>
          </div>
        </div>
        <div className="nav__helps">
          <div className="nav__helps-text">
            <span>Theme FAQ's</span>
            <span>Need Helps !?</span>
          </div>
          <div className="nav__helps-lang">
            <div className="nav__en">
              <i className="bx bxs-flag-alt"></i>
              <span>EN</span>
            </div>
            <div className="nav__usd">
              <i className="bx bxs-flag-alt"></i>
              <span>USD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
