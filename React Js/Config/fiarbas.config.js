// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXDSfi3OWD0vLVXqGie_JIR8erGMjo-NU",
  authDomain: "myntra-971492.firebaseapp.com",
  projectId: "myntra-971492",
  storageBucket: "myntra-971492.firebasestorage.app",
  messagingSenderId: "79145912540",
  appId: "1:79145912540:web:f8e48e8d978bf564420c19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
