// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiDIZqrf3qlOoByKnyr8rbgY42EXkCwsE",
  authDomain: "kakeibo-4edc6.firebaseapp.com",
  projectId: "kakeibo-4edc6",
  storageBucket: "kakeibo-4edc6.appspot.com",
  messagingSenderId: "17838012785",
  appId: "1:17838012785:web:a2c0d31448744957a2ded0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };