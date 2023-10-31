// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBDpmyHW5SOgs0_ho6GWXgaIJKBfVirf5w",
    authDomain: "emajohn-firebase-auth-be3ea.firebaseapp.com",
    projectId: "emajohn-firebase-auth-be3ea",
    storageBucket: "emajohn-firebase-auth-be3ea.appspot.com",
    messagingSenderId: "270578585048",
    appId: "1:270578585048:web:7539c3dc69f20d544936ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;