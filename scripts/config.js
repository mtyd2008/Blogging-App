import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyBPAleHt5UhOsYqqjY8HTfRVT00hK0tDLs",
  authDomain: "authentication-45e31.firebaseapp.com",
  projectId: "authentication-45e31",
  storageBucket: "authentication-45e31.firebasestorage.app",
  messagingSenderId: "817116046489",
  appId: "1:817116046489:web:51d6bbb9345ef94f5cc408",
  measurementId: "G-8KBGVPY69Q"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
