import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC0aTL2YL1r3R3zn2bpihy-ozEkt7_DchY",
  authDomain: "hospital-app-45eac.firebaseapp.com",
  projectId: "hospital-app-45eac",
  storageBucket: "hospital-app-45eac.appspot.com",
  messagingSenderId: "557064098526",
  appId: "1:557064098526:web:2d4900253e236e5822a84f",
  measurementId: "G-XY019EB2EH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const analytics = getAnalytics(app);
const storage = getStorage(app)

export {auth, db, storage}