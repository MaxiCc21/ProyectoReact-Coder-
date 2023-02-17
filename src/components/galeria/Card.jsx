import React from "react";
import { Link } from "react-router-dom";

const Card = ({ el }) => {
  let { id, category, description, image, price, title } = el;

  return (
    <div className="box">
      <Link to={ `/ropa/${category}/${id}`} >
        <img alt="Imagen" src={image} />
        <h1>{title}</h1>
        <h2>{category}</h2>
        <p>{price}</p>
      </Link>
    </div>
  );
};

export default Card;
