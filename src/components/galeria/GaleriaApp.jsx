import React, { useState, useEffect } from "react";
import { useFetch } from "../../Hooks/useFetch";
import Card from "./Card";
import "./GaleriaApp.css";

export default function GaleriaApp({ methodCardWidget, urlCategory,params  }) {
  let { handleURL, getData, db } = useFetch(urlCategory);

  useEffect(() => {
    
    // console.log(db);
  }, []);


  return (
    <div className="Galery-Container">
      {db.map((el) => (
        <Card key={el.id} el={el} methodCardWidget={methodCardWidget} />
      ))}
    </div>
  );
}
