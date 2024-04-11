// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSg9lu15Qf-kC07QaRT7sbbSwMRKnAJY4",
  authDomain: "moviemate-998ef.firebaseapp.com",
  projectId: "moviemate-998ef",
  storageBucket: "moviemate-998ef.appspot.com",
  messagingSenderId: "987633182922",
  appId: "1:987633182922:web:47321e36e88ecfc7442c33",
  measurementId: "G-JB7X25E05J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(); 