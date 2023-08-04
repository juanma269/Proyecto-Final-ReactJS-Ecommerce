// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_YRHvTEFXTytWh91Hwd7pvLG2VpxiI8k",
  authDomain: "robyx-2c173.firebaseapp.com",
  projectId: "robyx-2c173",
  storageBucket: "robyx-2c173.appspot.com",
  messagingSenderId: "146596811991",
  appId: "1:146596811991:web:bd9c186f7421e742390c92",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
