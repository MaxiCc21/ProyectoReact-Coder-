import React, { useEffect } from "react";
import "./navbar.css";
function NavBar(props) {
  useEffect(() => {
    const toggleButton = document.getElementById("button-menu");
    const navWrapper = document.getElementById("nav");

    toggleButton.addEventListener("click", () => {
      toggleButton.classList.toggle("close");
      navWrapper.classList.toggle("show");
    });

    navWrapper.addEventListener("click", (e) => {
      navWrapper.classList.remove("show");
      toggleButton.classList.remove("close");
    });
  }, []);

  return (
    <header className="main-header">
      <strong className="main-logo">Roof</strong>
      <nav id="nav" className="main-nav">
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
