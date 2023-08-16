import { initializeApp } from "firebase/app";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCvAjz4gYMZGbzx3bsAAG9ZM2UqDWe-mN4",
  authDomain: "inkubusfin.firebaseapp.com",
  projectId: "inkubusfin",
  storageBucket: "inkubusfin.appspot.com",
  messagingSenderId: "1020578969813",
  appId: "1:1020578969813:web:df06faedf96ae508ed4a5c",
  measurementId: "G-62XCSJYWPM",
};

export const app = initializeApp(firebaseConfig);