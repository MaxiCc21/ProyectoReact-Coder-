import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./GaleriaApp.css";

export default function GaleriaApp({ methodCardWidget }) {
  const [db, setDb] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((json) => setDb(json));
  }, []);

  return (
    <div className="Galery-Container">
      {db.map((el) => (
        <Card key={el.id} el={el} methodCardWidget={methodCardWidget} />
      ))}
    </div>
  );
}
