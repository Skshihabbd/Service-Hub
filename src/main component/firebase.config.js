// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXiNE8AuzJX9KIkuXf40aCXh2gHDz0Q3E",
  authDomain: "assignment-10-f6df8.firebaseapp.com",
  projectId: "assignment-10-f6df8",
  storageBucket: "assignment-10-f6df8.appspot.com",
  messagingSenderId: "701987794928",
  appId: "1:701987794928:web:1c0a1d568514998af47735"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;