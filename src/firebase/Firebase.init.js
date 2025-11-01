// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtailC3PSMFpZ-PyE4JxWNqjKXfZGLzL8",
  authDomain: "react-firebase-authinteg-69ad1.firebaseapp.com",
  projectId: "react-firebase-authinteg-69ad1",
  storageBucket: "react-firebase-authinteg-69ad1.firebasestorage.app",
  messagingSenderId: "445069246933",
  appId: "1:445069246933:web:6ce3e38ebd0c5b62e0bd5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
