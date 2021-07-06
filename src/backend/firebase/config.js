import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCPrVyFd6x9rDLfZTUNHICabldl7YKm3o",
  authDomain: "boookler.firebaseapp.com",
  projectId: "boookler",
  storageBucket: "boookler.appspot.com",
  messagingSenderId: "909598627349",
  appId: "1:909598627349:web:d51f5aa9418878b545e01c",
  measurementId: "G-PECP51FGDT",
};

firebase.initializeApp(firebaseConfig);


export default firebase;
