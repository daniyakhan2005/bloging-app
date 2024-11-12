// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDhPP0BE85LToC8JcnMwjE1P55HEJIIhbQ",
  authDomain: "blogingapp-2005.firebaseapp.com",
  projectId: "blogingapp-2005",
  storageBucket: "blogingapp-2005.firebasestorage.app",
  messagingSenderId: "905386975608",
  appId: "1:905386975608:web:a1ffdcded605d1341c688d",
  measurementId: "G-TL2MF6WTC3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  auth = getAuth ();
export const provider = new GoogleAuthProvider();
export const  storage = getStorage ()
export const  db = getFirestore (app)

