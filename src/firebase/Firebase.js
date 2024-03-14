import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRL3HhPz0S1q-qZt_bqp4K87cv8vOJ5ik",
  authDomain: "fsimple-firebase-auth.firebaseapp.com",
  projectId: "fsimple-firebase-auth",
  storageBucket: "fsimple-firebase-auth.appspot.com",
  messagingSenderId: "626712416445",
  appId: "1:626712416445:web:5253f98e9a1e6be4b1e7d4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


//Hide this in a .env file or something