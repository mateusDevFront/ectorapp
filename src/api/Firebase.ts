// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCU5oYzNvF-KxH_OYDQ_kUKDSoGhRmepoo",
    authDomain: "db-ectorbarber.firebaseapp.com",
    projectId: "db-ectorbarber",
    storageBucket: "db-ectorbarber.appspot.com",
    messagingSenderId: "2103660724",
    appId: "1:2103660724:web:60aa620631fccd637247e1",
    measurementId: "G-5T5NPBYRGR"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }
  export { firebase }