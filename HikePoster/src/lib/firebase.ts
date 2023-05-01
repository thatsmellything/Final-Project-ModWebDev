// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd5LNvH6iIS8EzYdKCrOmXfL6FjJA07bc",
  authDomain: "finalproject-10d35.firebaseapp.com",
  projectId: "finalproject-10d35",
  storageBucket: "finalproject-10d35.appspot.com",
  messagingSenderId: "1017015914216",
  appId: "1:1017015914216:web:4fef4ee2e3ec2dcb8a035d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const rtdb = getDatabase(app);