// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ_bxF3EomWxH6mo72v-yXUAINKRHmp2k",

  authDomain: "fir-authneticaion.firebaseapp.com",

  projectId: "fir-authneticaion",

  storageBucket: "fir-authneticaion.appspot.com",

  messagingSenderId: "73475406370",

  appId: "1:73475406370:web:877d24b4d9a6ff361e287b",
};

// Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// const dbConfig = firebaseApp.firestore();
// const authConfig = firebase.auth();
// const provder = new firebase.authConfig.GoogleAuthProvider;
// const storage = firebase.storage();


// export {authConfig, provder, storage};
// export default dbConfig;


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);