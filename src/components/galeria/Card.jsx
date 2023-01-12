import React from "react";

const Card = ({ el }) => {
  let { category, description, image, price, title } = el;
  return (
    <div className="box">
      <a href="#">
        <img alt="Imagen" src={image} />
        <h1>{title}</h1>
        <h2>{category}</h2>
        <p>{price}</p>
      </a>
    </div>
  );
};

export default Card;