import React from "react";
import CardContainer from "./Components/CardContainer/index";
import { CardsColorProvider } from "./Context/CardsColorProvider";
import "./App.css";

const App = () => {
  return (
    <CardsColorProvider>
      <div className="mainContainer">
        <CardContainer />
        <CardContainer />
      </div>
    </CardsColorProvider>
  );
};

export default App;
