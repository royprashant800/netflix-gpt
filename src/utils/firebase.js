// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqlwr9madExyjK3JuV_OGlNBW0dqraJTw",
  authDomain: "netflixgpt-10554.firebaseapp.com",
  projectId: "netflixgpt-10554",
  storageBucket: "netflixgpt-10554.appspot.com",
  messagingSenderId: "216048753315",
  appId: "1:216048753315:web:f7c2bbae59b76ce4973d16",
  measurementId: "G-CWDQP6L65H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();