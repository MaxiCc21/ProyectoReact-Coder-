import React, { useState, useEffect } from "react";
import { useGaleriFetch } from "../../Hooks/useGaleriaFetch";
import Card from "./Card";
import "./GaleriaApp.css";

export default function GaleriaApp({ methodCardWidget, urlCategory }) {
  let { handleURL, getData, db } = useGaleriFetch(urlCategory);

  useEffect(() => {
    console.log(db);
  }, []);

  // useEffect(() => {
  //   handleURL("men's clothing");
  //   fetch(myURL)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       let ll = [];
  //       json.map((el) => {
  //         // console.log(el);
  //         if (el.price < 30) {
  //           // console.log("filtro", el);
  //           ll = [...ll, el];
  //         }
  //       });
  //       return ll;
  //     })
  //     .then((db) => {
  //       // console.log(db);
  //       setDb(db);
  //     });
  // }, []);

  return (
    <div className="Galery-Container">
      {db.map((el) => (
        <Card key={el.id} el={el} methodCardWidget={methodCardWidget} />
      ))}
    </div>
  );
}
