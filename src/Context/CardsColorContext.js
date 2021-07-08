import { useContext, createContext } from "react";

export const CardsColorContext = createContext();

export const useCardsColorContext = () => {
  return useContext(CardsColorContext);
};
