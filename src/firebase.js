import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1J3qmCr07FMrS6fFHOHNtDHr-o1Sab1E",
  authDomain: "youtub-12.firebaseapp.com",
  projectId: "youtub-12",
  storageBucket: "youtub-12.appspot.com",
  messagingSenderId: "988751001339",
  appId: "1:988751001339:web:04f4bae98520249f11225e",
};

firebase.initializeApp(firebaseConfig);
export default firebase.auth();
