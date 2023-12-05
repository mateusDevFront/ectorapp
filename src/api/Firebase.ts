import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

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

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
