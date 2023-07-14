// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCodZM1HVmtKaCzm939f18gvMP5s_bQDfE",
  authDomain: "e-commerce-website-e012c.firebaseapp.com",
  projectId: "e-commerce-website-e012c",
  storageBucket: "e-commerce-website-e012c.appspot.com",
  messagingSenderId: "113372997326",
  appId: "1:113372997326:web:54a9f27a4081b0f707529f",
  measurementId: "G-G88JYXDXBR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);