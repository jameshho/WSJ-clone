// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebasePrivate from "./firebasePrivate";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = firebasePrivate
   
// const firebaseConfig = {
//     apiKey: "AIzaSyASR-mQcR3risneOjcG_Ocy0VLEkPpPCC8",
//     authDomain: "auth-february.firebaseapp.com",
//     projectId: "auth-february",
//     storageBucket: "auth-february.appspot.com",
//     messagingSenderId: "1076451497286",
//     appId: "1:1076451497286:web:ed603afbc219171aab0147"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app