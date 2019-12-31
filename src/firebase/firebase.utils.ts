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

export interface IUserData {
  displayName: string;
  email: string;
  createdAt: string;
}

export const createUserProfileDocument = async (
  userAuth: firebase.User | null,
  additionalData: {} = {}
) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
