import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA2sIpqA_sSZGKZgzNdWUE6BuqgEtklbAU",
  authDomain: "crwn-db-30d6a.firebaseapp.com",
  databaseURL: "https://crwn-db-30d6a.firebaseio.com",
  projectId: "crwn-db-30d6a",
  storageBucket: "crwn-db-30d6a.appspot.com",
  messagingSenderId: "704445359219",
  appId: "1:704445359219:web:4df0f8415bc91e238f3606",
  measurementId: "G-NKZ6YJ1X4Y"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
