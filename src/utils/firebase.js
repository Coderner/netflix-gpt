// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArt2cea8aC_bnOPKm4bUDhINgmBtDAYIA",
  authDomain: "netflix-gpt-7b4ae.firebaseapp.com",
  projectId: "netflix-gpt-7b4ae",
  storageBucket: "netflix-gpt-7b4ae.appspot.com",
  messagingSenderId: "762733444229",
  appId: "1:762733444229:web:9e445942dfb3e803b9fdec",
  measurementId: "G-1WCMNM1BHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);