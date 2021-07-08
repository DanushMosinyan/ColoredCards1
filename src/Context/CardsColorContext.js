import { useContext, createContext } from "react";

export const CardsColorContext = createContext();

export const useCardsColorContext = () => useContext(CardsColorContext);

