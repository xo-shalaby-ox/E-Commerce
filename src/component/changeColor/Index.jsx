import React from "react";
import { ColorsItem } from "./ColorsItem";
import "./Index.css";
import { useEffect } from "react";

export const Index = () => {
  const colors = [
    "#f10a3c",
    "#d69f1e",
    "#0ea00e",
    "#2e2ee9d8",
    "#e71dd6",
    "#a52a2a",
  ];

  useEffect(() => {
    const currentColor = localStorage.getItem("color");
    setTheme(currentColor);
  }, []);

  const setTheme = (color) => {
    document.body.style.setProperty("--bg-color", color);
  };

  const setColor = (e) => {
    const currentColor = e.target.style.getPropertyValue("--bg-color");
    setTheme(currentColor);
    localStorage.setItem("color", currentColor);
  };
  return (
    <div className="section__colors">
      <h1 className="color__text">choose your color</h1>
      <div className="color__list">
        {colors.map((color, index) => (
          <ColorsItem key={index} setColor={setColor} color={color} />
        ))}
      </div>
    </div>
  );
};
