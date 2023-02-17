import React, { useState, useEffect } from "react";

const ModalItem = ({ el: data, deleteItemToCard, setTotalPrice }) => {
  return (
    <div className="modal-item">
      <img alt={data.title} src={data.image} />
      <div className="modal-infoArea">
        <p>{data.title}</p>
        <p>${data.newPrice} X {data.q}</p>
      </div>
      <button
        onClick={() => {
          deleteItemToCard(data);
        }}
      >
        X
      </button>
    </div>
  );
};

export default ModalItem;
