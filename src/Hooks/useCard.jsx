import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const useCard = (props) => {
  const [itemListCard, setItemListCard] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
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
      showDenyButton: true,
      denyButtonText: "Eliminar",
    });

    return res.value;
  };

  const setItemToCard = (item) => {
    setItemListCard([...itemListCard, item]);
    setTotalPrice(totalPrice + item.price);
  };

  const deleteItemToCard = async (item) => {
    console.log("Borrar");
    let isDelete = await sweetalert2();
    console.log("respuesta", isDelete);
    if (isDelete) {
      Toast.fire({
        icon: "success",
        title: "Producto elminiado",
      });
      let resDelete = itemListCard.filter((el) => el.id !== item.id);
      setItemListCard(resDelete);
      setTotalPrice(totalPrice - item.price);
    }
  };

  return { itemListCard, setItemToCard, deleteItemToCard, totalPrice };
};
