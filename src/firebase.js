import firebase from 'firebase/app' // doing import firebase from 'firebase' or import * as firebase from firebase is not good practice.
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import Axios from 'axios';

var firebaseConfig = {
    apiKey: "AIzaSyB8dftJ6bOSTZ8Y7Pe3B_INlUK5oiby4h0",
    authDomain: "portfolio-bfdab.firebaseapp.com",
    projectId: "portfolio-bfdab",
    storageBucket: "portfolio-bfdab.appspot.com",
    messagingSenderId: "118909895459",
    appId: "1:118909895459:web:cd08a6bfc18652b67a8296",
    measurementId: "G-R5YWVCYH1L"
  };
  // Initialize Firebase

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export {Axios, database}