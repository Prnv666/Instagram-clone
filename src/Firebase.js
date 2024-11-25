
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAQsyh6NT-bs-Vjobv_FKvJpqLtBAynLwA",
  authDomain: "instagram-clone-924ec.firebaseapp.com",
  projectId: "instagram-clone-924ec",
  storageBucket: "instagram-clone-924ec.firebasestorage.app",
  messagingSenderId: "416027329017",
  appId: "1:416027329017:web:aecc94c1ab71000d82bd28",
  measurementId: "G-ZRF5J71QKV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();