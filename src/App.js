import React, { useState, useEffect } from "react";

import "./App.css";
import Footer from "./components/footer/Footer";
import GaleriaApp from "./components/galeria/GaleriaApp";
import NavBar from "./components/navbar/NavBar";

function App(props) {
  const [itemListCard, setItemListCard] = useState([]);
  useEffect(() => {
    console.log("Movimiento en carrito");
    console.log(itemListCard);
  }, [itemListCard]);

  const setItemToCard = (newItemData) => {
    setItemListCard([...itemListCard, newItemData]);
  };

  const deleteItemToCard = () => {};

  const methodCardWidget = {
    itemListCard,
    setItemToCard,
    deleteItemToCard,
  };

  return (
    <>
      <NavBar methodCardWidget={methodCardWidget} />
      <GaleriaApp methodCardWidget={methodCardWidget} />
      <Footer />
    </>
  );
}

export default App;
