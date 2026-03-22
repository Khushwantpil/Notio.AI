
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "authexamnotes-93e26.firebaseapp.com",
  projectId: "authexamnotes-93e26",
  storageBucket: "authexamnotes-93e26.firebasestorage.app",
  messagingSenderId: "787822211232",
  appId: "1:787822211232:web:faa197531c9a0b59e919c5"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export { auth, provider };