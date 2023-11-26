import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEFz3tIZ3s1vLkBCmx3cb65EQjLZtpOQg",
  authDomain: "chatgpt-clone-9a500.firebaseapp.com",
  projectId: "chatgpt-clone-9a500",
  storageBucket: "chatgpt-clone-9a500.appspot.com",
  messagingSenderId: "1059846784695",
  appId: "1:1059846784695:web:3d70bb90057869ed24ef32"
};

// Initialize Firebase
export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);