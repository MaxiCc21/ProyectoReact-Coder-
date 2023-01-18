import React, { useState, useEffect } from "react";

import "./App.css";
import Footer from "./components/footer/Footer";
import GaleriaApp from "./components/galeria/GaleriaApp";
import NavBar from "./components/navbar/NavBar";
import Index from "./page/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page404 from "./page/404/page404";

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
      {/* <GaleriaApp methodCardWidget={methodCardWidget} /> */}
      <BrowserRouter>
        <NavBar methodCardWidget={methodCardWidget} />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/ropa"
            element={<GaleriaApp methodCardWidget={methodCardWidget} />}
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
