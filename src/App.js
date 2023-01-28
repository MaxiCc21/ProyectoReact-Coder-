import React, { useState, useEffect } from "react";

import "./App.css";
import Footer from "./components/footer/Footer";
import GaleriaApp from "./components/galeria/GaleriaApp";
import NavBar from "./components/navbar/NavBar";
import Index from "./page/index/Index.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page404 from "./page/404/page404";
import CardModal from "./components/CardWidget/CardModal";
import { useCard } from "./Hooks/useCard";

import { ModalCard } from "./components/CardWidget/ModalCard";
import Modal from "./components/modal/Modal";
import { useModal } from "./Hooks/useModal";

function App(props) {
  let methodCardWidget = useCard();
  const { isOpen, openModal, closeModal } = useModal(false);

  return (
    <>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <ModalCard
          methodCardWidget={methodCardWidget}
          modalHeight="500px"
          modalwidth="500px"
          modaltitle="Carruto de compras"
        />
      </Modal>

      {/* <CardModal methodCardWidget={methodCardWidget} /> */}
      <BrowserRouter>
        <NavBar methodCardWidget={methodCardWidget} openModal={openModal} />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/ropa"
            element={
              <GaleriaApp
                methodCardWidget={methodCardWidget}
                urlCategory="men's clothing"
              />
            }
          />
          <Route
            path="/joyas"
            element={
              <GaleriaApp
                methodCardWidget={methodCardWidget}
                urlCategory="jewelery"
              />
            }
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
