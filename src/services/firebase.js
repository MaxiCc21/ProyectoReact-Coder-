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


const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
