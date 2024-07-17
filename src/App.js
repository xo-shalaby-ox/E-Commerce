import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./component/header/Header";
import { Cart } from "./pages/cart/Cart";
import { ShopContextProvider } from "./component/context/Context";
import { ProductInfo } from "./pages/ProductInfo";
import { About } from "./pages/About/Index";
import { Contact } from "./pages/Contact/Index";
import { Index } from "./component/changeColor/Index";
import { Toggle } from "./component/darkMode/Toggle";
import { UseLocalStorage } from "./component/localstorage/Index";
import { OrderSummary } from "./component/ordersummary/OrderSummary";
import "./App.css";

function App() {
  const [isDark, setIsDark] = UseLocalStorage("isDark", false);
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="App" data-theme={isDark ? "dark" : "light"}>
        <ShopContextProvider>
          <Header />
          <div
            className={
              toggle ? "setting__section active__setting" : "setting__section"
            }
          >
            <h1 className="mode__text"> choose your mode</h1>
            <Toggle
              isChecked={isDark}
              handleChange={() => setIsDark(!isDark)}
            />
            <Index />
            <i
              className="bx bx-cog icon__setting"
              onClick={() => setToggle(!toggle)}
            ></i>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="order-summary" element={<OrderSummary />} />
            <Route path="/products">
              <Route path=":productId" element={<ProductInfo />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </ShopContextProvider>
      </div>
    </>
  );
}

export default App;
