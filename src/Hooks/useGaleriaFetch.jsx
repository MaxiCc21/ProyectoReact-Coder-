import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const useGaleriFetch = (urlCategory) => {
  let [searchParams, setSearchParams] = useSearchParams();

  const [category, setCategory] = useState(null);
  const [priceFilter, setPriceFilter] = useState(null);
  const [db, setDb] = useState([]);

  useEffect(() => {
    setSearchParams({ category: urlCategory });
    // handleURL(urlCategory);
    getData(urlCategory);
  }, []);

  const handleURL = (urlCategory, filter = null) => {
    let url = `https://fakestoreapi.com/products/category/${urlCategory}`;
    if (!filter) {
      setCategory(urlCategory);
      return url;
    }
  };

  const getData = async (urlCategory) => {
    let resURL = await handleURL(urlCategory);

    let res = await fetch(resURL);
    let json = await res.json();
    console.log(json);
    setDb(json);
  };

  return {
    handleURL,
    getData,
    db,
  };
};
