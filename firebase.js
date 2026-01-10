import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAiDfXoh-fNMCPFyjPeXasfwHCKL3WcF6w",
  authDomain: "urbanfix-91ece.firebaseapp.com",
  projectId: "urbanfix-91ece",
  storageBucket: "urbanfix-91ece.appspot.com",
  messagingSenderId: "348119310924",
  appId: "1:348119310924:web:7fab6f8608186adc138ae9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

console.log("Firebase initialized successfully");