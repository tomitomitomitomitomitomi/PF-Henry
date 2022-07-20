// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = firebase.initializeApp({
  apiKey: "AIzaSyCGI76ASLjSphRYrFlvsl2obX_SdqBbCII",
  authDomain: "beerland-42137.firebaseapp.com",
  databaseURL: "https://beerland-42137-default-rtdb.firebaseio.com",
  projectId: "beerland-42137",
  storageBucket: "beerland-42137.appspot.com",
  messagingSenderId: "287148172045",
  appId: "G-7PG2GV56C6",
});

// Initialize Firebase

export const auth = app.auth();
export default app;
