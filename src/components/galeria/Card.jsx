import React from "react";
import { Link } from "react-router-dom";

const Card = ({ el, methodCardWidget }) => {
  let { id, category, description, image, price, title } = el;
  let { setItemToCard } = methodCardWidget;

  return (
    <div className="box">
      <Link
        to="#"
        onClick={() => {
          setItemToCard(el, price);
        }}
      >
        {" "}
        <img alt="Imagen" src={image} />
        <h1>{title}</h1>
        <h2>{category}</h2>
        <p>{price}</p>
      </Link>
    </div>
  );
};

export default Card;
