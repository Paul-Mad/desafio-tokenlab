import firebase from "firebase/app";
import "firebase/firebase-database";
import "firebase/auth";

const config = JSON.parse(`${process.env.REACT_APP_API_KEY}`);

// Initialize Firebase
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
