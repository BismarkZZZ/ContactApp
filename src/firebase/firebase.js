import firebase from "firebase/app";
import "firebase/firestore";

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBu-Yi-SH30fz_hcPbNgap7GydGoN1MFeY",
    authDomain: "contact-app-a5be0.firebaseapp.com",
    projectId: "contact-app-a5be0",
    storageBucket: "contact-app-a5be0.appspot.com",
    messagingSenderId: "1041818154185",
    appId: "1:1041818154185:web:9f6510d1be1035e67bc918"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;