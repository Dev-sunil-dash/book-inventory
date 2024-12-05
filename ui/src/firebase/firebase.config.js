// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHbE8_qz3VKm_H7yKGbI5udwMfxFz71rU",
    authDomain: "book-inventory-3d5f1.firebaseapp.com",
    projectId: "book-inventory-3d5f1",
    storageBucket: "book-inventory-3d5f1.firebasestorage.app",
    messagingSenderId: "797243940420",
    appId: "1:797243940420:web:0738125c7b54a415bfe611"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;