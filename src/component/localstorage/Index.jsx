import { useState } from "react";

export const UseLocalStorage = (key, initialValue) => {
  // if the value is avaliable
  const sotredValue = localStorage.getItem(key);
  const initial = sotredValue ? JSON.parse(sotredValue) : initialValue;

  //   state to store the value
  const [value, setValue] = useState(initial);

  //   function to update the value

  const updateValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };
  return [value, updateValue];
};
