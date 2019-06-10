import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD9BpDanbatDpI-JHU7Eg-mUZfxmZvS0x0",
    authDomain: "cm-marketplace.firebaseapp.com",
    databaseURL: "https://cm-marketplace.firebaseio.com",
    projectId: "cm-marketplace",
    storageBucket: "",
    messagingSenderId: "578853746566",
    appId: "1:578853746566:web:b5953dfcefe38b4c"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase;