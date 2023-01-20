import { useState } from "react";

export const useCard = (props) => {
  const [itemListCard, setItemListCard] = useState([]);

  const setItemToCard = (newItemData) => {
    setItemListCard([...itemListCard, newItemData]);
  };

  const deleteItemToCard = (itemID) => {
    console.log("Borrar");
    let isDelete = window.confirm(`¿Seguro que desea eliminar ${itemID}`);
    if (isDelete) {
      let resDelete = itemListCard.filter((el) => el.id !== itemID);
      setItemListCard(resDelete);
    }
  };

  return { itemListCard, setItemToCard, deleteItemToCard };
};
