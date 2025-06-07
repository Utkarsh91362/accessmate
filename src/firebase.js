// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoLivRisDtsEbMizn83geUfiEL0-xSbgc",
  authDomain: "accessmate-59da8.firebaseapp.com",
  projectId: "accessmate-59da8",
  storageBucket: "accessmate-59da8.firebasestorage.app",
  messagingSenderId: "150577900098",
  appId: "1:150577900098:web:d16cfc18540ce57a839bdb"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
