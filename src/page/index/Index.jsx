import React, { useState, useEffect } from "react";
import { collection, doc,getDoc,getDocs,getFirestore, query, where } from "firebase/firestore";
import {db}  from "../../services/firebase";


const Index = (props) => {
  
  const [productos, setProductos] = useState([]);

  return (
    <section>
      <h1>Index</h1>
      <p>
        te tipo de funcionalidad se conseguía previamente haciendo uso de
        XMLHttpRequest. Fetch proporciona una alternativa mejor que puede ser
        empleada fácilmente por otras tecnologías como Service Workers (en-US).
        Fetch también aporta un único lugar lógico en el que definir otros
        conceptos relacionados con HTTP como CORS y extensiones para HTTP. La
        especificación fetch difiere de JQuery.ajax() en dos formas principales:
        El objeto Promise devuelto desde fetch() no será rechazado con un estado
        de error HTTP incluso si la respuesta es un error HTTP 404 o 500. En
        cambio, este se resolverá normalmente (con un estado ok configurado a
        false), y este solo sera rechazado ante un fallo de red o si algo
        impidió completar la solicitud. Por defecto, fetch no enviará ni
        recibirá cookies del servidor, resultando en peticiones no autenticadas
        si el sitio permite mantentener una sesión de usuario (para mand
      </p>
    </section>
  );
};

export default Index;
