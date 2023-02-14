import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const useFetch = (urlCategory) => {
  let [searchParams, setSearchParams] = useSearchParams();

  const [category, setCategory] = useState(null);
  const [priceFilter, setPriceFilter] = useState(null);
  const [db, setDb] = useState([]);
  const [singleItem, setSingleItem] = useState();

  useEffect(() => {
    setSearchParams({ category: urlCategory });
    // handleURL(urlCategory);
    getData(urlCategory);
  }, []);

  const handleURL = (urlCategory, id = false) => {
    if (!id) {
      let url = `https://fakestoreapi.com/products/category/${urlCategory}`;
      return {url,id}
    } else {
      let url = `https://fakestoreapi.com/products/category/${urlCategory}/${id}`;
      return url
    }
  
  };

  const getData = async (urlCategory,id) => {
    let resURL = handleURL(urlCategory,id);
    console.log(resURL);
    let res = await fetch(resURL.url);
    let json = await res.json();
    console.log(json);
    setDb(json);
  };

  return {
    getData,
    db,
  };
};
