import { useState } from "react";

export const useCard = (props) => {
  const [itemListCard, setItemListCard] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const setItemToCard = (item) => {
    setItemListCard([...itemListCard, item]);
    setTotalPrice(totalPrice + item.price);
  };

  const deleteItemToCard = (item) => {
    console.log("Borrar");
    let isDelete = window.confirm(`¿Seguro que desea eliminar ${item.id}`);
    if (isDelete) {
      let resDelete = itemListCard.filter((el) => el.id !== item.id);
      setItemListCard(resDelete);
      setTotalPrice(totalPrice - item.price);
    }
  };

  return { itemListCard, setItemToCard, deleteItemToCard, totalPrice };
};
