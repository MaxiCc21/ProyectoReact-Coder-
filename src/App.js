import React, { useState, useEffect } from "react";

import "./App.css";
import Footer from "./components/footer/Footer";
import GaleriaApp from "./components/galeria/GaleriaApp";
import NavBar from "./components/navbar/NavBar";
import Index from "./page/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page404 from "./page/404/page404";
import CardModal from "./components/CardWidget/CardModal";
import { useCard } from "./Hooks/useCard";

function App(props) {
  let methodCardWidget = useCard();

  return (
    <>
      <CardModal methodCardWidget={methodCardWidget} />
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
