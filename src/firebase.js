// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAwWv6katmK8qpAxN_JSb8p8Z8IMqM3ZDU",
    authDomain: "vue-reddit-67b5e.firebaseapp.com",
    projectId: "vue-reddit-67b5e",
    storageBucket: "vue-reddit-67b5e.appspot.com",
    messagingSenderId: "396854403885",
    appId: "1:396854403885:web:0dd4b0a1b83930bd21e9a4",
    measurementId: "G-E6PQB7R7VR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, googleProvider };
