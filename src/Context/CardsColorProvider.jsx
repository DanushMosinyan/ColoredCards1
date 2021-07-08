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
    const random0_256 = () => (Math.random() * 256) >> 0;
    const color = `rgb(${random0_256()}, ${random0_256()}, ${random0_256()})`;
    colors[index] = color;
    setColors([...colors]);
  };

  const cardsColorProviderValue = {
    colors,
    changeColor,
  }

  return (
    <CardsColorContext.Provider
      value={cardsColorProviderValue}
    >
      {children}
    </CardsColorContext.Provider>
  );
};
