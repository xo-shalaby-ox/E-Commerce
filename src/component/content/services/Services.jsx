import React from "react";
import "./Services.css";

export const Services = () => {
  return (
    <>
      <div className="services__cards">
        <div className="service__card">
          <div className="service-card__icon">
            <i className="uil uil-truck"></i>
          </div>
          <h1 className="service-card__text">WorldWide Delivery</h1>
          <p className="service__text">
            we offer competitive prices on our 100 million plus product any
            range
          </p>
        </div>

        <div className="service__card">
          <div className="service-card__icon">
            <i className="uil uil-paypal"></i>
          </div>
          <h1 className="service-card__text">Safe Payment</h1>
          <p className="service__text">
            we offer competitive prices on our 100 million plus product any
            range
          </p>
        </div>

        <div className="service__card">
          <div className="service-card__icon">
            <i className="uil uil-shield-check"></i>
          </div>
          <h1 className="service-card__text">Shop With Confidence</h1>
          <p className="service__text">
            we offer competitive prices on our 100 million plus product any
            range
          </p>
        </div>

        <div className="service__card">
          <div className="service-card__icon">
            <i className="uil uil-headphones-alt"></i>
          </div>
          <h1 className="service-card__text">24/7 support</h1>
          <p className="service__text">
            we offer competitive prices on our 100 million plus product any
            range
          </p>
        </div>
      </div>
    </>
  );
};
