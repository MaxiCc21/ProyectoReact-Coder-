import React, { useState, useEffect } from "react";

export const useCard = (props) => {
  const [CardList, setCardList] = useState([]);

  const addItemCardList = (item) => {
    setCardList([...CardList, item]);
    console.log("Nuevo item agregado", CardList);
  };

  const deleteItemCardList = (idItem) => {
    let isDelete = window.confirm(`¿Seguro que desea eliminar ${idItem}`);
    if (isDelete) {
      let resDelete = CardList.filter((el) => el.id !== idItem);
      setCardList(resDelete);
    }
  };

  return {
    CardList,
    addItemCardList,
    deleteItemCardList,
  };
};
