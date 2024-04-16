// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7tCORGlaMmqDBa65CjQqzn5qK4nsnng0",
  authDomain: "heavensnest-2c328.firebaseapp.com",
  projectId: "heavensnest-2c328",
  storageBucket: "heavensnest-2c328.appspot.com",
  messagingSenderId: "592116260705",
  appId: "1:592116260705:web:e23ff4c66e0a239335ef20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;