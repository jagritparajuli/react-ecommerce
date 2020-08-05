import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAlfSA11fiUhFJRrRwsbLhqVH2JQwCr3yA",
  authDomain: "crwn-db-979b2.firebaseapp.com",
  databaseURL: "https://crwn-db-979b2.firebaseio.com",
  projectId: "crwn-db-979b2",
  storageBucket: "crwn-db-979b2.appspot.com",
  messagingSenderId: "607687834011",
  appId: "1:607687834011:web:5ec91a413c935ca924493e",
  measurementId: "G-YXMDXF4H79",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
