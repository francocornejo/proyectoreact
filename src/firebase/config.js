import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMsbF9skv4iwAceooFBo5J_YkW2kDdl7I",
  authDomain: "proyectoreact-8b92c.firebaseapp.com",
  projectId: "proyectoreact-8b92c",
  storageBucket: "proyectoreact-8b92c.appspot.com",
  messagingSenderId: "923401360128",
  appId: "1:923401360128:web:79ce183d2ba98eb2cdd9e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)