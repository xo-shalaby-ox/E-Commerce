import React, { createContext, useState } from "react";
import { HomeProducts } from "../../HomeProducts";
import { useContext } from "react";

const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < HomeProducts.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const PRODUCTS = HomeProducts;
  const filter = PRODUCTS.filter((product) => product.id > 5);

  const [cartItem, setCartItem] = useState(getDefaultCart());
  const [quary, setQuery] = useState("");
  const [filteredProduct, setFilteredProduct] = useState(filter);
  const [totalCost, setTotalCost] = useState(0);

  const handleSearch = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    setQuery(searchQuery);

    const filtered = PRODUCTS.filter((product) =>
      product.productName.toLocaleLowerCase().includes(searchQuery)
    );
    setFilteredProduct(filtered);
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = HomeProducts.find(
          (product) => product.id === Number(item)
        );
        totalAmount += cartItem[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };
  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const updateCartItem = (newAmount, itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: newAmount }));
  };
  const updateTotalCount = (value) => {
    setTotalCost(value);
  };

  const contextValues = {
    cartItem,
    quary,
    filteredProduct,
    totalCost,
    updateTotalCount,
    handleSearch,
    addToCart,
    removeFromCart,
    updateCartItem,
    getTotalCartAmount,
  };
  return (
    <ShopContext.Provider value={contextValues}>
      {props.children}
    </ShopContext.Provider>
  );
};

export const useShopContext = () => {
  return useContext(ShopContext);
};
