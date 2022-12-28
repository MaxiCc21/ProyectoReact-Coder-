import React from "react";

const CardWidget = ({ totalItems }) => {
  return (
    <a className="link-item shop-Widget" href="#nav">
      Carrito <span>{totalItems}</span>
    </a>
  );
};

export default CardWidget;
