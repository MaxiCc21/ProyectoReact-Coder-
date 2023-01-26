import React from "react";
import { Link } from "react-router-dom";

const CardWidget = ({ totalItems, openModal }) => {
  return (
    <Link className="link-item shop-Widget" onClick={openModal}>
      Carrito <span>{totalItems}</span>
    </Link>
  );
};

export default CardWidget;
