
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyAaPkq3v9fstkwQtN96MiEk1WHrWHBhsUI",
  authDomain: "blogproject-eb957.firebaseapp.com",
  projectId: "blogproject-eb957",
  storageBucket: "blogproject-eb957.appspot.com",
  messagingSenderId: "1082467190865",
  appId: "1:1082467190865:web:afd9981c89012447a09070"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const firestore = getFirestore(app);