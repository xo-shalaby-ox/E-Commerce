import React from "react";

export const ColorsItem = ({ color, setColor }) => {
  return (
    <div
      className="color__item"
      style={{ "--bg-color": color }}
      onClick={setColor}
    ></div>
  );
};
