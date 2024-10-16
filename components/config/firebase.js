import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCfHsicooOPMST7G9RqSmbmVBKqkF0aMl0",
  authDomain: "help-app-48982.firebaseapp.com",
  projectId: "help-app-48982",
  storageBucket: "help-app-48982.appspot.com",
  messagingSenderId: "331065274156",
  appId: "1:331065274156:web:bff238b7ab472bddfb0689",
  measurementId: "G-ZGYSHGRRG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const analytics = getAnalytics(app);
const storage = getStorage(app)

export {auth, db, storage}