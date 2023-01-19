import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import React, { useState, useEffect } from "react";

const CardModal = ({ methodCardWidget }) => {
  console.log("rojo", methodCardWidget.itemListCard);
  return (
    <>
      {methodCardWidget.itemListCard.map((el) => (
        <>
          <div>
            <img
              alt={el.title}
              style={{ height: "100px", width: "100px" }}
              src={el.image}
            ></img>
            <h1>{el.title}</h1>
            <button
              onClick={() => {
                methodCardWidget.deleteItemToCard(el.id);
              }}
            >
              X
            </button>
          </div>
        </>
      ))}
    </>
  );
};

export default CardModal;
