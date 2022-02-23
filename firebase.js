// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsOyxxkFS-5srEoP65RCGd5ZVdj3sej_c",
  authDomain: "nextjs-facebook-f7201.firebaseapp.com",
  projectId: "nextjs-facebook-f7201",
  storageBucket: "nextjs-facebook-f7201.appspot.com",
  messagingSenderId: "298098619105",
  appId: "1:298098619105:web:01147dd815c7a7259ebda0"
};

// Initialize Firebase
const app = !firebase.apps.length 
? firebase.initializeApp(firebaseConfig) 
: firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
// const app = initializeApp(firebaseConfig);