import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC8e1wDeb3X3uQ2-OkUGrXqUm_coZrogMc",
    authDomain: "blog-e723f.firebaseapp.com",
    projectId: "blog-e723f",
    storageBucket: "blog-e723f.appspot.com",
    messagingSenderId: "727336114989",
    appId: "1:727336114989:web:9439e193672add2b4751a4",
    measurementId: "G-89HMBJE13V"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
