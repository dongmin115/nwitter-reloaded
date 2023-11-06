import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUcsD5gMJ0tQR4Y-bNB3o7pU3crCnVxBQ",
  authDomain: "nwitter-reloaded-79a85.firebaseapp.com",
  projectId: "nwitter-reloaded-79a85",
  storageBucket: "nwitter-reloaded-79a85.appspot.com",
  messagingSenderId: "930564720380",
  appId: "1:930564720380:web:20d6f9b9dfe2dfb1f4b979"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);