import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDS-t3-vUbhW55bM6sVh3SW54Q368ifN0c",
  authDomain: "store-react-coder.firebaseapp.com",
  projectId: "store-react-coder",
  storageBucket: "store-react-coder.appspot.com",
  messagingSenderId: "136606388440",
  appId: "1:136606388440:web:1c6a71d238b596c16207ad"
};

// initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
