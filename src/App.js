import React, { useState, useEffect } from "react";

import "./App.css";
import Footer from "./components/footer/Footer";
import GaleriaApp from "./components/galeria/GaleriaApp";
import NavBar from "./components/navbar/NavBar";
import Index from "./page/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
      {/* <GaleriaApp methodCardWidget={methodCardWidget} /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/ropa"
            element={<GaleriaApp methodCardWidget={methodCardWidget} />}
          />
          <Route path="/como" element={<h1>Carrito</h1>} />
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
