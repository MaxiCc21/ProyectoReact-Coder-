import React from "react";
import "./footer.css";

const Footer = (props) => {
  return (
    <footer class="footer-container">
      <div class="footer-container-content">
        <div class="footer-container-socialMedia">
          <a class="btn-footer" href="#index">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a class="btn-footer" href="#index">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a class="btn-footer" href="#index">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a class="btn-footer" href="#index">
            <i class="fa-brands fa-whatsapp"></i>
          </a>
        </div>

        <div class="footer-content-others">
          <div class="others-box">
            <h5>Productos</h5>
            <ul>
              <li>
                <a href="#index">Ropa</a>
              </li>
              <li>
                <a href="#index">Calzado</a>
              </li>
              <li>
                <a href="#index">Accesorios</a>
              </li>
              <li>
                <a href="#index">Productos Destacados</a>
              </li>
              <li>
                <a href="#index">Lorem</a>
              </li>
            </ul>
          </div>
          <div class="others-box">
            <h5>Asistencia</h5>
            <ul>
              <li>
                <a href="#index">¿Necesitas ayuda?</a>
              </li>
              <li>
                <a href="#index">Dudas Frecuentes</a>
              </li>
              <li>
                <a href="#index">Devoluciones</a>
              </li>
              <li>
                <a href="#index">Pago</a>
              </li>
              <li>
                <a href="#index">Envio</a>
              </li>
            </ul>
          </div>
          <div class="others-box">
            <h5>
              Informacion <br />
              de la empresa
            </h5>
            <ul>
              <li>
                <a href="#index">Sobre nosotros</a>
              </li>
              <li>
                <a href="#index">Informacion Corpotativa</a>
              </li>
              <li>
                <a href="#index">Trabaja con nosotos</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
