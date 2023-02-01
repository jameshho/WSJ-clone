// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = firebasePrivate
   
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET_ID,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
  }
console.log(firebaseConfig)
// const firebaseConfig = {
//     apiKey: "AIzaSyASR-mQcR3risneOjcG_Ocy0VLEkPpPCC8",
//     authDomain: "auth-february.firebaseapp.com",
//     projectId: "auth-february",
//     storageBucket: "auth-february.appspot.com",
//     messagingSenderId: "1076451497286",
//     appId: "1:1076451497286:web:ed603afbc219171aab0147"
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app)