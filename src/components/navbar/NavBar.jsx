import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import CardWidget from "../CardWidget/CardWidget";
import "./navbar.css";

function NavBar({ methodCardWidget }) {
  let { itemListCard, setItemToCard, deleteItemToCard } = methodCardWidget;

  return (
    <header id="nav" className="main-header">
      <Link className="main-logo" to="/">
        Roof
      </Link>
      <nav className="main-nav">
        <div className="nav-links">
          <NavLink className="link-item" to="/ropa">
            Ropa
          </NavLink>
          <NavLink className="link-item" to="/joyas">
            Calzado
          </NavLink>
          <NavLink className="link-item" to="/ropa">
            Accesorios
          </NavLink>
          <NavLink className="link-item" to="/ropa">
            Usuario
          </NavLink>

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
