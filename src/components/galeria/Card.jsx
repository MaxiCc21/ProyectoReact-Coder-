import React from "react";

const Card = ({ el, methodCardWidget, addItemCardList }) => {
  let { id, category, description, image, price, title } = el;
  let { itemListCard, setItemToCard, deleteItemToCard } = methodCardWidget;

  const createAndAppendNewItem = () => {
    setItemToCard(el);
  };

  return (
    <div className="box">
      <a href="#" onClick={createAndAppendNewItem}>
        <img alt="Imagen" src={image} />
        <h1>{title}</h1>
        <h2>{category}</h2>
        <p>{price}</p>
      </a>
    </div>
  );
};

export default Card;
