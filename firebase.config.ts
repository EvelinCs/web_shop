// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCkV54Gk3IJ52JTstn0EARNITwAMoQnTUI",
  authDomain: "pet-shop-bffc6.firebaseapp.com",
  projectId: "pet-shop-bffc6",
  storageBucket: "pet-shop-bffc6.appspot.com",
  messagingSenderId: "649641291042",
  appId: "1:649641291042:web:4b6de90c087231f3c9097b"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);