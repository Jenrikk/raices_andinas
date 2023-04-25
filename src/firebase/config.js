// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe-E9TjvMRgXob1h_EgrXJWxo9x7hUPJY",
  authDomain: "raices-c29db.firebaseapp.com",
  projectId: "raices-c29db",
  storageBucket: "raices-c29db.appspot.com",
  messagingSenderId: "450282279094",
  appId: "1:450282279094:web:e3da6261a901ade5e89617"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
export const FirebaseStorage = getStorage(FirebaseApp);