import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interview-ai-3acd3.firebaseapp.com",
  projectId: "interview-ai-3acd3",
  storageBucket: "interview-ai-3acd3.firebasestorage.app",
  messagingSenderId: "887783252799",
  appId: "1:887783252799:web:90d3c64ebb070c292ae98a",
  measurementId: "G-1EYR2KMEEX"
};

// Initialize Firebase
console.log(import.meta.env);
console.log(import.meta.env.VITE_FIREBASE_APIKEY);
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export {provider, auth};
