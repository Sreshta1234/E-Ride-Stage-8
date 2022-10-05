import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCjZdGtWNiBSYcH099vwtzsLzx7MX8wMvE",
  authDomain: "e-ride-app-a3f06.firebaseapp.com",
  projectId: "e-ride-app-a3f06",
  storageBucket: "e-ride-app-a3f06.appspot.com",
  messagingSenderId: "1094512469438",
  appId: "1:1094512469438:web:f97bcf7621c6c20f8485ef"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
