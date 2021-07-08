import React from "react";
import Card from "../Card";
import "./styles.css";

import { useCardsColorContext } from "../../Context/CardsColorContext";

const CardContainer = () => {
  const { colors } = useCardsColorContext();

  return (
    <div className = "cards">
      {colors.map((color, index) => (
        <Card key={index} color={color} index={index} />
      ))}
    </div>
  );
};

export default CardContainer;
