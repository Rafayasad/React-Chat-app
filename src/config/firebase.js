import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyBLRQY-xrIeJXuQOVRN8QW8gldcAyMztnI",
    authDomain: "chat-app-7f451.firebaseapp.com",
    projectId: "chat-app-7f451",
    storageBucket: "chat-app-7f451.appspot.com",
    messagingSenderId: "647705148683",
    appId: "1:647705148683:web:c80518b9510f37cac3f60e",
    measurementId: "G-M26M4KRQS6"
  };
  // Initialize Firebase
 var Firebase = firebase.initializeApp(firebaseConfig);
  
export default Firebase;