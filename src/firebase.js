// import { initializeApp } from "firebase/app";
// import firebase from "firebase/app";
// import "firebase/auth"; // for authentication
// import "firebase/storage"; // for storage
// import "firebase/database"; // for realtime database
// import "firebase/firestore"; // for cloud firestore
import firebase from "firebase/compat/app";
import "firebase/compat/auth"; // for authentication
import "firebase/compat/storage"; // for storage
import "firebase/compat/database"; // for realtime database
import "firebase/compat/firestore"; // for cloud firestore
const firebaseConfig = {
  apiKey: "AIzaSyAeODXgPPZkwVQH5bu3MgYZwQ5wHps3r60",
  authDomain: "chatapp-501fb.firebaseapp.com",
  databaseURL:
    "https://chatapp-501fb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chatapp-501fb",
  storageBucket: "chatapp-501fb.appspot.com",
  messagingSenderId: "236011471114",
  appId: "1:236011471114:web:f9f8a51aadd78dfeeabaf3",
  measurementId: "G-2KTM0QG88E",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
// const app = initializeApp(firebaseConfig);
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// export { auth, provider };
// export default db;
