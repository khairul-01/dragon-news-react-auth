// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDIuQKfmT2PfjGB4Ve9xTld-87uYCZwd0",
  authDomain: "dragon-news-react-auth-cb849.firebaseapp.com",
  projectId: "dragon-news-react-auth-cb849",
  storageBucket: "dragon-news-react-auth-cb849.appspot.com",
  messagingSenderId: "146156662708",
  appId: "1:146156662708:web:335513233f1fe9c3134ce1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;