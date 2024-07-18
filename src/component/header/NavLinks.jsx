import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LoginForm } from "./loginForm/Index";

export const NavLinks = () => {
  const [form, setForm] = useState(false);
  const [fullName, setFullName] = useState("");
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

  useEffect(() => {
    const storedFullName = localStorage.getItem("fullName");
    if (storedFullName) {
      setFullName(storedFullName);
    }
  }, []);

  const handleSubmit = (firstName, lastName) => {
    const fullName = `${firstName} ${lastName}`;
    setFullName(fullName);
    localStorage.setItem("fullName", fullName);
  };

  const handleSignOut = () => {
    localStorage.removeItem("fullName");
    setFullName("");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
  };

  return (
    <div className="nav__links">
      <div className="nav__links-content container flex">
        <div className="nav__username flex">
          {!fullName && (
            <i
              className="uil uil-user-plus login"
              onClick={() => setForm(!form)}
            ></i>
          )}
          <div className={form ? "form__inputs active__form" : "form__inputs"}>
            <LoginForm onSubmit={handleSubmit} />
            <i
              className="uil uil-times close"
              onClick={() => setForm(!form)}
            ></i>
          </div>
          {fullName ? (
            <div className="logout">
              <p>{fullName}</p>
              <i
                className="uil uil-sign-out-alt signout"
                onClick={handleSignOut}
              ></i>
            </div>
          ) : null}
        </div>
        <div className={Toggle ? "side__menu show__side-menu" : "side__menu"}>
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
