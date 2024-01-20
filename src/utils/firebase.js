// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrpp_bZB2UVa94_vmhdnQNryvrsshNo-o",
  authDomain: "netflixgpt-e8778.firebaseapp.com",
  projectId: "netflixgpt-e8778",
  storageBucket: "netflixgpt-e8778.appspot.com",
  messagingSenderId: "276582467536",
  appId: "1:276582467536:web:6d1e210497abf448ad5bd5",
  measurementId: "G-HL35NGF31N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();