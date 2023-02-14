import React, { useState, useEffect } from 'react';


export const useCardWidget = () => {
    const [card, setCard] = useState(null);


    window.sessionStorage.setItem("card","Juna")

const setItemToCard = (value) => { 
    setCard(value)
    const miStorage = window.sessionStorage;
    miStorage.setItem("card","Juna")
 }

return {card,setItemToCard};
}
 
