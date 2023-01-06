import React from "react";
import BasicExample from "./Cards/Card.jsx";
import "./ShopGallery.css";

const ShopGallery = (props) => {
  return (
    <section className="shopGallety-container">
      <div>
        <BasicExample />
      </div>
    </section>
  );
};

export default ShopGallery;
