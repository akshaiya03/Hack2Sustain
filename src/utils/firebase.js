// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjfqM5eAGRIqww8b4GYyvPB7-lYEK41_U",
  authDomain: "hack2sustain.firebaseapp.com",
  projectId: "hack2sustain",
  storageBucket: "hack2sustain.appspot.com",
  messagingSenderId: "462737900923",
  appId: "1:462737900923:web:d0b2851cda1c3bdb4729de",
  measurementId: "G-WQ8ZQ00DMG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();