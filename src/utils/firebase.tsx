import firebase from "firebase/app";
import "firebase/firebase-database";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBYjk_7FYqZalovlapPd_6COHwY1BZnvV4",
  authDomain: "controle-eventos-7c1c0.firebaseapp.com",
  databaseURL: "https://controle-eventos-7c1c0-default-rtdb.firebaseio.com",
  projectId: "controle-eventos-7c1c0",
  storageBucket: "controle-eventos-7c1c0.appspot.com",
  messagingSenderId: "818365610984",
  appId: "1:818365610984:web:8ac85195e2124d48aa025d",
  measurementId: "G-N3VSE9PNLV",
};

// Initialize Firebase
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
