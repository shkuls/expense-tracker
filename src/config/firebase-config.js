// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth'//

import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoJvkSmSXOc7wcZMj_Hv2jVidqTmx2Rnk",
  authDomain: "expense-tracker-cd1bf.firebaseapp.com",
  projectId: "expense-tracker-cd1bf",
  storageBucket: "expense-tracker-cd1bf.appspot.com",
  messagingSenderId: "1014782566820",
  appId: "1:1014782566820:web:92d8ada436bb22fa63e131"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) //
export const provider = new GoogleAuthProvider() //
export const db=  getFirestore(app)
//firebase login
//firebase init
//firebase deploy