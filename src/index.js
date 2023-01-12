import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar.jsx";
import GaleriaApp from "./components/galeria/GaleriaApp";
// import ItemListContainer from "./components/itemListContainer/ItemListContainer.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar />
    <GaleriaApp />
    {/* <ItemListContainer msj={"Hola, como estas Bienvenido :)"} /> */}
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
