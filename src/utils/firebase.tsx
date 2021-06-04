import firebase from "firebase/app";
import "firebase/firebase-database";
import "firebase/auth";

const config = {
};

// Initialize Firebase
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
