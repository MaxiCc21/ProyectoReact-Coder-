import { collection, getDocs, query, where } from '@firebase/firestore';
import React, { useState, useEffect } from 'react';
import { db } from "../services/firebase";

export const useFireBase = () => {
    const [listItem, setListItem] = useState([]);
    const [singleItem, setSingleItem] = useState([]);

    const getData = async (category) => { 
        const queryRef = query(collection(db,"listaProducto"),
        where("category","==",`${category}`))
        const response = await getDocs(queryRef)
        
        setListItem(response.docs.map((doc) => (
          { 
          id: doc.id,
          ...doc.data()
         }
         )))
       }
  

       const getSingleData = async (id) => {
        const queryRef = query(collection(db,"listaProducto"),
        where("id","==",Number(id)))
      
        const response = await getDocs(queryRef)
        const data = response.docs[0]
        setSingleItem(
          {
          id: data.id,
          ...data.data()
         }
         )}
  

       return {
        listItem,
        singleItem,
        getData,
        getSingleData
       }


}
 