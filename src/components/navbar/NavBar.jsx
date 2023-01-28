import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CardWidget from "../CardWidget/CardWidget";
import "./navbar.css";

function NavBar({ methodCardWidget, openModal }) {
  let { itemListCard } = methodCardWidget;
  // Ready
  return (
    <header id="nav" className="main-header">
      <Link className="main-logo" to="/">
        Roof
      </Link>
      <nav className="main-nav">
        <div className="nav-links">
          <Link className="link-item" to="/ropa">
            Ropa
          </Link>
          <Link className="link-item" to="/ropa">
            Calzado
          </Link>
          <Link className="link-item" to="/ropa">
            Accesorios
          </Link>
          <Link className="link-item" to="/ropa">
            Usuario
          </Link>

          <CardWidget totalItems={itemListCard.length} openModal={openModal} />
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
