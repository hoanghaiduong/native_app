// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getDatabase} from 'firebase/database'
import {getFirestore} from 'firebase/firestore'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDD7Y5eelmdHmAW8xEwEcmMAFdZGVDzbSE",
  authDomain: "thuongmaidientu-1211f.firebaseapp.com",
  databaseURL: "https://thuongmaidientu-1211f-default-rtdb.firebaseio.com",
  projectId: "thuongmaidientu-1211f",
  storageBucket: "thuongmaidientu-1211f.appspot.com",
  messagingSenderId: "1008396240937",
  appId: "1:1008396240937:web:c4f4819834bfbac3e37438",
  measurementId: "G-LJM6J3R796"
};

// // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const defaultAuth=getAuth(app);
export const defaultFirestore=getFirestore(app);
const analytics = getAnalytics(app);