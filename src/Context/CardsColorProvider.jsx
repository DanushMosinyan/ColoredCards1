import React, { useState } from "react";
import { CardsColorContext } from "./CardsColorContext";

export const CardsColorProvider = ({ children }) => {
  const [colors, setColors] = useState([
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
  ]);

  const changeColor = (index) => {
    const r = () => (Math.random() * 256) >> 0;
    const color = `rgb(${r()}, ${r()}, ${r()})`;
    colors[index] = color;
    setColors([...colors]);
  };

  return (
    <CardsColorContext.Provider
      value={{
        colors,
        changeColor,
      }}
    >
      {children}
    </CardsColorContext.Provider>
  );
};
