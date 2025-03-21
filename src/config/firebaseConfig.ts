// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpGtZykCDOVdf_VUtp1rtXU8VYalk9REk",
  authDomain: "personal-portfolio-7e9bb.firebaseapp.com",
  projectId: "personal-portfolio-7e9bb",
  storageBucket: "personal-portfolio-7e9bb.firebasestorage.app",
  messagingSenderId: "1011352684889",
  appId: "1:1011352684889:web:d019c4dd6535c42a0b2448"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { app, db };