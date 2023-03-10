import { useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const useCard = (props) => {
  const [itemListCard, setItemListCard] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1100,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  const sweetalert2 = async () => {
    const MySwal = withReactContent(Swal);
    const res = await MySwal.fire({
      title: "Seguro que desea eliminar este producto?",
      showConfirmButton: false,
      showDenyButton: true,
      showCancelButton: true,
      denyButtonText: "Eliminar",
    });

    return res.value;
  };

  const setItemToCard = (item,q) => {
    let newItem = {...item}
    newItem.newPrice = (newItem.price * q)
    newItem.q = q
    setItemListCard([...itemListCard, newItem]);
    setTotalPrice(totalPrice + newItem.newPrice);
  };

  const deleteItemToCard = async (item) => {
    let isDelete = await sweetalert2();
    if (isDelete === false) {
      Toast.fire({
        icon: "success",
        title: "Producto elminiado",
      });
      let resDelete = itemListCard.filter((el) => el.id !== item.id);
      setItemListCard(resDelete);
      setTotalPrice(totalPrice - item.price*item.q);
    }
  };




  return {
    itemListCard,
    setItemToCard,
    deleteItemToCard,
    totalPrice,
  };
};
