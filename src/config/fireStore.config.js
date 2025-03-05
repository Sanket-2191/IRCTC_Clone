import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyDBnQOLhOhri6wl9GAet5RF9uAxD-AM29o",
    authDomain: "irctc-clone-80b5a.firebaseapp.com",
    projectId: "irctc-clone-80b5a",
    storageBucket: "irctc-clone-80b5a.firebasestorage.app",
    messagingSenderId: "735012210719",
    appId: "1:735012210719:web:de509039fd7759ada72d2a",
    measurementId: "G-VXD3VDDVXE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const FireStoreDB = getFirestore(app);
export const auth = getAuth(app);
export default app;