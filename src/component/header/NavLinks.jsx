import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useLocation } from "react-router-dom";

export const NavLinks = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [Toggle, showMenu] = useState(true);
  const [activeNav, setActiveNav] = useState("#home");

  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === "/about") {
      setActiveNav("#about");
    } else if (currentPath === "/contact") {
      setActiveNav("#contact");
    } else {
      setActiveNav("#home");
    }
  }, [location]);

  return (
    <div className="nav__links">
      <div className="nav__links-content container flex">
        <div className="nav__username flex">
          {isAuthenticated ? (
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
              className="logout"
            >
              <i className="bx bxs-user"></i>
            </button>
          ) : (
            <button onClick={() => loginWithRedirect()} className="login">
              <i className="bx bx-user-plus"></i>
            </button>
          )}
          {isAuthenticated && <p>{user.name}</p>}
        </div>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <nav className="nav__list">
            <Link className="nav__item" to="/">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon "></i> Home
              </a>
            </Link>
            <Link className="nav__item" to="/about">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </Link>
            <Link className="nav__item" to="/contact">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-phone nav__icon"></i> Contact
              </a>
            </Link>
          </nav>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="bx bx-menu-alt-right nav__icons"></i>
        </div>
      </div>
    </div>
  );
};
