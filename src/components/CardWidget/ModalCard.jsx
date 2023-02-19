import React, { useState, useEffect } from "react";
import ModalItem from "./ModalItem";
import "./ModalCard.css";
import Button from "@mui/material/Button";

export const ModalCard = ({ methodCardWidget, modaltitle = null }) => {
  let { itemListCard, deleteItemToCard, totalPrice } = methodCardWidget;

  const myStyle_btn1 = {
    background: "rgb(84, 149, 234  )",
    color: "white",
    width: "auto",
    height: "34px",
    fontSize: "13px",
    "&:hover": {
      background: "rgb(124, 172, 235)",
    },
  };
  const myStyle_btn2 = {
    background: "rgb(228, 228, 228 )",
    color: "rgb(131, 131, 131 )",
    height: "34px",
    fontSize: "13px",
    "&:hover": {
      background: "rgb(200, 200, 200)",
      color: "rgb(141,141,141)",
    },
  };

  return (
    <>
      {modaltitle && <h2 className="modal-title">{modaltitle}</h2>}
      <div className="modal-itemArea">
        {/*Esto seria el nuevo componente  */}
        {itemListCard.map((el) => (
          <ModalItem el={el} deleteItemToCard={deleteItemToCard} key={el.id} />
        ))}
      </div>
      <section className="modal-bottomArea">
        <div
          style={{
            height: "34px",
            width: "30%",
          }}
        >
          <h3>Precio: ${totalPrice}</h3>
        </div>
        <div
          style={{
            height: "100%",
            width: "70%",
            display: "flex",
          }}
        >
          <Button
            disabled={false}
            size="large"
            variant="filled"
            sx={myStyle_btn2}
          >
            Limpiar Carrito
          </Button>
          <Button
            disabled={false}
            size="large"
            variant="filled"
            sx={myStyle_btn1}
          >
            Ir a pagar
          </Button>
        </div>
      </section>
    </>
  );
};
