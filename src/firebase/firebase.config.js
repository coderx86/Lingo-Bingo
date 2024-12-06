// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjlHJkmFTMZ5RecskG5b6_lXOsC71qF00",
  authDomain: "assignment-10-c51c1.firebaseapp.com",
  projectId: "assignment-10-c51c1",
  storageBucket: "assignment-10-c51c1.firebasestorage.app",
  messagingSenderId: "661217633889",
  appId: "1:661217633889:web:46cfaa257a68d3331f6c20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;