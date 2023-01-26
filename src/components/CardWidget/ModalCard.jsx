import React, { useState, useEffect } from "react";
import ModalItem from "./ModalItem";
import "./ModalCard.css";

// export const ModalCard = ({
//   methodCardWidget,
//   modalHeight,
//   modalwidth,
//   modaltitle = null,
// }) => {
//   let ModalSize = {
//     height: modalHeight,
//     width: modalwidth,
//   };

//   let { itemListCard, deleteItemToCard, totalPrice } = methodCardWidget;

//   return (
//     // <section className="modal-section">
//     <div id="modal-container" style={ModalSize}>
//       {modalwidth && <h2 className="modal-title">{modaltitle}</h2>}

//       <div className="modal-itemArea">
//         {/*Esto seria el nuevo componente  */}
//         {itemListCard.map((el) => (
//           <ModalItem el={el} deleteItemToCard={deleteItemToCard} key={el.id} />
//         ))}
//       </div>
//       <h3>Precio: ${totalPrice}</h3>
//       <button>Comprar</button>
//     </div>
//     // </section>
//   );
// };

export const ModalCard = ({ methodCardWidget, modaltitle = null }) => {
  let { itemListCard, deleteItemToCard, totalPrice } = methodCardWidget;

  return (
    <>
      {modaltitle && <h2 className="modal-title">{modaltitle}</h2>}
      <div className="modal-itemArea">
        {/*Esto seria el nuevo componente  */}
        {itemListCard.map((el) => (
          <ModalItem el={el} deleteItemToCard={deleteItemToCard} key={el.id} />
        ))}
      </div>
      <h3>Precio: ${totalPrice}</h3>
      <button>Comprar</button>
    </>
  );
};
