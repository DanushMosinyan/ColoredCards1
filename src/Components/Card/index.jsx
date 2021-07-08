import React from "react";
import { useCardsColorContext } from "../../Context/CardsColorContext";
import "./styles.css";

const Card = ({ color, index }) => {
  const { changeColor } = useCardsColorContext();

  return (
    <div
      className="card"
      onClick={() => changeColor(index)}
      style={{ backgroundColor: color }}
    />
  );
};

export default Card;
