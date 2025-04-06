// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbZdnxjxL_mj_jp5-UIdPxEJWYA39f0oc",
  authDomain: "contact-app-8d81f.firebaseapp.com",
  projectId: "contact-app-8d81f",
  storageBucket: "contact-app-8d81f.firebasestorage.app",
  messagingSenderId: "702741480072",
  appId: "1:702741480072:web:a21fb04b6f9fe2d662553d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db =  getFirestore(app);