import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrPh3nVUYNjUCykKS9O0_U9l-2YwprTzY",
  authDomain: "vite-contact-app-e8c07.firebaseapp.com",
  projectId: "vite-contact-app-e8c07",
  storageBucket: "vite-contact-app-e8c07.firebasestorage.app",
  messagingSenderId: "1053621787092",
  appId: "1:1053621787092:web:8d22bcdf412cd08ffcde41"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);