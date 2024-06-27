// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEMQH93PWKWK6eErsdCdyvlXR681L5cBc",
  authDomain: "martivi-web-app.firebaseapp.com",
  projectId: "martivi-web-app",
  storageBucket: "martivi-web-app.appspot.com",
  messagingSenderId: "160527499121",
  appId: "1:160527499121:web:5113edc09de2be659dc0d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;