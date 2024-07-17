import React from "react";
import { NavLinks } from "./NavLinks";
import { NavData } from "./NavData";
import { NavInfo } from "./NavInfo";
import "../header/Header.css";

export const Header = () => {
  return (
    <div className="App">
      <NavInfo />
      <NavData />
      <NavLinks />
    </div>
  );
};
