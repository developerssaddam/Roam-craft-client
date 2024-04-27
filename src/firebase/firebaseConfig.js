import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChGQ2gUQcapLWJWgkwUdK9K1HH6CnraMQ",
  authDomain: "tourism-management-syste-e8d0a.firebaseapp.com",
  projectId: "tourism-management-syste-e8d0a",
  storageBucket: "tourism-management-syste-e8d0a.appspot.com",
  messagingSenderId: "1064148192451",
  appId: "1:1064148192451:web:0a3072c404187200042676",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
