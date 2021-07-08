import React from "react";
import Card from "../Card";
import { useCardsColorContext } from "../../Context/CardsColorContext";
import "./styles.css";

const CardContainer = () => {
  const { colors } = useCardsColorContext();

  return (
    <div className = "cardsContainer">
      {colors.map((color, index) => (
        <Card key={index} color={color} index={index} />
      ))}
    </div>
  );
};

export default CardContainer;
