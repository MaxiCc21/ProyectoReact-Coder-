import React, { useState, useEffect } from "react";
import ModalItem from "./ModalItem";
import "./ModalCard.css";

export const ModalCard = ({ methodCardWidget }) => {
  let { itemListCard, deleteItemToCard, totalPrice } = methodCardWidget;
  console.log(totalPrice);
  return (
    // <section className="modal-section">
    <div id="modal-container">
      <h2 className="modal-title">Carrito de compras</h2>
      <div className="modal-itemArea">
        {/*Esto seria el nuevo componente  */}
        {itemListCard.map((el) => (
          <ModalItem el={el} deleteItemToCard={deleteItemToCard} key={el.id} />
        ))}
      </div>
      <h3>Precio: ${totalPrice}</h3>
      <button>Comprar</button>
    </div>
    // </section>
  );
};
