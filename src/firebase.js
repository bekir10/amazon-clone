import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDvHOii7QtvzXuY-hP7pwW6u5swCYb76go",
  authDomain: "challenge-699d4.firebaseapp.com",
  projectId: "challenge-699d4",
  storageBucket: "challenge-699d4.appspot.com",
  messagingSenderId: "622522174039",
  appId: "1:622522174039:web:61cf37737489eeb1e6b112",
  measurementId: "G-7TMP0SBML9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
