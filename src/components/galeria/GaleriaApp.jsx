import React, { useState, useEffect } from "react";
import { useFetch } from "../../Hooks/useFetch";
import Card from "./Card";
import "./GaleriaApp.css";

import { useFireBase } from "../../Hooks/useFireBase";
import Loader from "../loader/Loader";

export default function GaleriaApp({ methodCardWidget, urlCategory,params }) {
  // let { getAllData, db } = useFetch();
  let {listItem, getData} = useFireBase()
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    loader(urlCategory, setLoading)
  }, []);

  const loader = async (category,setLoading) => {
    setLoading(true)
    let RES = await getData(category)
    setLoading(false)
   }
  
 

  return (
    <>
    {loading && <Loader/>}
    <div className="Galery-Container">
    {listItem && listItem.map((el) => (
      <Card key={el.id} el={el} methodCardWidget={methodCardWidget} />
      
    ))}
  </div></>

  );
}
