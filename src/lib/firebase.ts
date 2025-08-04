// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqHCGYsDZrMLTp9Xig5sMMdnWI_f-TCUk",
  authDomain: "meghcreations-98639.firebaseapp.com",
  projectId: "meghcreations-98639",
  storageBucket: "meghcreations-98639.firebasestorage.app",
  messagingSenderId: "528168904684",
  appId: "1:528168904684:web:db8bfa8a13a4901061c2c9",
  measurementId: "G-QD81LZM86S"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}


export { app, analytics };
