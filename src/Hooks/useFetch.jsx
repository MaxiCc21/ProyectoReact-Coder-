import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const useFetch = () => {

  const [db, setDb] = useState([]);
  const [singleItem, setSingleItem] = useState([]);

  const handleURL = (urlCategory, id=false) => {
    if (!id) {
      let url = `https://fakestoreapi.com/products/category/${urlCategory}`;
      return {url,id}
    } else {
      let url = `https://fakestoreapi.com/products/${id}`;
      return {url,id}
    }
  
  };

  const getAllData = async (urlCategory) => {
    let resURL = handleURL(urlCategory);
    let res = await fetch(resURL.url);
    let json = await res.json();
    setDb(json);
  };

  
  const getSingleData = async (itemId) => {
    let res = await fetch(`https://fakestoreapi.com/products/${itemId}`);
    let json = await res.json();
    setSingleItem(json);
  };

  return {
    getAllData,
    getSingleData,
    db,
    singleItem
  };
};
