import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useShopContext } from "../context/Context";

export const NavData = () => {
  const [open, setOpen] = useState(false);
  const { query, filteredProduct, handleSearch, totalCost } = useShopContext();

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".nav__data");
      if (window.scrollY > 0) {
        header.classList.add("scroll-header");
      } else {
        header.classList.remove("scroll-header");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="nav__data">
      <div className="nav__data-content container flex">
        <div className="nav__logo flex">
          <Link to="/" className="nav__logo-letter">
            Trenders
          </Link>
        </div>
        <div className="nav__user flex">
          <div className="nav__prod flex">
            <div className="nav__cart">
              <Link to="/cart">
                <i className="bx bx-cart-add"></i>
                {totalCost > 0 ? (
                  <span className="nav__cart-count"> {totalCost}</span>
                ) : (
                  ""
                )}
              </Link>
            </div>
            <div className="nav__Fav">
              <i className="bx bx-search" onClick={() => setOpen(!open)}></i>
              <div className={open ? "search__div show__open" : "search__div"}>
                <input
                  type="text"
                  placeholder="Search...!"
                  value={query}
                  onChange={handleSearch}
                />
                <ul className="item__list">
                  {filteredProduct.map((product) => (
                    <NavLink
                      key={product.id}
                      to={`/products/${product.id}`}
                      onClick={() => setOpen(!open)}
                      className="list"
                    >
                      <li className="item" key={product.id}>
                        {product.productName}
                      </li>
                    </NavLink>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
