import React, { useState, useEffect } from "react";
import CardWidget from "../CardWidget/CardWidget";
import "./navbar.css";

function NavBar({ methodCardWidget }) {
  let { itemListCard, setItemToCard, deleteItemToCard } = methodCardWidget;

  return (
    <header id="nav" className="main-header">
      <strong className="main-logo">Roof</strong>
      <nav className="main-nav">
        <div className="nav-links">
          <a className="link-item" href="#nav">
            Ropa
          </a>
          <a className="link-item" href="#nav">
            Calzado
          </a>
          <a className="link-item" href="#nav">
            Accesorios
          </a>
          <a className="link-item" href="#nav">
            Usuario
          </a>

          <CardWidget totalItems={itemListCard.length} />
        </div>
      </nav>
      <button id="button-menu" className="button-menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

export default NavBar;
