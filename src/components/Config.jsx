// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbWh6xBVRu-3TdZsWq_zu5Dge0v6cNwTA",
  authDomain: "login-24efc.firebaseapp.com",
  projectId: "login-24efc",
  storageBucket: "login-24efc.appspot.com",
  messagingSenderId: "627465667980",
  appId: "1:627465667980:web:935100eff7c473094302a9",
  measurementId: "G-8XBKDMGX5X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default app;
