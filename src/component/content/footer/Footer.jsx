import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/Page Logo.png";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__image">
          <img src={Logo} alt="pic" />
        </div>
        <ul className="footer__list">
          <Link to="/">
            <a href="#suits" className="footer__link">
              Home
            </a>
          </Link>
          <Link to="/about">
            <a href="#sportswear" className="footer__link">
              About
            </a>
          </Link>
          <Link to="/contact">
            <a href="#clothes" className="footer__link">
              Contact
            </a>
          </Link>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.tiktok.com/@trenders.store?_t=8nnjPA9I7E7&_r=1"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-tiktok"></i>
          </a>
          <a
            href="https://www.instagram.com/trendersstore?igsh=cm13c2hwMDA0aXVu"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/Trenders.Store?mibextid=ZbWKwL"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-facebook"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Crypticalcoder. All right reserved
        </span>
      </div>
    </footer>
  );
};
