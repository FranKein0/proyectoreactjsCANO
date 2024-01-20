// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOrxc9xJCcII79_9sNVfJt9y8sl-Hl5dU",
  authDomain: "rj-franciscocano.firebaseapp.com",
  projectId: "rj-franciscocano",
  storageBucket: "rj-franciscocano.appspot.com",
  messagingSenderId: "389815683587",
  appId: "1:389815683587:web:769c17a036df735cc81c36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)