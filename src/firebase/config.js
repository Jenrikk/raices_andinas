// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARzAbH4Go8-2LOrJqbAdkSnbikD4gKUIA",
  authDomain: "react-cursos-1f0cd.firebaseapp.com",
  projectId: "react-cursos-1f0cd",
  storageBucket: "react-cursos-1f0cd.appspot.com",
  messagingSenderId: "601898251313",
  appId: "1:601898251313:web:215a0dde55287af9b19110"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);