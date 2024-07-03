// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-R60Y4tkS7gxqfGzWp2zEnwYmCcQKYEw",
  authDomain: "mashroom-4bb86.firebaseapp.com",
  projectId: "mashroom-4bb86",
  storageBucket: "mashroom-4bb86.appspot.com",
  messagingSenderId: "434798605102",
  appId: "1:434798605102:web:22f91d74dcf410b4ffc0bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
