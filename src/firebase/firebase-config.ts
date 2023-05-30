import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getDatabase} from"firebase/database";
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgyza0XGX5AnQJZT5ZAFul3g9SNc_6xBE",
  authDomain: "api-firebase-9d453.firebaseapp.com",
  databaseURL: "https://api-firebase-9d453-default-rtdb.firebaseio.com",
  projectId: "api-firebase-9d453",
  storageBucket: "api-firebase-9d453.appspot.com",
  messagingSenderId: "581375498180",
  appId: "1:581375498180:web:f21e7676e4fe84ac70b691"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getDatabase(app);
export const auth2 = getAuth(app);
export const storage = getStorage(app);

export function getFirebaseConfig() {
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.ts');
  } else {
    return firebaseConfig;
  }
}

//
