import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAUdDk1TJQV8m8Isq6ng8_xFUGyhOXb6SQ",
    authDomain: "crud-19ec6.firebaseapp.com",
    projectId: "crud-19ec6",
    storageBucket: "crud-19ec6.appspot.com",
    messagingSenderId: "691202565111",
    appId: "1:691202565111:web:c02b04ac3c91b1843744f2"
        };

    export const firebaseApp = firebase.initializeApp(firebaseConfig);