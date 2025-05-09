// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgRi1f5_8Bbe-N-m-8BARb9267ffB1bvU",
  authDomain: "evma-web-app.firebaseapp.com",
  projectId: "evma-web-app",
  storageBucket: "evma-web-app.firebasestorage.app",
  messagingSenderId: "1073351956182",
  appId: "1:1073351956182:web:9d75c2a1c15bc40f845b77",
  measurementId: "G-0CP7GJRYR7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
