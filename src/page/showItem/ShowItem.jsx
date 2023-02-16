import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import "./ShowItem.css";
  import { Form, useParams } from "react-router-dom";
  // import { useCardWidget } from "../../Hooks/useCardWidgeth";
  import { useFetch } from "../../Hooks/useFetch";
 
  const ShowItem = ({methodCardWidget}) => {
    const [quantity, setQuantity] = React.useState(1);
    let { setItemToCard } = methodCardWidget;
    let { itemId } = useParams();
    
    let {getSingleData,singleItem} = useFetch()

    useEffect(() => {
      loader(itemId)
     }, []);
   

    const loader =  (itemId) => {
      let item =  getSingleData(itemId)
      return item
    }

     

    const handleChange = (event) => {

      setQuantity(event.target.value);
      console.log(event.target.value);
    };
  
    const mySelectStyle = {
      height: "50px",
      width: "111px",
    };
    const mySubmitButton = {
      height: "50px",
    };
  
    return (
  
      <div className="section-ShowItem">
     
        <div className="item-section-ShowItem">
          <div className="item-left-area">
            <img alt="img" src="https://dummyimage.com/200x200/000/fff" />
            <img alt="img" src="https://dummyimage.com/200x200/000/fff" />
            <img alt="img" src="https://dummyimage.com/200x200/000/fff" />
          </div>
          <div className="item-center-area">
            <img alt="img" src={singleItem.image}/> 
          </div>
          <div className="item-right-area">
            <div className="item-rigt-description-area">
              <div
                style={{
                  height: "70%",
                }}
              >
                <h1>{singleItem.title}</h1>
                <p>Descripcion del producto</p>
              </div>
              <div
                style={{
                  height: "calc(100% - 70%)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span>Precio: ${singleItem.price * quantity}</span>
              </div>
            </div>
            <div className="item-right-form-area">
              <FormControl method="POST">
                <InputLabel id="demo-simple-select-label">Cantidad</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={quantity}
                  label="Cantidad"
                  onChange={handleChange}
                  sx={mySelectStyle}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
              <Button onClick={() => { setItemToCard(singleItem,quantity) }} variant="contained" sx={mySubmitButton}>
                Agregar al carrito
              </Button>

            </div>
          </div>
  
        </div>
      </div>
    );
  };
  
  export default ShowItem;
  