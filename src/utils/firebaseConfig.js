// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXOyII_Py8Hvo3N8ZPiQmfoiPARY8oDjc",
  authDomain: "ecommerce-mates.firebaseapp.com",
  projectId: "ecommerce-mates",
  storageBucket: "ecommerce-mates.appspot.com",
  messagingSenderId: "201168743232",
  appId: "1:201168743232:web:5759929d13461e771268a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db