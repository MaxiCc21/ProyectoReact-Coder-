import React, { useState, useEffect } from "react";
import { useFetch } from "../../Hooks/useFetch";
import Card from "./Card";
import "./GaleriaApp.css";

import { useFireBase } from "../../Hooks/useFireBase";

export default function GaleriaApp({ methodCardWidget, urlCategory,params }) {
  // let { getAllData, db } = useFetch();
  let {listItem, getData} = useFireBase()


  useEffect(() => {
    loader(urlCategory)

  }, []);

  const loader = (category) => { 
    let RES = getData(category)
   }
  
  return (
    <div className="Galery-Container">
      {listItem.map((el) => (
        <Card key={el.id} el={el} methodCardWidget={methodCardWidget} />
      ))}
    </div>
  );
}
