// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRasxANzc2KCCd49ccDNrmEe2GGGqsNJM",
  authDomain: "connect-and-collabs-prod.firebaseapp.com",
  databaseURL: "https://connect-and-collabs-prod-default-rtdb.firebaseio.com",
  projectId: "connect-and-collabs-prod",
  storageBucket: "connect-and-collabs-prod.appspot.com",
  messagingSenderId: "443230918820",
  appId: "1:443230918820:web:7da435c6f8f4cf5cedee31",
  measurementId: "G-QJYJCP3WF7"
};

const firebaseConfige = {
  apiKey: "AIzaSyBRasxANzc2KCCd49ccDNrmEe2GGGqsNJM",
  authDomain: "connect-and-collabs-prod.firebaseapp.com",
  databaseURL: "https://connect-and-collabs-prod-default-rtdb.firebaseio.com",
  projectId: "connect-and-collabs-prod", // Add this line with your project ID
  storageBucket: "connect-and-collabs-prod.appspot.com",
  messagingSenderId: "443230918820",
  appId: "1:443230918820:web:7da435c6f8f4cf5cedee31",
  measurementId: "G-QJYJCP3WF7"
};

const app = initializeApp(firebaseConfige);
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const db = firestore;

export { db, firestore, auth, storage, app };